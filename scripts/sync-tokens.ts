import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

type TokenValue = string | number;
type TokenGroup = Record<string, readonly Record<string, Record<string, TokenValue>>[]>;
type LocalVariables = readonly TokenGroup[];
type SourceTokens = Record<string, TokenValue>;
type GeneratedValue = string | number | GeneratedObject;
interface GeneratedObject {
  [key: string]: GeneratedValue;
}
type ThemeMode = 'light' | 'dark' | 'lightNeutral' | 'darkNeutral';
type ThemeFamily = 'base' | 'text' | 'stroke';
interface TokenSyncStep {
  tokenGroup: string;
  sourceGroups: readonly string[];
  run: () => Promise<void>;
}

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const sourcePath = path.join(rootDir, 'src/tokens/source/local-variables.json');

/** Исходный Pixso export с локальными переменными, из которого генерируются TypeScript token maps. */
const source = JSON.parse(await readFile(sourcePath, 'utf8')) as LocalVariables;

/** Соответствие публичных mode names названиям вариантов в Pixso export. */
const themeModeSourceNames: Record<ThemeMode, string> = {
  light: 'Light',
  dark: 'Dark',
  lightNeutral: 'Neutral Light',
  darkNeutral: 'Neutral Dark',
};

const statusGroups = ['error', 'success', 'warning', 'attention'] as const;
const extraGroups = ['blue', 'teal', 'magenta', 'purple'] as const;
const families = ['base', 'text', 'stroke'] as const;

/**
 * Возвращает конкретный набор переменных из Pixso export.
 *
 * В файле `local-variables.json` группы представлены как массив объектов, поэтому прямого доступа по пути нет:
 * сначала ищем группу верхнего уровня, затем нужный variant внутри неё.
 */
const getSourceGroup = (groupName: string, variantName: string) => {
  const group = source.find((item) => groupName in item)?.[groupName];
  const variant = group?.find((item) => variantName in item)?.[variantName];

  if (!variant) {
    throw new Error(`Missing ${groupName}/${variantName} in Pixso local variables source.`);
  }

  return variant;
};

const capitalize = (value: string) => value.replace(/^./, (letter) => letter.toUpperCase());

const camelCase = (value: string) =>
  value
    .replace(/\s+([A-Za-z0-9])/g, (_, letter: string) => letter.toUpperCase())
    .replace(/^./, (letter) => letter.toLowerCase());

/**
 * Нормализует цветовые значения из Pixso.
 *
 * Pixso отдаёт часть цветов как `rgba(...)` даже при `alpha = 1`. Для стабильного результата такие значения
 * переводятся в hex, а дробная alpha сокращается до минимально нужного числа знаков.
 */
const formatRgba = (value: string) => {
  const match = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(value);

  if (!match) {
    return value;
  }

  const [, red, green, blue, alpha] = match;
  const normalizedAlpha = Number(alpha).toFixed(2).replace(/0+$/, '').replace(/\.$/, '');

  if (Number(normalizedAlpha) === 1) {
    return `#${[red, green, blue].map((part) => Number(part).toString(16).padStart(2, '0').toUpperCase()).join('')}`;
  }

  return `rgba(${red}, ${green}, ${blue}, ${normalizedAlpha})`;
};

/**
 * Переводит CSS reference из Pixso в ссылку на token map пакета.
 *
 * Пример: `var(--Neutral/Grey-50)` превращается в `neutral.grey50`, чтобы theme tokens ссылались
 * на существующие global color tokens, а не дублировали цветовые значения.
 */
