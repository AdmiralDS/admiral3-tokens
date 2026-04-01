import type { Meta, StoryObj } from '@storybook/react-vite';

import {
  extraPaletteArgs,
  neutralPaletteArgs,
  opacityPaletteArgs,
  primaryPaletteArgs,
  statusPaletteArgs,
} from './GlobalColorsPalette.args';
import { GlobalColorsPaletteTemplate } from './GlobalColorsPalette.template';
import type { GlobalColorsPaletteTemplateProps } from './GlobalColorsPalette.template';
import GlobalColorsPaletteTemplateRaw from './GlobalColorsPalette.template?raw';

const meta = {
  title: 'Global Colors',
  argTypes: {
    swatchSize: {
      control: { type: 'number', min: 48, max: 160, step: 4 },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<GlobalColorsPaletteTemplateProps>;

export default meta;

type Story = StoryObj<GlobalColorsPaletteTemplateProps>;

export const Neutral: Story = {
  args: neutralPaletteArgs,
  parameters: {
    docs: {
      source: {
        code: GlobalColorsPaletteTemplateRaw,
      },
    },
  },
  render: (args) => <GlobalColorsPaletteTemplate {...args} />,
};

export const Primary: Story = {
  args: primaryPaletteArgs,
  parameters: {
    docs: {
      source: {
        code: GlobalColorsPaletteTemplateRaw,
      },
    },
  },
  render: (args) => <GlobalColorsPaletteTemplate {...args} />,
};

export const Status: Story = {
  args: statusPaletteArgs,
  parameters: {
    docs: {
      source: {
        code: GlobalColorsPaletteTemplateRaw,
      },
    },
  },
  render: (args) => <GlobalColorsPaletteTemplate {...args} />,
};

export const Extra: Story = {
  args: extraPaletteArgs,
  parameters: {
    docs: {
      source: {
        code: GlobalColorsPaletteTemplateRaw,
      },
    },
  },
  render: (args) => <GlobalColorsPaletteTemplate {...args} />,
};

export const Opacity: Story = {
  args: opacityPaletteArgs,
  parameters: {
    docs: {
      source: {
        code: GlobalColorsPaletteTemplateRaw,
      },
    },
  },
  render: (args) => <GlobalColorsPaletteTemplate {...args} />,
};
