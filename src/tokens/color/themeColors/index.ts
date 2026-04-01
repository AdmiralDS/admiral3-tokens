import { base } from './base';
import { shadow } from './shadow';
import { stroke } from './stroke';
import { text } from './text';

export * from './base';
export * from './shadow';
export * from './text';
export * from './stroke';

export const themeColors = {
  base,
  text,
  stroke,
  shadow,
} as const;

export type ThemeColors = typeof themeColors;
