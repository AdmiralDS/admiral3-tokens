import { styled, useTheme } from 'styled-components';

import { themes, typography, type BuiltTheme, type ThemeMode } from '@admiral-ds/admiral3-tokens';

type ThemeColorSection = 'base' | 'text' | 'stroke';
type ThemeColorTokenGroup = 'neutral' | 'primary' | 'status' | 'extra';
type ThemeColorSourceMode = ThemeMode | 'light' | 'dark';
type ThemeColorStateMap = Readonly<Record<string, string>>;
type ThemeColorGroupMap = Readonly<Record<string, ThemeColorStateMap>>;
type ThemeColorTokenSource = Readonly<Record<string, unknown>>;
type ThemeColorPaletteSource = Readonly<Record<ThemeColorSection, ThemeColorTokenSource>>;
type ThemeColorSource = ThemeColorTokenSource | Readonly<Record<string, ThemeColorPaletteSource>>;

type ThemeColorPalette = {
  readonly key: string;
  readonly title: string;
};

/**
 * Конфиг для source-driven секций Theme Colors stories.
 *
 * Template рендерит token references из source maps и получает итоговые
 * значения swatches из активной styled-components темы.
 */
export type ThemeColorsSectionsTemplateConfig = {
  /** Token source map в palette-first форме. */
  readonly source: ThemeColorSource;
  /** Определяет, source следует всем theme modes или только light/dark modes. */
  readonly sourceMode: 'theme' | 'lightDark';
  /** Секция theme colors, из которой берутся итоговые значения swatches. */
  readonly themeSection: ThemeColorSection;
  /** Группа токенов, которую рендерит story. */
  readonly tokenGroup: ThemeColorTokenGroup;
  /** Префикс для заголовков story и подписей семантических токенов. */
  readonly titlePrefix: string;
  /** Опциональные семантические палитры для status и extra групп токенов. */
  readonly palettes?: readonly ThemeColorPalette[];
  /** Опциональные описания групп, которые отображаются под заголовками секций. */
  readonly descriptions?: Readonly<Record<string, string>>;
};

/** Подготовленный контекст рендера для одной token palette. */
type PaletteContext = {
  readonly key: string;
  readonly title: string;
  readonly sourceGroups: ThemeColorGroupMap;
};

const themeEntries = Object.entries(themes) as [ThemeMode, BuiltTheme][];

/** Возвращает публичный theme mode, который соответствует активному styled-components theme object. */
const getCurrentThemeMode = (theme: BuiltTheme) => themeEntries.find(([, item]) => item === theme)?.[0] ?? 'light';

/** Определяет source mode для token reference map с учетом активной темы. */
const getSourceMode = (themeMode: ThemeMode, sourceMode: ThemeColorsSectionsTemplateConfig['sourceMode']) => {
  if (sourceMode === 'theme') {
    return themeMode;
  }

  return themeMode === 'dark' || themeMode === 'darkNeutral' ? 'dark' : 'light';
};

/** Выбирает active mode из source map, где mode лежит в leaf-узлах токенов. */
const selectSourceMode = (value: unknown, mode: ThemeColorSourceMode): unknown => {
  if (value === null || typeof value !== 'object' || Array.isArray(value)) {
    return value;
  }

  if (mode in value && typeof (value as Record<string, unknown>)[mode] === 'string') {
    return (value as Record<string, unknown>)[mode];
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, nestedValue]) => [key, selectSourceMode(nestedValue, mode)]),
  );
};

/** Собирает palette contexts для neutral/primary групп и семантических palette groups. */
const getPaletteContexts = (
  config: ThemeColorsSectionsTemplateConfig,
  mode: ThemeColorSourceMode,
): readonly PaletteContext[] => {
  if (config.palettes) {
    const source = config.source as Readonly<Record<string, ThemeColorPaletteSource>>;

    return config.palettes.map((palette) => ({
      ...palette,
      sourceGroups: selectSourceMode(source[palette.key]?.[config.themeSection] ?? {}, mode) as ThemeColorGroupMap,
    }));
  }

  const source = config.source as ThemeColorPaletteSource;

  return [
    {
      key: config.tokenGroup,
      title: config.titlePrefix,
      sourceGroups: selectSourceMode(source[config.themeSection], mode) as ThemeColorGroupMap,
    },
  ];
};

/** Получает итоговое значение цвета из активной темы для отрисовываемой token cell. */
const getThemeColor = (
  theme: BuiltTheme,
  config: ThemeColorsSectionsTemplateConfig,
  palette: string,
  group: string,
  state: string,
) => {
  const themeColors = theme.color as unknown as Record<string, Record<string, unknown>>;
  const paletteColors = themeColors[palette] ?? {};
  const sectionColors = paletteColors[config.themeSection] as Record<string, Record<string, string>>;
  const groupColors = sectionColors[group];

  return groupColors?.[state] ?? '';
};

const toTitleCase = (value: string) => value.replace(/^./, (letter) => letter.toUpperCase());

const splitCamelCase = (value: string) => value.replace(/([a-z])([A-Z])/g, '$1 $2');

const toGroupTitle = (section: ThemeColorSection, group: string) => {
  const sectionTitle = toTitleCase(section);
  const numberedGroup = group.match(/^_(\d+)$/);

  if (numberedGroup?.[1]) {
    return `${sectionTitle} / ${numberedGroup[1]}`;
  }

  return `${sectionTitle} / ${splitCamelCase(toTitleCase(group))}`;
};

