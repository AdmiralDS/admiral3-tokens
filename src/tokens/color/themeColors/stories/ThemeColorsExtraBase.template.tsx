import { themeColors } from '..';
import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';

const extraBaseConfig = createThemeColorsSectionsConfig({
  source: themeColors,
  sourceMode: 'lightDark',
  themeSection: 'base',
  tokenGroup: 'extra',
});

export const ThemeColorsExtraBaseTemplate = () => <ThemeColorsSectionsTemplate config={extraBaseConfig} />;