const sourceReferenceToTokenReference = (value: string) => {
  const match = /^var\(--(.+)\)$/.exec(value);

  if (!match) {
    return value;
  }

  const tokenPath = match[1].split('/');

  if (tokenPath[0] === 'Neutral') {
    if (tokenPath[1] === 'Black') {
      return 'neutral.black';
    }

    if (tokenPath[1] === 'White') {
      return 'neutral.white';
    }

    return `neutral.grey${tokenPath[1].split('-')[1]}`;
  }

  if (tokenPath[0] === 'Primary') {
    return `primary.primary${tokenPath[1].split('-')[1]}`;
  }

  if (tokenPath[0] === 'Status') {
    const group = tokenPath[1].toLowerCase();

    return `${group}.${group}${tokenPath[2].split('-')[1]}`;
  }

  if (tokenPath[0] === 'Extra') {
    const group = tokenPath[1].toLowerCase();

    return `${group}.${group}${tokenPath[2].split('-')[1]}`;
  }

  if (tokenPath[0] === 'Opacity') {
    return `opacity${tokenPath[1]}.${tokenPath[2].split('-')[1]}`;
  }

  return value;
};

const createObject = () => ({}) as GeneratedObject;

/**
 * Записывает значение в объект по вложенному пути и создаёт промежуточные объекты, если их ещё нет.
 *
 * Используется при сборке theme maps, где Pixso path вроде `Text/Primary/Text 1/Rest` должен стать
 * вложенной структурой `text1.rest`.
 */
const setNestedValue = (target: GeneratedObject, pathParts: readonly string[], value: GeneratedValue) => {
  let current = target;

  pathParts.slice(0, -1).forEach((part) => {
    const nested = current[part];

    if (!nested || typeof nested !== 'object') {
      current[part] = createObject();
    }

    current = current[part] as GeneratedObject;
  });

  current[pathParts[pathParts.length - 1]] = value;
};

const isIdentifier = (value: string) => /^[A-Za-z_$][\w$]*$/.test(value);

/** Рендерит строку для TypeScript-кода и выбирает кавычки так, чтобы было меньше escape-последовательностей. */
const renderString = (value: string) => {
  if (value.includes("'") && !value.includes('"')) {
    return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
  }

  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
};

/**
 * Рекурсивно рендерит plain object в TypeScript object literal.
 *
 * Скрипт пишет source-файлы напрямую, поэтому здесь вручную сохраняются отступы, валидные ключи без кавычек
 * и строковые ключи в кавычках.
 */
const renderObject = (value: GeneratedObject, level = 0): string => {
  const indent = '  '.repeat(level);
  const nestedIndent = '  '.repeat(level + 1);
  const entries = Object.entries(value).map(([key, nestedValue]) => {
    const renderedKey = isIdentifier(key) ? key : `'${key}'`;
    const renderedValue =
      typeof nestedValue === 'object'
        ? renderObject(nestedValue, level + 1)
        : typeof nestedValue === 'string'
          ? renderString(nestedValue)
          : String(nestedValue);

    return `${nestedIndent}${renderedKey}: ${renderedValue},`;
  });

  return `{\n${entries.join('\n')}\n${indent}}`;
};

/** Рендерит `export const ... as const` и, при необходимости, тип от этой константы. */
const renderExportedConst = (name: string, value: GeneratedObject, typeName?: string) =>
  [
    `export const ${name} = ${renderObject(value)} as const;`,
    typeName ? `\nexport type ${typeName} = typeof ${name};` : '',
  ]
    .filter(Boolean)
    .join('\n');

/** Рендерит плоский объект из entries, когда порядок ключей важнее вложенной структуры. */
const renderExportedConstEntries = (name: string, entries: readonly (readonly [string, string])[]) =>
  [
    `export const ${name} = {`,
    entries.map(([key, value]) => `  '${key}': ${renderString(value)},`).join('\n'),
    `} as const;`,
  ].join('\n');

/** Пишет generated-файл относительно корня репозитория и гарантирует один перевод строки в конце файла. */
const writeGeneratedFile = async (relativePath: string, content: string) => {
  await writeFile(path.join(rootDir, relativePath), `${content.trimEnd()}\n`, 'utf8');
};

/**
 * Собирает палитру из переменных с общим Pixso prefix.
 *
 * Например, `--Primary/Primary-50` становится ключом `primary50`.
 */
