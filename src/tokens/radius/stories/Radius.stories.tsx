import type { Meta, StoryObj } from '@storybook/react-vite';

import { radiusTemplateArgs } from './Radius.args';
import { RadiusTemplate } from './Radius.template';
import type { RadiusTemplateProps } from './Radius.template';
import RadiusTemplateRaw from './Radius.template?raw';
import { RadiusGroupsTemplate } from './RadiusGroups.template';
import RadiusGroupsTemplateRaw from './RadiusGroups.template?raw';

const meta = {
  title: 'Radius',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<RadiusTemplateProps>;

export default meta;

type Story = StoryObj<RadiusTemplateProps>;

export const Radius: Story = {
  args: radiusTemplateArgs,
  parameters: {
    docs: {
      source: {
        code: RadiusTemplateRaw,
      },
    },
  },
  render: (args) => <RadiusTemplate {...args} />,
};

export const InteractiveRectangles: Story = {
  name: 'Interactive rectangles',
  parameters: {
    docs: {
      source: {
        code: RadiusGroupsTemplateRaw,
      },
    },
  },
  render: () => <RadiusGroupsTemplate />,
};
