import { themeColors } from '..';
import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';

const statusBaseConfig = createThemeColorsSectionsConfig({
  source: themeColors,
  sourceMode: 'lightDark',
  themeSection: 'base',
  tokenGroup: 'status',
});

export const ThemeColorsStatusBaseTemplate = () => <ThemeColorsSectionsTemplate config={statusBaseConfig} />;