const toStateTitle = (state: string) => (Number.isNaN(Number(state)) ? toTitleCase(state) : state);

/** Преобразует source token reference в подпись, которая отображается под swatch. */
const toTokenReferenceLabel = (reference: string) => {
  const [palette = '', token = ''] = reference.split('.');

  if (palette === 'opacityBlack') {
    return `Opacity / Black / Black-${token}`;
  }

  if (palette === 'opacityWhite') {
    return `Opacity / White / White-${token}`;
  }

  if (palette === 'neutral') {
    const tokenLabel =
      token === 'white' || token === 'black' ? toTitleCase(token) : token.replace(/^grey(\d+)$/, 'Grey-$1');

    return `Neutral / ${tokenLabel}`;
  }

  const paletteTitle = toTitleCase(palette);
  const tokenValue = token.replace(new RegExp(`^${palette}`), '');

  return `${paletteTitle} / ${paletteTitle}-${tokenValue}`;
};

const StyledPage = styled.article`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 28px 30px 64px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  background: var(--admiral-color-neutral-base-1-rest, ${({ theme }) => theme.color.neutral.base._1.rest});

  @media (max-width: 720px) {
    padding: 24px 16px 48px;
  }
`;

const StyledContent = styled.div`
  max-width: 746px;
`;

const StyledSection = styled.section`
  margin-top: 76px;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledTitle = styled.h1`
  margin: 0 0 16px;
  ${typography['Header/H5']}
`;

const StyledDescription = styled.p`
  max-width: 746px;
  margin: 0 0 28px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  ${typography['Body/Body 1 Long']}
`;

const StyledValueGrid = styled.div<{ $columns: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $columns }) => $columns}, minmax(0, 186px));
  width: fit-content;
  max-width: 100%;

  @media (max-width: 640px) {
    grid-template-columns: repeat(${({ $columns }) => Math.min($columns, 2)}, minmax(0, 186px));
    width: 100%;
  }
`;

const StyledSwatch = styled.div<{ $color: string }>`
  height: 116px;
  background: ${({ $color }) => $color};
  border: 1px solid var(--admiral-color-neutral-stroke-1-rest, ${({ theme }) => theme.color.neutral.stroke._1.rest});
  border-right-width: 0;
`;

const StyledValueItem = styled.div`
  &:last-child ${StyledSwatch} {
    border-right-width: 1px;
  }

  @media (max-width: 640px) {
    ${StyledSwatch} {
      border-right-width: 1px;
    }
  }
`;

const StyledMeta = styled.div`
  min-width: 0;
  padding-top: 14px;
`;

const StyledState = styled.div`
  margin-bottom: 5px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  ${typography['Body/Body 2 Short']}
`;

const StyledTokenName = styled.div`
  overflow-wrap: anywhere;
  color: var(--admiral-color-neutral-text-2-rest, ${({ theme }) => theme.color.neutral.text._2.rest});
  ${typography['Caption/Caption 1']}
`;

const TokenSectionView = ({
  config,
  group,
  palette,
  references,
  theme,
}: {
  readonly config: ThemeColorsSectionsTemplateConfig;
  readonly group: string;
  readonly palette: ThemeColorPalette;
  readonly references: ThemeColorStateMap;
  readonly theme: BuiltTheme;
}) => {
  const items = Object.entries(references);
  const title = `${palette.title} / ${toGroupTitle(config.themeSection, group)}`;
  const description = config.descriptions?.[group];

  return (
    <StyledSection>
      <StyledTitle>{title}</StyledTitle>
      {description ? <StyledDescription>{description}</StyledDescription> : null}
      <StyledValueGrid $columns={items.length}>
        {items.map(([state, reference]) => {
          const color = getThemeColor(theme, config, palette.key, group, state);
          const tokenName = toTokenReferenceLabel(reference);
          const stateTitle = toStateTitle(state);
          const displayedTokenName =
            config.tokenGroup === 'status' || config.tokenGroup === 'extra'
              ? `${config.titlePrefix} / ${tokenName}`
              : tokenName;

          return (
            <StyledValueItem key={state}>
              <StyledSwatch
                $color={color}
                aria-label={`${title}, ${stateTitle}: ${displayedTokenName}, ${color}`}
                role="img"
              />
              <StyledMeta>
                <StyledState>{stateTitle}</StyledState>
                <StyledTokenName>{displayedTokenName}</StyledTokenName>
              </StyledMeta>
            </StyledValueItem>
          );
        })}
      </StyledValueGrid>
    </StyledSection>
  );
};

/**
 * Рендерит страницу Theme Colors story по token references и значениям активной темы.
 *
 * Один template переиспользуется в neutral, primary, status и extra stories,
 * чтобы Storybook и playground scenarios оставались синхронизированы с token
 * source maps.
 */
export const ThemeColorsSectionsTemplate = ({ config }: { readonly config: ThemeColorsSectionsTemplateConfig }) => {
  const theme = useTheme() as BuiltTheme;
  const sourceMode = getSourceMode(getCurrentThemeMode(theme), config.sourceMode);
  const paletteContexts = getPaletteContexts(config, sourceMode);

  return (
    <StyledPage>
      <StyledContent>
        {paletteContexts.flatMap((palette) =>
          Object.entries(palette.sourceGroups).map(([group, references]) => (
            <TokenSectionView
              config={config}
              group={group}
              key={`${palette.key}-${group}`}
              palette={palette}
              references={references}
              theme={theme}
            />
          )),
        )}
      </StyledContent>
    </StyledPage>
  );
};
