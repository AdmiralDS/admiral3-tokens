import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { primaryBase } from '../base/primary';

const primaryBaseConfig = createThemeColorsSectionsConfig({
  source: primaryBase,
  themeSection: 'base',
  tokenGroup: 'primary',
});

export const ThemeColorsPrimaryBaseTemplate = () => <ThemeColorsSectionsTemplate config={primaryBaseConfig} />;
