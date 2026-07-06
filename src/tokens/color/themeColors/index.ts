import { attention } from './attention';
import { blue } from './blue';
import { error } from './error';
import { magenta } from './magenta';
import { neutral } from './neutral';
import { primary } from './primary';
import { purple } from './purple';
import { success } from './success';
import { teal } from './teal';
import { warning } from './warning';

export * from '../themeShadowColors';

export const themeColors = {
  primary,
  neutral,
  success,
  warning,
  error,
  attention,
  blue,
  purple,
  magenta,
  teal,
} as const;

export type ThemeColors = typeof themeColors;
