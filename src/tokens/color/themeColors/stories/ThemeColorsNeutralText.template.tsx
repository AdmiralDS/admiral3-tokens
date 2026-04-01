import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { neutralText } from '../text/neutral';

const neutralTextConfig = createThemeColorsSectionsConfig({
  source: neutralText,
  themeSection: 'text',
  tokenGroup: 'neutral',
});

export const ThemeColorsNeutralTextTemplate = () => <ThemeColorsSectionsTemplate config={neutralTextConfig} />;
