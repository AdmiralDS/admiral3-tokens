import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { extraStroke } from '../stroke/extra';

const extraStrokeConfig = createThemeColorsSectionsConfig({
  source: extraStroke,
  sourceMode: 'lightDark',
  themeSection: 'stroke',
  tokenGroup: 'extra',
});

export const ThemeColorsExtraStrokeTemplate = () => <ThemeColorsSectionsTemplate config={extraStrokeConfig} />;
