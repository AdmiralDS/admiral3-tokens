import { describe, expect, it } from 'vitest';

import { globalColors, themeColors, themeShadowColors } from '../color';
import { radius } from '../radius';
import { themeModes, type ThemeMode } from '../themes';
import { typographyPrimitives } from '../typography';
import localVariables from './local-variables.json';

type LocalVariablesGroup = Record<string, readonly Record<string, Record<string, string | number>>[]>;
type LocalVariables = readonly LocalVariablesGroup[];
type TokenRecord = Record<string, string>;

const source = localVariables as unknown as LocalVariables;

const getSourceGroup = (groupName: string, variantName: string) => {
  const group = source.find((item) => groupName in item)?.[groupName];
  const variant = group?.find((item) => variantName in item)?.[variantName];

  if (!variant) {
    throw new Error(`Missing ${groupName}/${variantName} in Pixso local variables source.`);
  }

  return variant;
};

const capitalize = (value: string) => value.replace(/^./, (letter) => letter.toUpperCase());

const normalizeRgba = (value: string) => {
  const match = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(value);

  if (!match) {
    return value;
  }

  const [, red, green, blue, alpha] = match;

  const normalizedAlpha = Number(alpha).toFixed(2).replace(/0+$/, '').replace(/\.$/, '');

  return `rgba(${red}, ${green}, ${blue}, ${normalizedAlpha})`;
};

const rgbaToHex = (value: string) => {
  const match = /^rgba\((\d+), (\d+), (\d+), ([\d.]+)\)$/.exec(value);

  if (!match) {
    return value;
  }

  const [, red, green, blue, alpha] = match;

  if (Number(alpha) !== 1) {
    return normalizeRgba(value);
  }

  return `#${[red, green, blue].map((part) => Number(part).toString(16).padStart(2, '0').toUpperCase()).join('')}`;
};

const sourceReferenceToTokenReference = (value: string) => {
  const match = /^var\(--(.+)\)$/.exec(value);

  if (!match) {
    return value;
  }

  const path = match[1].split('/');

  if (path[0] === 'Neutral') {
    if (path[1] === 'Black') {
      return 'neutral.black';
    }

    if (path[1] === 'White') {
      return 'neutral.white';
    }

    return `neutral.grey${path[1].split('-')[1]}`;
  }

  if (path[0] === 'Primary') {
    return `primary.primary${path[1].split('-')[1]}`;
  }

  if (path[0] === 'Status') {
    const group = path[1].toLowerCase();

    return `${group}.${group}${path[2].split('-')[1]}`;
  }

  if (path[0] === 'Extra') {
    const group = path[1].toLowerCase();

    return `${group}.${group}${path[2].split('-')[1]}`;
  }

  if (path[0] === 'Opacity') {
    return `opacity${path[1]}.${path[2].split('-')[1]}`;
  }

  return value;
};

const tokenSegmentToSourceSegment = (segment: string) =>
  segment
    .replace(/^_(\d+)$/, '$1')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Za-z])(\d+)/g, '$1/$2')
    .replace(/^./, (letter) => letter.toUpperCase());

const flattenTokenReferences = (
  value: unknown,
  path: readonly string[] = [],
): readonly (readonly [string, string])[] => {
  if (typeof value === 'string') {
    return [[path.join('/'), value]];
  }

  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return [];
  }

  return Object.entries(value).flatMap(([key, nestedValue]) =>
    flattenTokenReferences(nestedValue, [...path, tokenSegmentToSourceSegment(key)]),
  );
};

const withoutLeadingSegment =
  (segment: string) =>
  ([path, value]: readonly [string, string]) =>
    [path.replace(new RegExp(`^${segment}/`), ''), value] as const;

