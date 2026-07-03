import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { neutral } from '../neutral';

const neutralTextConfig = createThemeColorsSectionsConfig({
  source: neutral,
  themeSection: 'text',
  tokenGroup: 'neutral',
});

export const ThemeColorsNeutralTextTemplate = () => <ThemeColorsSectionsTemplate config={neutralTextConfig} />;
