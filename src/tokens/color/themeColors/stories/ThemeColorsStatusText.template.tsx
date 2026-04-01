import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { statusText } from '../text/status';

const statusTextConfig = createThemeColorsSectionsConfig({
  source: statusText,
  sourceMode: 'lightDark',
  themeSection: 'text',
  tokenGroup: 'status',
});

export const ThemeColorsStatusTextTemplate = () => <ThemeColorsSectionsTemplate config={statusTextConfig} />;