const buildGlobalColorTokens = () => {
  const tokens: TokenRecord = {};

  Object.entries(globalColors.neutral).forEach(([key, value]) => {
    tokens[key === 'black' || key === 'white' ? `--Neutral/${capitalize(key)}` : `--Neutral/Grey-${key.slice(4)}`] =
      value;
  });

  Object.entries(globalColors.primary).forEach(([key, value]) => {
    tokens[`--Primary/Primary-${key.replace('primary', '')}`] = value;
  });

  (['error', 'success', 'warning', 'attention'] as const).forEach((group) => {
    Object.entries(globalColors[group]).forEach(([key, value]) => {
      tokens[`--Status/${capitalize(group)}/${capitalize(group)}-${key.replace(group, '')}`] = value;
    });
  });

  (['blue', 'purple', 'magenta', 'teal'] as const).forEach((group) => {
    Object.entries(globalColors[group]).forEach(([key, value]) => {
      tokens[`--Extra/${capitalize(group)}/${capitalize(group)}-${key.replace(group, '')}`] = value;
    });
  });

  Object.entries(globalColors.opacityBlack).forEach(([key, value]) => {
    tokens[`--Opacity/Black/Black-${key}`] = value;
  });

  Object.entries(globalColors.opacityWhite).forEach(([key, value]) => {
    tokens[`--Opacity/White/White-${key}`] = value;
  });

  return tokens;
};

const themeModeSourceNames: Record<ThemeMode, string> = {
  light: 'Light',
  dark: 'Dark',
  lightNeutral: 'Neutral Light',
  darkNeutral: 'Neutral Dark',
};

const getBinaryThemeMode = (mode: ThemeMode) => (mode.startsWith('dark') ? 'dark' : 'light');
const getNeutralMode = (mode: ThemeMode) =>
  mode === 'lightNeutral' || mode === 'darkNeutral' ? mode : getBinaryThemeMode(mode);

const selectThemeTokenMode = (value: unknown, mode: ThemeMode): unknown => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  if (mode in value && typeof (value as Record<string, unknown>)[mode] === 'string') {
    return (value as Record<string, unknown>)[mode];
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, nestedValue]) => [key, selectThemeTokenMode(nestedValue, mode)]),
  );
};

const buildThemeColorTokens = (mode: ThemeMode) => {
  const tokens: TokenRecord = {};
  const binaryMode = getBinaryThemeMode(mode);
  const primaryMode = getNeutralMode(mode);

  flattenTokenReferences(selectThemeTokenMode(themeColors.neutral.base, binaryMode))
    .map(withoutLeadingSegment('Base'))
    .forEach(([path, value]) => {
      tokens[`--Neutral/Base/${path}`] = value;
    });

  flattenTokenReferences(selectThemeTokenMode(themeColors.neutral.text, getNeutralMode(mode)))
    .map(withoutLeadingSegment('Text'))
    .forEach(([path, value]) => {
      tokens[`--Neutral/Text/${path}`] = value;
    });

  flattenTokenReferences(selectThemeTokenMode(themeColors.neutral.stroke, getNeutralMode(mode)))
    .map(withoutLeadingSegment('Stroke'))
    .forEach(([path, value]) => {
      tokens[`--Neutral/Stroke/${path}`] = value;
    });

  flattenTokenReferences(selectThemeTokenMode(themeColors.primary.base, primaryMode))
    .map(withoutLeadingSegment('Base'))
    .forEach(([path, value]) => {
      tokens[`--Primary/Base/${path}`] = value;
    });

  flattenTokenReferences(selectThemeTokenMode(themeColors.primary.text, primaryMode))
    .map(withoutLeadingSegment('Text'))
    .forEach(([path, value]) => {
      tokens[`--Primary/Text/${path}`] = value;
    });

  flattenTokenReferences(selectThemeTokenMode(themeColors.primary.stroke, primaryMode))
    .map(withoutLeadingSegment('Stroke'))
    .forEach(([path, value]) => {
      tokens[`--Primary/Stroke/${path}`] = value;
    });

  (['error', 'success', 'warning', 'attention'] as const).forEach((group) => {
    flattenTokenReferences(selectThemeTokenMode(themeColors[group].base, binaryMode))
      .map(withoutLeadingSegment('Base'))
      .forEach(([path, value]) => {
        tokens[`--${capitalize(group)}/Base/${path}`] = value;
      });

    flattenTokenReferences(selectThemeTokenMode(themeColors[group].text, binaryMode))
      .map(withoutLeadingSegment('Text'))
      .forEach(([path, value]) => {
        tokens[`--${capitalize(group)}/Text/${path}`] = value;
      });

    flattenTokenReferences(selectThemeTokenMode(themeColors[group].stroke, binaryMode))
      .map(withoutLeadingSegment('Stroke'))
      .forEach(([path, value]) => {
        tokens[`--${capitalize(group)}/Stroke/${path}`] = value;
      });
  });

  (['blue', 'purple', 'magenta', 'teal'] as const).forEach((group) => {
    flattenTokenReferences(selectThemeTokenMode(themeColors[group].base, binaryMode))
      .map(withoutLeadingSegment('Base'))
      .forEach(([path, value]) => {
        tokens[`--Extra/${capitalize(group)}/Base/${path}`] = value;
      });

    flattenTokenReferences(selectThemeTokenMode(themeColors[group].text, binaryMode))
      .map(withoutLeadingSegment('Text'))
      .forEach(([path, value]) => {
        tokens[`--Extra/${capitalize(group)}/Text/${path}`] = value;
      });

    flattenTokenReferences(selectThemeTokenMode(themeColors[group].stroke, binaryMode))
      .map(withoutLeadingSegment('Stroke'))
      .forEach(([path, value]) => {
        tokens[`--Extra/${capitalize(group)}/Stroke/${path}`] = value;
      });
  });

  tokens['--Shadows/Оutline M'] = themeShadowColors.outlineM[mode];
  tokens['--Shadows/Оutline L'] = themeShadowColors.outlineL[mode];
  tokens['--Shadows/Main M'] = themeShadowColors.mainM[mode];
  tokens['--Shadows/Main L'] = themeShadowColors.mainL[mode];

  return tokens;
};

