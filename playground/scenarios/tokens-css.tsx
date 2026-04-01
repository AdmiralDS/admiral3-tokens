import type { PlaygroundScenario } from './index';
import { TokenCssExample } from './tokens-css.component';

export const tokenCssScenarios: PlaygroundScenario[] = [
  {
    id: 'tokens/css',
    title: 'Tokens CSS import',
    render: () => <TokenCssExample />,
  },
];
