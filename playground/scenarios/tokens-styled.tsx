import type { PlaygroundScenario } from './index';
import { TokenStyledExample } from './tokens-styled.component';

export const tokenStyledScenarios: PlaygroundScenario[] = [
  {
    id: 'tokens/styled-components',
    title: 'Tokens styled-components',
    render: () => <TokenStyledExample />,
  },
];
