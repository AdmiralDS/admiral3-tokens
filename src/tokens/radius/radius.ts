export const cornerRadiusOptions = ['0', '2', '4', '6', '8'] as const;

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
    '0': { small: '0px', medium: '0px', large: '0px' },
    '2': { small: '2px', medium: '2px', large: '4px' },
    '4': { small: '4px', medium: '4px', large: '8px' },
    '6': { small: '4px', medium: '6px', large: '12px' },
    '8': { small: '4px', medium: '8px', large: '16px' },
  },
} as const;

const radiusAliases = Object.fromEntries(
  Object.entries(radiusTokens.byBase).flatMap(([base, groups]) =>
    Object.entries(groups).map(([group, value]) => [`By Base/${base}/${toRadiusTokenNameSegment(group)}`, value]),
  ),
) as FlatRadiusTokens;

export const radius = defineStringAliases(radiusTokens, radiusAliases);

export type CornerRadiusBase = keyof typeof radius.byBase;
export type RadiusGroup = keyof (typeof radius.byBase)['4'];
