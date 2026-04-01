import type { ReactElement } from 'react';

import { globalColorsScenarios } from './global-colors';
import { radiusScenarios } from './radius';
import { shadowScenarios } from './shadows';
import { themeColorsScenarios } from './theme-colors';
import { themeScenarios } from './themes';
import { tokenUsageExamplesScenarios } from './token-usage-examples';
import { tokenCssScenarios } from './tokens-css';
import { tokenStyledScenarios } from './tokens-styled';
import { typographyScenarios } from './typography';

export type PlaygroundScenario = {
  id: string;
  title: string;
  render: () => ReactElement;
};

export const playgroundScenarios = [
  ...globalColorsScenarios,
  ...themeColorsScenarios,
  ...radiusScenarios,
  ...shadowScenarios,
  ...themeScenarios,
  ...typographyScenarios,
  ...tokenCssScenarios,
  ...tokenStyledScenarios,
  ...tokenUsageExamplesScenarios,
];
