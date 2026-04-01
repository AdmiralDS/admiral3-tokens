import type { PlaygroundScenario } from './index';
import { shadowsTemplateArgs } from '../../src/tokens/shadow/stories/Shadows.args';
import { ShadowsTemplate } from '../../src/tokens/shadow/stories/Shadows.template';

export const shadowScenarios: PlaygroundScenario[] = [
  {
    id: 'shadows',
    title: 'Shadows',
    render: () => <ShadowsTemplate {...shadowsTemplateArgs} />,
  },
];
