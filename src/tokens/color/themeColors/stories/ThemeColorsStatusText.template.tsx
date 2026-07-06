import { themeColors } from '..';
import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';

const statusTextConfig = createThemeColorsSectionsConfig({
  source: themeColors,
  sourceMode: 'lightDark',
  themeSection: 'text',
  tokenGroup: 'status',
});

export const ThemeColorsStatusTextTemplate = () => <ThemeColorsSectionsTemplate config={statusTextConfig} />;
