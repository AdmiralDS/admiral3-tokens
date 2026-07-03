import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { primary } from '../primary';

const primaryStrokeConfig = createThemeColorsSectionsConfig({
  source: primary,
  themeSection: 'stroke',
  tokenGroup: 'primary',
});

export const ThemeColorsPrimaryStrokeTemplate = () => <ThemeColorsSectionsTemplate config={primaryStrokeConfig} />;
