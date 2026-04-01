import { themeColors } from '../color';
import type { globalColors } from '../color';
import {
  buildGlobalColors,
  resolveGlobalColorValue,
  type GlobalColorOverrides,
  type TokenValue,
} from '../color/resolveGlobalColorReference';
import { radius } from '../radius';
import { shadow } from '../shadow';

export const themeModes = ['light', 'dark', 'lightNeutral', 'darkNeutral'] as const;

export type ThemeMode = (typeof themeModes)[number];

type ThemeSectionModeMap = {
  neutral: ThemeMode;
  primary: ThemeMode;
  status: ThemeMode;
  extra: ThemeMode;
};

type ThemeModeMap = {
  [K in ThemeMode]: {
    base: ThemeSectionModeMap;
    text: ThemeSectionModeMap;
    stroke: ThemeSectionModeMap;
    shadow: ThemeMode;
  };
};

const themeModeMap = {
  light: {
    base: {
      neutral: 'light',
      primary: 'light',
      status: 'light',
      extra: 'light',
    },
    text: {
      neutral: 'light',
      primary: 'light',
      status: 'light',
      extra: 'light',
    },
    stroke: {
      neutral: 'light',
      primary: 'light',
      status: 'light',
      extra: 'light',
    },
    shadow: 'light',
  },
  dark: {
    base: {
      neutral: 'dark',
      primary: 'dark',
      status: 'dark',
      extra: 'dark',
    },
    text: {
      neutral: 'dark',
      primary: 'dark',
      status: 'dark',
      extra: 'dark',
    },
    stroke: {
      neutral: 'dark',
      primary: 'dark',
      status: 'dark',
      extra: 'dark',
    },
    shadow: 'dark',
  },
  lightNeutral: {
    base: {
      neutral: 'light',
      primary: 'lightNeutral',
      status: 'light',
      extra: 'light',
    },
    text: {
      neutral: 'lightNeutral',
      primary: 'lightNeutral',
      status: 'light',
      extra: 'light',
    },
    stroke: {
      neutral: 'lightNeutral',
      primary: 'lightNeutral',
      status: 'light',
      extra: 'light',
    },
    shadow: 'lightNeutral',
  },
  darkNeutral: {
    base: {
      neutral: 'dark',
      primary: 'darkNeutral',
      status: 'dark',
      extra: 'dark',
    },
    text: {
      neutral: 'darkNeutral',
      primary: 'darkNeutral',
      status: 'dark',
      extra: 'dark',
    },
    stroke: {
      neutral: 'darkNeutral',
      primary: 'darkNeutral',
      status: 'dark',
      extra: 'dark',
    },
    shadow: 'darkNeutral',
  },
} satisfies ThemeModeMap;

type TokenRecord = {
  readonly [key: string]: TokenRecord | TokenValue;
};
type SelectThemeMode<T, M extends ThemeMode> = T extends TokenValue
  ? T
  : M extends keyof T
    ? SelectThemeMode<T[M], M>
    : {
        readonly [K in keyof T]: SelectThemeMode<T[K], M>;
      };

type ThemeColorAlias = `${'Base' | 'Text' | 'Stroke'}/${string}`;
type ThemeShadowAlias = `Shadow ${string}`;
type FlatThemeColorTokens = Record<ThemeColorAlias, string>;
type FlatThemeShadowTokens = Record<ThemeShadowAlias, string>;
type ThemeColor = ReturnType<typeof buildThemeColorReferences> & Readonly<FlatThemeColorTokens>;
type ThemeShadow = {
  [K in keyof typeof shadow]: string;
} & Readonly<FlatThemeShadowTokens>;
type ThemeRadius = typeof radius;

export type BuildThemeOptions = {
  readonly globalColors?: GlobalColorOverrides;
};

const isRecord = (value: unknown): value is TokenRecord =>
  value !== null && typeof value === 'object' && !Array.isArray(value);

const selectThemeMode = <T, M extends ThemeMode>(value: T, mode: M): SelectThemeMode<T, M> => {
  if (!isRecord(value)) {
    return value as SelectThemeMode<T, M>;
  }

  if (mode in value) {
    return selectThemeMode(value[mode], mode) as SelectThemeMode<T, M>;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, nestedValue]) => [key, selectThemeMode(nestedValue, mode)]),
  ) as SelectThemeMode<T, M>;
};