const buildPalette = (tokens: SourceTokens, sourcePrefix: string, tokenPrefix: string) => {
  const palette = createObject();
  const prefix = `--${sourcePrefix}-`;

  Object.entries(tokens)
    .filter(([name]) => name.startsWith(prefix))
    .forEach(([name, value]) => {
      const step = name.slice(prefix.length);

      if (!step) {
        throw new Error(`Cannot parse palette step from ${name}.`);
      }

      palette[`${tokenPrefix}${step}`] = formatRgba(String(value));
    });

  return palette;
};

/** То же преобразование, что и `buildPalette`, но возвращает entries для контролируемого рендера объекта. */
const buildPaletteEntries = (tokens: SourceTokens, sourcePrefix: string, tokenPrefix: string) => {
  const prefix = `--${sourcePrefix}-`;

  return Object.entries(tokens)
    .filter(([name]) => name.startsWith(prefix))
    .map(([name, value]) => [`${tokenPrefix}${name.slice(prefix.length)}`, formatRgba(String(value))] as const);
};

/** Оставляет в объекте только перечисленные ключи и сохраняет порядок из `keys`. */
const pickObjectKeys = (sourceObject: GeneratedObject, keys: readonly string[]) =>
  Object.fromEntries(
    keys.filter((key) => key in sourceObject).map((key) => [key, sourceObject[key]]),
  ) as GeneratedObject;

/** Пересобирает объект с theme modes в заданном порядке и внутри каждого mode упорядочивает token keys. */
const reorderModeTokenKeys = (
  sourceObject: GeneratedObject,
  modes: readonly ThemeMode[],
  keys: readonly string[],
): GeneratedObject =>
  Object.fromEntries(
    modes.map((mode) => {
      const modeTokens = sourceObject[mode] as GeneratedObject;

      return [mode, pickObjectKeys(modeTokens, keys)];
    }),
  ) as GeneratedObject;

/**
 * Генерирует global color token maps.
 *
 * Источник: `Global Colors / Parameter` из Pixso export. На выходе получаются neutral, primary,
 * status, extra и opacity файлы в `src/tokens/color/globalColors`.
 */
const buildGlobalColorMaps = async () => {
  const tokens = getSourceGroup('Global Colors', 'Parameter');
  const neutral = createObject();

  // Neutral имеет особые имена: Black/White становятся black/white, а Grey-* превращается в grey*.
  Object.entries(tokens)
    .filter(([name]) => name.startsWith('--Neutral/'))
    .forEach(([name, value]) => {
      const segment = name.replace('--Neutral/', '');
      const key =
        segment === 'Black' || segment === 'White' ? segment.toLowerCase() : `grey${segment.replace('Grey-', '')}`;

      neutral[key] = formatRgba(String(value));
    });

  // Status и Extra палитры устроены одинаково, поэтому их можно собрать через общий helper.
  const status = Object.fromEntries(
    statusGroups.map((group) => [
      group,
      buildPalette(tokens, `Status/${capitalize(group)}/${capitalize(group)}`, group),
    ]),
  );
  const extra = Object.fromEntries(
    extraGroups.map((group) => [group, buildPalette(tokens, `Extra/${capitalize(group)}/${capitalize(group)}`, group)]),
  );
  await writeGeneratedFile('src/tokens/color/globalColors/neutral.ts', renderExportedConst('neutral', neutral));
  await writeGeneratedFile(
    'src/tokens/color/globalColors/primary.ts',
    renderExportedConst('primary', buildPalette(tokens, 'Primary/Primary', 'primary')),
  );
  await writeGeneratedFile(
    'src/tokens/color/globalColors/status.ts',
    [
      renderExportedConst('error', status.error),
      renderExportedConst('success', status.success),
      renderExportedConst('warning', status.warning),
      renderExportedConst('attention', status.attention),
    ].join('\n\n'),
  );
  await writeGeneratedFile(
    'src/tokens/color/globalColors/extra.ts',
    [
      renderExportedConst('blue', extra.blue),
      renderExportedConst('teal', extra.teal),
      renderExportedConst('magenta', extra.magenta),
      renderExportedConst('purple', extra.purple),
    ].join('\n\n'),
  );
  await writeGeneratedFile(
    'src/tokens/color/globalColors/opacity.ts',
    [
      renderExportedConstEntries('opacityBlack', buildPaletteEntries(tokens, 'Opacity/Black/Black', '')),
      renderExportedConstEntries('opacityWhite', buildPaletteEntries(tokens, 'Opacity/White/White', '')),
    ].join('\n\n'),
  );
};

