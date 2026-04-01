import type { PlaygroundScenario } from './index';
import { radiusTemplateArgs } from '../../src/tokens/radius/stories/Radius.args';
import { RadiusTemplate } from '../../src/tokens/radius/stories/Radius.template';
import { RadiusGroupsTemplate } from '../../src/tokens/radius/stories/RadiusGroups.template';

export const radiusScenarios: PlaygroundScenario[] = [
  {
    id: 'radius',
    title: 'Radius',
    render: () => <RadiusTemplate {...radiusTemplateArgs} />,
  },
  {
    id: 'radius/groups',
    title: 'Radius Groups',
    render: () => <RadiusGroupsTemplate />,
  },
];
