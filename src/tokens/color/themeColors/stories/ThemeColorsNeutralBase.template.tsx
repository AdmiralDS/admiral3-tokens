import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { neutralBase } from '../base/neutral';

const neutralBaseConfig = createThemeColorsSectionsConfig({
  source: neutralBase,
  sourceMode: 'lightDark',
  themeSection: 'base',
  tokenGroup: 'neutral',
});

export const ThemeColorsNeutralBaseTemplate = () => <ThemeColorsSectionsTemplate config={neutralBaseConfig} />;
