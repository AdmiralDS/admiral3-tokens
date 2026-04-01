import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { statusBase } from '../base/status';

const statusBaseConfig = createThemeColorsSectionsConfig({
  source: statusBase,
  sourceMode: 'lightDark',
  themeSection: 'base',
  tokenGroup: 'status',
});

export const ThemeColorsStatusBaseTemplate = () => <ThemeColorsSectionsTemplate config={statusBaseConfig} />;
