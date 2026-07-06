import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { neutral } from '../neutral';

const neutralBaseConfig = createThemeColorsSectionsConfig({
  source: neutral,
  sourceMode: 'lightDark',
  themeSection: 'base',
  tokenGroup: 'neutral',
});

export const ThemeColorsNeutralBaseTemplate = () => <ThemeColorsSectionsTemplate config={neutralBaseConfig} />;
