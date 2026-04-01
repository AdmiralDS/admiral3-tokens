import type { Meta, StoryObj } from '@storybook/react-vite';

import { CustomPrimaryPaletteTemplate } from './CustomPrimaryPalette.template';
import CustomPrimaryPaletteTemplateRaw from './CustomPrimaryPalette.template?raw';
import { HelpersAndFontsTemplate } from './HelpersAndFonts.template';
import HelpersAndFontsTemplateRaw from './HelpersAndFonts.template?raw';
import { TokenUsageExamplesTemplate } from './TokenUsageExamples.template';
import TokenUsageExamplesTemplateRaw from './TokenUsageExamples.template?raw';

const meta = {
  title: 'Token Usage Examples',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const AllTokenUsageVariants: Story = {
  name: 'All token usage variants',
  parameters: {
    docs: {
      source: {
        code: TokenUsageExamplesTemplateRaw,
      },
    },
  },
  render: () => <TokenUsageExamplesTemplate />,
};

export const CustomPrimaryPalette: Story = {
  name: 'Custom primary palette',
  parameters: {
    docs: {
      source: {
        code: CustomPrimaryPaletteTemplateRaw,
      },
    },
  },
  render: () => <CustomPrimaryPaletteTemplate />,
};

export const HelpersAndFonts: Story = {
  name: 'Helpers and fonts',
  parameters: {
    docs: {
      source: {
        code: HelpersAndFontsTemplateRaw,
      },
    },
  },
  render: () => <HelpersAndFontsTemplate />,
};
