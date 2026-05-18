import type { PlaygroundScenario } from './index';
import { AnimationTemplate } from '../../src/tokens/animation/stories/Animation.template';

export const animationScenarios: PlaygroundScenario[] = [
  {
    id: 'animation',
    title: 'Animation',
    render: () => <AnimationTemplate />,
  },
];
