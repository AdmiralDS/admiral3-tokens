import { blue, magenta, purple, teal } from './extra';
import { neutral } from './neutral';
import { opacityBlack, opacityWhite } from './opacity';
import { primary } from './primary';
import { attention, error, success, warning } from './status';

export const globalColors = {
  neutral,
  primary,
  error,
  success,
  warning,
  attention,
  blue,
  teal,
  magenta,
  purple,
  opacityBlack,
  opacityWhite,
} as const;

export {
  neutral,
  primary,
  error,
  success,
  warning,
  attention,
  blue,
  teal,
  magenta,
  purple,
  opacityBlack,
  opacityWhite,
};
export {
  createGlobalColorCss,
  createGlobalColorCssVariables,
  createPrimaryCssVariables,
  generateAdmiralPalette,
} from './generateAdmiralPalette';
export type {
  GeneratedAdmiralPalette,
  GlobalColorCssVariables,
  GlobalColorPaletteOverrides,
  PaletteStep,
  PrimaryCssVariables,
} from './generateAdmiralPalette';

export type GlobalColors = typeof globalColors;
