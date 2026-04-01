import { globalColors } from './globalColors';

export type TokenValue = string | number | boolean;
export type GlobalColorOverrides = {
  readonly [K in keyof typeof globalColors]?: {
    readonly [Token in keyof (typeof globalColors)[K]]?: string;
  };
};

export const buildGlobalColors = (overrides: GlobalColorOverrides = {}) =>
  Object.fromEntries(
    Object.entries(globalColors).map(([group, colors]) => [
      group,
      {
        ...colors,
        ...overrides[group as keyof typeof globalColors],
      },
    ]),
  ) as typeof globalColors;

export const resolveGlobalColorValue = (value: TokenValue, colors: typeof globalColors = globalColors): TokenValue => {
  if (typeof value !== 'string') {
    return value;
  }

  const [group, token] = value.split('.');
  const resolvedValue = colors[group as keyof typeof colors]?.[token as keyof (typeof colors)[keyof typeof colors]];

  return resolvedValue ?? value;
};
