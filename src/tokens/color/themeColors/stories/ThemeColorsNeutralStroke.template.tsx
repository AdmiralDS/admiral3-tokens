import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { neutral } from '../neutral';

const neutralStrokeConfig = createThemeColorsSectionsConfig({
  source: neutral,
  themeSection: 'stroke',
  tokenGroup: 'neutral',
});

export const ThemeColorsNeutralStrokeTemplate = () => <ThemeColorsSectionsTemplate config={neutralStrokeConfig} />;
