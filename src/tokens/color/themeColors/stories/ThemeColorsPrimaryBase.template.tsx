import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { primary } from '../primary';

const primaryBaseConfig = createThemeColorsSectionsConfig({
  source: primary,
  themeSection: 'base',
  tokenGroup: 'primary',
});

export const ThemeColorsPrimaryBaseTemplate = () => <ThemeColorsSectionsTemplate config={primaryBaseConfig} />;
