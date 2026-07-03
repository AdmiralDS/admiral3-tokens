import { themeColors } from '..';
import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';

const extraTextConfig = createThemeColorsSectionsConfig({
  source: themeColors,
  sourceMode: 'lightDark',
  themeSection: 'text',
  tokenGroup: 'extra',
});

export const ThemeColorsExtraTextTemplate = () => <ThemeColorsSectionsTemplate config={extraTextConfig} />;
