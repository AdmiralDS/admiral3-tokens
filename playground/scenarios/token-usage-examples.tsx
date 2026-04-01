import type { PlaygroundScenario } from './index';
import { CustomPrimaryPaletteTemplate } from '../../src/tokens/stories/CustomPrimaryPalette.template';
import { TokenUsageExamplesTemplate } from '../../src/tokens/stories/TokenUsageExamples.template';

export const tokenUsageExamplesScenarios: PlaygroundScenario[] = [
  {
    id: 'tokens/usage-examples',
    title: 'Token Usage Examples',
    render: () => <TokenUsageExamplesTemplate />,
  },
  {
    id: 'tokens/custom-primary-palette',
    title: 'Custom Primary Palette',
    render: () => <CustomPrimaryPaletteTemplate />,
  },
];
