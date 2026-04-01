import type { Meta, StoryObj } from '@storybook/react-vite';

import { typographyArgs } from './Typography.args';
import { TypographyTemplate } from './Typography.template';
import type { TypographyTemplateProps } from './Typography.template';
import TypographyTemplateRaw from './Typography.template?raw';
import { TypographyTagsTemplate } from './TypographyTags.template';
import TypographyTagsTemplateRaw from './TypographyTags.template?raw';

const meta = {
  title: 'Typography',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<TypographyTemplateProps>;

export default meta;

type Story = StoryObj<TypographyTemplateProps>;

export const Typography: Story = {
  args: typographyArgs,
  parameters: {
    docs: {
      source: {
        code: TypographyTemplateRaw,
      },
    },
  },
  render: (args) => <TypographyTemplate {...args} />,
};

export const StylesAndTags: Story = {
  name: 'Styles and tags',
  parameters: {
    docs: {
      source: {
        code: TypographyTagsTemplateRaw,
      },
    },
  },
  render: () => <TypographyTagsTemplate />,
};
