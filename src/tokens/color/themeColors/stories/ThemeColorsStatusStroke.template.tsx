import { themeColors } from '..';
import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';

const statusStrokeConfig = createThemeColorsSectionsConfig({
  source: themeColors,
  sourceMode: 'lightDark',
  themeSection: 'stroke',
  tokenGroup: 'status',
});

export const ThemeColorsStatusStrokeTemplate = () => <ThemeColorsSectionsTemplate config={statusStrokeConfig} />;
