import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { extraText } from '../text/extra';

const extraTextConfig = createThemeColorsSectionsConfig({
  source: extraText,
  sourceMode: 'lightDark',
  themeSection: 'text',
  tokenGroup: 'extra',
});

export const ThemeColorsExtraTextTemplate = () => <ThemeColorsSectionsTemplate config={extraTextConfig} />;
