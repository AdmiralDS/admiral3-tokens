import type { ThemeMode } from '../src/tokens/themes';

export type StorybookSimpleTheme = 'light' | 'dark';
export type StorybookAdmiralTheme = 'system' | ThemeMode;

export const storybookAdmiralThemes: StorybookAdmiralTheme[] = [
  'system',
  'light',
  'dark',
  'lightNeutral',
  'darkNeutral',
];

export const isStorybookAdmiralTheme = (theme: unknown): theme is StorybookAdmiralTheme => {
  return typeof theme === 'string' && storybookAdmiralThemes.includes(theme as StorybookAdmiralTheme);
};

export const getPreferredSimpleTheme = (): StorybookSimpleTheme => {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const resolveAdmiralTheme = (
  theme: StorybookAdmiralTheme,
  preferredTheme: StorybookSimpleTheme = getPreferredSimpleTheme(),
): ThemeMode => {
  return theme === 'system' ? preferredTheme : theme;
};

export const resolveStorybookShellTheme = (
  theme: StorybookAdmiralTheme,
  preferredTheme: StorybookSimpleTheme = getPreferredSimpleTheme(),
): StorybookSimpleTheme => {
  const resolvedTheme = resolveAdmiralTheme(theme, preferredTheme);

  return resolvedTheme === 'dark' || resolvedTheme === 'darkNeutral' ? 'dark' : 'light';
};
