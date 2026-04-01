import type { Meta, StoryObj } from '@storybook/react-vite';

import { ComponentThemeScopeTemplate } from './ComponentThemeScope.template';
import ComponentThemeScopeTemplateRaw from './ComponentThemeScope.template?raw';
import { ThemesOverviewTemplate } from './ThemesOverview.template';
import ThemesOverviewTemplateRaw from './ThemesOverview.template?raw';

const meta = {
  title: 'Themes',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  parameters: {
    docs: {
      source: {
        code: ThemesOverviewTemplateRaw,
      },
    },
  },
  render: () => <ThemesOverviewTemplate />,
};

export const ComponentThemeScope: Story = {
  name: 'Component theme scope',
  parameters: {
    docs: {
      source: {
        code: ComponentThemeScopeTemplateRaw,
      },
    },
  },
  render: () => <ComponentThemeScopeTemplate />,
};
