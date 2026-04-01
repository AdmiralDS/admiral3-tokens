import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { neutralStroke } from '../stroke/neutral';

const neutralStrokeConfig = createThemeColorsSectionsConfig({
  source: neutralStroke,
  themeSection: 'stroke',
  tokenGroup: 'neutral',
});

export const ThemeColorsNeutralStrokeTemplate = () => <ThemeColorsSectionsTemplate config={neutralStrokeConfig} />;
