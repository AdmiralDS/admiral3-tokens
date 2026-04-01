import * as globalColors from './globalColors';
import * as themeColors from './themeColors';

export * from './globalColors';
export * from './themeColors';

export const color = {
  globalColors,
  themeColors,
} as const;

export type Color = typeof color;
