import type { Meta, StoryObj } from '@storybook/react-vite';

import { shadowsTemplateArgs } from './Shadows.args';
import { ShadowsTemplate } from './Shadows.template';
import type { ShadowsTemplateProps } from './Shadows.template';
import ShadowsTemplateRaw from './Shadows.template?raw';

const meta = {
  title: 'Shadows',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<ShadowsTemplateProps>;

export default meta;

type Story = StoryObj<ShadowsTemplateProps>;

export const Shadows: Story = {
  args: shadowsTemplateArgs,
  parameters: {
    docs: {
      source: {
        code: ShadowsTemplateRaw,
      },
    },
  },
  render: (args) => <ShadowsTemplate {...args} />,
};
