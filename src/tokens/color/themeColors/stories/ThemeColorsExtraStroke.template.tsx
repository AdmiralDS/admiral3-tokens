import { themeColors } from '..';
import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';

const extraStrokeConfig = createThemeColorsSectionsConfig({
  source: themeColors,
  sourceMode: 'lightDark',
  themeSection: 'stroke',
  tokenGroup: 'extra',
});

export const ThemeColorsExtraStrokeTemplate = () => <ThemeColorsSectionsTemplate config={extraStrokeConfig} />;
