import type { PlaygroundScenario } from './index';
import { typographyArgs } from '../../src/tokens/typography/stories/Typography.args';
import { TypographyTemplate } from '../../src/tokens/typography/stories/Typography.template';
import { TypographyTagsTemplate } from '../../src/tokens/typography/stories/TypographyTags.template';

export const typographyScenarios: PlaygroundScenario[] = [
  {
    id: 'typography',
    title: 'Typography',
    render: () => <TypographyTemplate {...typographyArgs} />,
  },
  {
    id: 'typography/styles-and-tags',
    title: 'Typography Styles and tags',
    render: () => <TypographyTagsTemplate />,
  },
];
