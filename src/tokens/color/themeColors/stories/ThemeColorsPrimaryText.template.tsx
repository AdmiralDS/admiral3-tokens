import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { primaryText } from '../text/primary';

const primaryTextConfig = createThemeColorsSectionsConfig({
  source: primaryText,
  themeSection: 'text',
  tokenGroup: 'primary',
});

export const ThemeColorsPrimaryTextTemplate = () => <ThemeColorsSectionsTemplate config={primaryTextConfig} />;
