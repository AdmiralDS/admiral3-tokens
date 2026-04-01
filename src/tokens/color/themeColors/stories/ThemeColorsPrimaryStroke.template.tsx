import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { primaryStroke } from '../stroke/primary';

const primaryStrokeConfig = createThemeColorsSectionsConfig({
  source: primaryStroke,
  themeSection: 'stroke',
  tokenGroup: 'primary',
});

export const ThemeColorsPrimaryStrokeTemplate = () => <ThemeColorsSectionsTemplate config={primaryStrokeConfig} />;
