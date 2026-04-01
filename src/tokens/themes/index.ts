import { darkTheme } from './dark';
import { darkNeutralTheme } from './darkNeutral';
import { lightTheme } from './light';
import { lightNeutralTheme } from './lightNeutral';

export { lightTheme } from './light';
export type { LightTheme } from './light';
export { darkTheme } from './dark';
export type { DarkTheme } from './dark';
export { lightNeutralTheme } from './lightNeutral';
export type { LightNeutralTheme } from './lightNeutral';
export { darkNeutralTheme } from './darkNeutral';
export type { DarkNeutralTheme } from './darkNeutral';
export { buildTheme, buildThemes, themeModes } from './buildTheme';
export type { BuildThemeOptions, BuiltTheme, BuiltThemes, ThemeMode } from './buildTheme';

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  lightNeutral: lightNeutralTheme,
  darkNeutral: darkNeutralTheme,
} as const;

export type Themes = typeof themes;