describe('Pixso local variables source', () => {
  it('keeps implemented global color tokens synchronized with the saved export', () => {
    const sourceTokens = getSourceGroup('Global Colors', 'Parameter');
    const currentTokens = buildGlobalColorTokens();

    expect(new Set(Object.keys(currentTokens))).toEqual(new Set(Object.keys(sourceTokens)));

    Object.entries(currentTokens).forEach(([name, value]) => {
      expect(value).toBe(rgbaToHex(String(sourceTokens[name])));
    });
  });

  it('keeps implemented theme color tokens synchronized with the saved export', () => {
    themeModes.forEach((mode) => {
      const sourceTokens = getSourceGroup('Theme Colors', themeModeSourceNames[mode]);
      const currentTokens = buildThemeColorTokens(mode);

      expect(new Set(Object.keys(currentTokens))).toEqual(new Set(Object.keys(sourceTokens)));

      Object.entries(currentTokens).forEach(([name, value]) => {
        expect(value).toBe(sourceReferenceToTokenReference(String(sourceTokens[name])));
      });
    });
  });

  it('keeps implemented radius tokens synchronized with the saved export', () => {
    Object.entries(radius.byBase).forEach(([base, group]) => {
      const sourceTokens = getSourceGroup('Corner Radius', `Radius ${base}`);

      expect(`${sourceTokens['--Small']}px`).toBe(group.small);
      expect(`${sourceTokens['--Medium']}px`).toBe(group.medium);
      expect(`${sourceTokens['--Large']}px`).toBe(group.large);
    });
  });

  it('keeps implemented typography primitives synchronized with the saved export', () => {
    const sourceTokens = getSourceGroup('Typography', 'Default');
    const fontSizes = Object.values(typographyPrimitives.fontSize);
    const lineHeights = Object.values(typographyPrimitives.lineHeight);

    expect(fontSizes).toEqual(
      Object.entries(sourceTokens)
        .filter(([name]) => name.startsWith('--Font-Size/'))
        .map(([, value]) => `${value}px`),
    );
    expect(lineHeights).toEqual([
      ...new Set(
        Object.entries(sourceTokens)
          .filter(([name]) => name.startsWith('--Line-Height/'))
          .map(([, value]) => `${value}px`),
      ),
    ]);
  });
});
