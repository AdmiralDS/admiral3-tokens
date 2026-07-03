import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { primary } from '../primary';

const primaryTextConfig = createThemeColorsSectionsConfig({
  source: primary,
  themeSection: 'text',
  tokenGroup: 'primary',
});

export const ThemeColorsPrimaryTextTemplate = () => <ThemeColorsSectionsTemplate config={primaryTextConfig} />;