/**
 * Преобразует сегмент Pixso пути в ключ theme object.
 *
 * Первый числовой сегмент получает prefix семейства (`base8`, `text1`, `stroke2`), остальные сегменты
 * переводятся в camelCase.
 */
const sourceSegmentToThemeKey = (family: ThemeFamily, segment: string, index: number) => {
  if (index === 0 && /^\d+$/.test(segment)) {
    return `${family}${segment}`;
  }

  return camelCase(segment);
};

/**
 * Добавляет tokens одного семейства в целевой theme map.
 *
 * `sourcePrefix` выбирает ветку Pixso variables, `modePath` добавляет дополнительный уровень для групп
 * вроде `status.error`, а `mode` кладёт значение в нужную тему.
 */
const addThemeTokens = (
  target: GeneratedObject,
  mode: ThemeMode,
  tokens: SourceTokens,
  options: {
    family: ThemeFamily;
    sourcePrefix: string;
    modePath: readonly string[];
  },
) => {
  const prefix = `--${options.sourcePrefix}/`;

  // Обрезаем общий prefix, переводим оставшиеся сегменты в формат token object и записываем reference.
  Object.entries(tokens)
    .filter(([name]) => name.startsWith(prefix))
    .forEach(([name, value]) => {
      const tokenPath = name
        .slice(prefix.length)
        .split('/')
        .map((segment, index) => sourceSegmentToThemeKey(options.family, segment, index));

      setNestedValue(target, [...options.modePath, mode, ...tokenPath], sourceReferenceToTokenReference(String(value)));
    });
};

/**
 * Генерирует theme color token maps.
 *
 * Источник: `Theme Colors` из Pixso export. Для каждой темы собираются семейства `base`, `text`, `stroke`,
 * а shadow color references забираются из той же группы.
 */
