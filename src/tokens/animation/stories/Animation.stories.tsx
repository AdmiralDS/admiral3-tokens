import type { Meta, StoryObj } from '@storybook/react-vite';

import { AnimationTemplate } from './Animation.template';
import AnimationTemplateRaw from './Animation.template?raw';

const meta = {
  title: 'Animation',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Animation: Story = {
  parameters: {
    docs: {
      source: {
        code: AnimationTemplateRaw,
      },
    },
  },
  render: () => <AnimationTemplate />,
};
