export const shadowColors = {
  outlineM: {
    light: 'opacityBlack.12',
    dark: 'opacityBlack.20',
    lightNeutral: 'opacityBlack.12',
    darkNeutral: 'opacityBlack.20',
  },
  mainM: {
    light: 'opacityBlack.14',
    dark: 'opacityBlack.28',
    lightNeutral: 'opacityBlack.14',
    darkNeutral: 'opacityBlack.28',
  },
  outlineL: {
    light: 'opacityBlack.16',
    dark: 'opacityBlack.32',
    lightNeutral: 'opacityBlack.16',
    darkNeutral: 'opacityBlack.32',
  },
  mainL: {
    light: 'opacityBlack.20',
    dark: 'opacityBlack.40',
    lightNeutral: 'opacityBlack.20',
    darkNeutral: 'opacityBlack.40',
  },
} as const;

export type ShadowColors = typeof shadowColors;
