import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { extraBase } from '../base/extra';

const extraBaseConfig = createThemeColorsSectionsConfig({
  source: extraBase,
  sourceMode: 'lightDark',
  themeSection: 'base',
  tokenGroup: 'extra',
});

export const ThemeColorsExtraBaseTemplate = () => <ThemeColorsSectionsTemplate config={extraBaseConfig} />;