const buildThemeColorMaps = async () => {
  const neutral = {
    base: createObject(),
    text: createObject(),
    stroke: createObject(),
  };
  const primary = {
    base: createObject(),
    text: createObject(),
    stroke: createObject(),
  };
  const status = {
    base: createObject(),
    text: createObject(),
    stroke: createObject(),
  };
  const extra = {
    base: createObject(),
    text: createObject(),
    stroke: createObject(),
  };
  const shadowColors = createObject();

  Object.entries(themeModeSourceNames).forEach(([modeName, sourceName]) => {
    const mode = modeName as ThemeMode;
    const tokens = getSourceGroup('Theme Colors', sourceName);

    // Neutral и Primary есть во всех четырёх theme modes.
    families.forEach((family) => {
      const sourceFamily = capitalize(family);

      addThemeTokens(neutral[family], mode, tokens, {
        family,
        sourcePrefix: `Neutral/${sourceFamily}`,
        modePath: [],
      });
      addThemeTokens(primary[family], mode, tokens, {
        family,
        sourcePrefix: `Primary/${sourceFamily}`,
        modePath: [],
      });

      statusGroups.forEach((group) => {
        // Status colors сейчас есть только в базовых light/dark темах.
        if (mode === 'light' || mode === 'dark') {
          addThemeTokens(status[family], mode, tokens, {
            family,
            sourcePrefix: `${capitalize(group)}/${sourceFamily}`,
            modePath: [group],
          });
        }
      });

      extraGroups.forEach((group) => {
        // Extra colors сейчас есть только в базовых light/dark темах.
        if (mode === 'light' || mode === 'dark') {
          addThemeTokens(extra[family], mode, tokens, {
            family,
            sourcePrefix: `Extra/${capitalize(group)}/${sourceFamily}`,
            modePath: [group],
          });
        }
      });
    });

    // Pixso export иногда содержит кириллическую `О` в имени shadow token, поэтому нормализуем её в латинскую `O`.
    Object.entries(tokens)
      .filter(([name]) => name.startsWith('--Shadows/'))
      .forEach(([name, value]) => {
        const key = camelCase(name.replace('--Shadows/', '').replace(/^О/, 'O'));

        setNestedValue(shadowColors, [key, mode], sourceReferenceToTokenReference(String(value)));
      });
  });

  await writeGeneratedFile(
    'src/tokens/color/themeColors/base/neutral.ts',
    renderExportedConst(
      'neutralBase',
      {
        light: neutral.base.light,
        dark: neutral.base.dark,
      } as GeneratedObject,
      'NeutralBase',
    ),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/base/primary.ts',
    renderExportedConst('primaryBase', primary.base, 'PrimaryBase'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/base/status.ts',
    renderExportedConst('statusBase', status.base, 'StatusBase'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/base/extra.ts',
    renderExportedConst('extraBase', extra.base, 'ExtraBase'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/text/neutral.ts',
    // Для neutral text порядок важен для читаемости generated-файла и совпадения с публичной документацией.
    renderExportedConst(
      'neutralText',
      reorderModeTokenKeys(
        neutral.text,
        ['light', 'dark', 'lightNeutral', 'darkNeutral'],
        ['text1', 'text2', 'text3', 'inverted', 'disable', 'staticWhite', 'staticBlack'],
      ),
      'NeutralText',
    ),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/text/primary.ts',
    renderExportedConst('primaryText', primary.text, 'PrimaryText'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/text/status.ts',
    renderExportedConst('statusText', status.text, 'StatusText'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/text/extra.ts',
    renderExportedConst('extraText', extra.text, 'ExtraText'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/stroke/neutral.ts',
    renderExportedConst('neutralStroke', neutral.stroke, 'NeutralStroke'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/stroke/primary.ts',
    renderExportedConst('primaryStroke', primary.stroke, 'PrimaryStroke'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/stroke/status.ts',
    renderExportedConst('statusStroke', status.stroke, 'StatusStroke'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/stroke/extra.ts',
    renderExportedConst('extraStroke', extra.stroke, 'ExtraStroke'),
  );
  await writeGeneratedFile(
    'src/tokens/color/themeColors/shadow/shadow.ts',
    renderExportedConst(
      'shadowColors',
      pickObjectKeys(shadowColors, ['outlineM', 'mainM', 'outlineL', 'mainL']),
      'ShadowColors',
    ),
  );
};

/**
 * Генерирует radius token map.
 *
 * Pixso хранит варианты как отдельные группы `Radius 0`, `Radius 2` и т.д. В пакете это один объект
 * `radius.byBase`, дополненный строковыми aliases для совместимости с design-token именами.
 */
const buildRadiusMap = async () => {
  const byBase = createObject();

  ['0', '2', '4', '6', '8'].forEach((base) => {
    const sourceTokens = getSourceGroup('Corner Radius', `Radius ${base}`);

    byBase[base] = {
      small: `${sourceTokens['--Small']}px`,
      medium: `${sourceTokens['--Medium']}px`,
      large: `${sourceTokens['--Large']}px`,
    };
  });

  // Этот фрагмент вставляется внутрь generated-файла, чтобы сохранить компактный формат `byBase`.
  const byBaseEntries = Object.entries(byBase)
    .map(([base, group]) => {
      const radiusGroup = group as GeneratedObject;

      return `    '${base}': { small: '${radiusGroup.small}', medium: '${radiusGroup.medium}', large: '${radiusGroup.large}' },`;
    })
    .join('\n');

  await writeGeneratedFile(
    'src/tokens/radius/radius.ts',
    `export const cornerRadiusOptions = ['0', '2', '4', '6', '8'] as const;

type FlatRadiusTokens = Record<string, string>;

const toRadiusTokenNameSegment = (segment: string) => segment.replace(/^./, (letter) => letter.toUpperCase());

const defineStringAliases = <T extends object>(target: T, aliases: FlatRadiusTokens) =>
  Object.defineProperties(
    target,
    Object.fromEntries(
      Object.entries(aliases).map(([key, value]) => [
        key,
        {
          value,
          enumerable: false,
        },
      ]),
    ),
  ) as T & Readonly<FlatRadiusTokens>;

const radiusTokens = {
  default: '4',
  byBase: {
${byBaseEntries}
  },
} as const;

const radiusAliases = Object.fromEntries(
  Object.entries(radiusTokens.byBase).flatMap(([base, groups]) =>
    Object.entries(groups).map(([group, value]) => [\`By Base/\${base}/\${toRadiusTokenNameSegment(group)}\`, value]),
  ),
) as FlatRadiusTokens;

export const radius = defineStringAliases(radiusTokens, radiusAliases);

export type CornerRadiusBase = keyof typeof radius.byBase;
export type RadiusGroup = keyof (typeof radius.byBase)['4'];
`,
  );
};

/**
 * Генерирует typography primitives.
 *
 * Font family и font weight задаются явно в пакете, а font size и line height берутся из Pixso export.
 */
const buildTypographyPrimitives = async () => {
  const tokens = getSourceGroup('Typography', 'Default');
  const fontSize = createObject();
  const lineHeight = createObject();

  // Значение Pixso становится и ключом, и частью CSS value: `16` -> `fontSize['16'] = '16px'`.
  Object.entries(tokens)
    .filter(([name]) => name.startsWith('--Font-Size/'))
    .forEach(([, value]) => {
      fontSize[String(value)] = `${value}px`;
    });

  // Line height строится по той же схеме, что и font size.
  Object.entries(tokens)
    .filter(([name]) => name.startsWith('--Line-Height/'))
    .forEach(([, value]) => {
      lineHeight[String(value)] = `${value}px`;
    });

  await writeGeneratedFile(
    'src/tokens/typography/primitives.ts',
    `export const typographyPrimitives = ${renderObject({
      fontFamily: {
        primary: "'VTB Group UI', Arial, sans-serif",
        monospace: "'Source Code Pro', 'Courier New', monospace",
      },
      fontWeight: {
        book: 400,
        medium: 500,
        semibold: 550,
      },
      fontSize,
      lineHeight,
    })} as const;

export type TypographyPrimitives = typeof typographyPrimitives;
export type FontFamily = keyof typeof typographyPrimitives.fontFamily;
export type FontWeight = keyof typeof typographyPrimitives.fontWeight;
export type FontSize = keyof typeof typographyPrimitives.fontSize;
export type LineHeight = keyof typeof typographyPrimitives.lineHeight;
`,
  );
};

/**
 * Реестр существующих групп синхронизации.
 *
 * При добавлении новых Pixso-driven групп, например `animation`, `breakpoints` или `zIndex`, добавьте рядом отдельный
 * `build<Group>Map` с преобразованием source tokens в публичную TS map, unit-тест синхронизации и новый шаг в этот список.
 * Не добавляйте группу сюда, пока в `local-variables.json` нет стабильной Pixso-структуры и не принято решение по
 * публичным exports, CSS variables и theme object.
 */
const tokenSyncSteps: readonly TokenSyncStep[] = [
  {
    tokenGroup: 'global colors',
    sourceGroups: ['Global Colors'],
    run: buildGlobalColorMaps,
  },
  {
    tokenGroup: 'theme colors',
    sourceGroups: ['Theme Colors'],
    run: buildThemeColorMaps,
  },
  {
    tokenGroup: 'radius',
    sourceGroups: ['Corner Radius'],
    run: buildRadiusMap,
  },
  {
    tokenGroup: 'typography primitives',
    sourceGroups: ['Typography'],
    run: buildTypographyPrimitives,
  },
];

// Основной порядок синхронизации: сначала базовые tokens, затем theme maps и остальные группы.
for (const step of tokenSyncSteps) {
  await step.run();
}

// eslint-disable-next-line no-console
console.log(
  `Token maps synchronized from src/tokens/source/local-variables.json: ${tokenSyncSteps
    .map((step) => step.tokenGroup)
    .join(', ')}`,
);