const buildThemeSectionReferences = <
  TSection extends Record<string, unknown>,
  TModeMap extends { readonly [K in keyof TSection]: ThemeMode },
>(
  section: TSection,
  map: TModeMap,
) =>
  Object.fromEntries(
    Object.entries(section).map(([key, value]) => [key, selectThemeMode(value, map[key as keyof TSection])]),
  ) as {
    readonly [K in keyof TSection]: SelectThemeMode<TSection[K], TModeMap[K]>;
  };

const toThemeColorTokenNameSegment = (segment: string) =>
  segment
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/([A-Za-z])(\d+)/g, '$1 $2')
    .replace(/^./, (letter) => letter.toUpperCase());

const buildThemeColorAliases = (value: TokenRecord, path: string[] = []): FlatThemeColorTokens =>
  Object.fromEntries(
    Object.entries(value).flatMap(([key, nestedValue]) => {
      const nestedPath = [...path, toThemeColorTokenNameSegment(key)];

      if (typeof nestedValue === 'string') {
        return [[nestedPath.join('/'), nestedValue]];
      }

      if (isRecord(nestedValue)) {
        return Object.entries(buildThemeColorAliases(nestedValue, nestedPath));
      }

      return [];
    }),
  );

const defineStringAliases = <T extends object, A extends Record<string, string>>(target: T, aliases: A) =>
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
  ) as T & Readonly<A>;

const resolveGlobalColorReferences = <T extends TokenRecord | TokenValue>(value: T, colors: typeof globalColors): T => {
  if (!isRecord(value)) {
    return resolveGlobalColorValue(value, colors) as T;
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, nestedValue]) => [key, resolveGlobalColorReferences(nestedValue, colors)]),
  ) as T;
};

const resolveThemeShadow = (color: keyof typeof themeColors.shadow, mode: ThemeMode, colors: typeof globalColors) =>
  resolveGlobalColorValue(themeColors.shadow[color][mode], colors);

const buildThemeShadow = (mode: ThemeMode, colors: typeof globalColors) =>
  Object.fromEntries(
    Object.entries(shadow).map(([name, layers]) => [
      name,
      layers.map(({ x, y, blur, color }) => `${x} ${y} ${blur} ${resolveThemeShadow(color, mode, colors)}`).join(', '),
    ]),
  ) as {
    [K in keyof typeof shadow]: string;
  };

const buildThemeShadowAliases = (value: Record<keyof typeof shadow, string>) =>
  Object.fromEntries(
    Object.entries(value).map(([key, shadowValue]) => [key.replace(/^shadow/, 'Shadow '), shadowValue]),
  ) as FlatThemeShadowTokens;

export const buildThemeColorReferences = (mode: ThemeMode) => {
  const map = themeModeMap[mode];

  return {
    base: buildThemeSectionReferences(themeColors.base, map.base),
    text: buildThemeSectionReferences(themeColors.text, map.text),
    stroke: buildThemeSectionReferences(themeColors.stroke, map.stroke),
    shadow: selectThemeMode(themeColors.shadow, map.shadow),
  } as const;
};

export const buildTheme = (
  mode: ThemeMode,
  options: BuildThemeOptions = {},
): {
  readonly color: ThemeColor;
  readonly radius: ThemeRadius;
  readonly shadow: ThemeShadow;
} => {
  const map = themeModeMap[mode];
  const colors = buildGlobalColors(options.globalColors);
  const color = resolveGlobalColorReferences(buildThemeColorReferences(mode), colors);
  const colorAliases = buildThemeColorAliases(color);
  const themeShadow = buildThemeShadow(map.shadow, colors);

  return {
    color: {
      ...color,
      ...colorAliases,
    } as ThemeColor,
    radius,
    shadow: defineStringAliases(themeShadow, buildThemeShadowAliases(themeShadow)),
  };
};

export const buildThemes = (options: BuildThemeOptions = {}) =>
  Object.fromEntries(themeModes.map((mode) => [mode, buildTheme(mode, options)])) as {
    readonly [K in ThemeMode]: ReturnType<typeof buildTheme>;
  };

export type BuiltTheme = ReturnType<typeof buildTheme>;
export type BuiltThemes = ReturnType<typeof buildThemes>;
