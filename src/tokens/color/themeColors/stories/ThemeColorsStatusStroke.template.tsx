import { createThemeColorsSectionsConfig } from './ThemeColorsSections.config';
import { ThemeColorsSectionsTemplate } from './ThemeColorsSections.template';
import { statusStroke } from '../stroke/status';

const statusStrokeConfig = createThemeColorsSectionsConfig({
  source: statusStroke,
  sourceMode: 'lightDark',
  themeSection: 'stroke',
  tokenGroup: 'status',
});

export const ThemeColorsStatusStrokeTemplate = () => <ThemeColorsSectionsTemplate config={statusStrokeConfig} />;
