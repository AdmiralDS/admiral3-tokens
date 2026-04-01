import type { Meta, StoryObj } from '@storybook/react-vite';

import { ThemeColorsTemplate } from './ThemeColors.template';
import ThemeColorsTemplateRaw from './ThemeColors.template?raw';
import { ThemeColorsExtraBaseTemplate } from './ThemeColorsExtraBase.template';
import ThemeColorsExtraBaseTemplateRaw from './ThemeColorsExtraBase.template?raw';
import { ThemeColorsExtraStrokeTemplate } from './ThemeColorsExtraStroke.template';
import ThemeColorsExtraStrokeTemplateRaw from './ThemeColorsExtraStroke.template?raw';
import { ThemeColorsExtraTextTemplate } from './ThemeColorsExtraText.template';
import ThemeColorsExtraTextTemplateRaw from './ThemeColorsExtraText.template?raw';
import { ThemeColorsNeutralBaseTemplate } from './ThemeColorsNeutralBase.template';
import ThemeColorsNeutralBaseTemplateRaw from './ThemeColorsNeutralBase.template?raw';
import { ThemeColorsNeutralStrokeTemplate } from './ThemeColorsNeutralStroke.template';
import ThemeColorsNeutralStrokeTemplateRaw from './ThemeColorsNeutralStroke.template?raw';
import { ThemeColorsNeutralTextTemplate } from './ThemeColorsNeutralText.template';
import ThemeColorsNeutralTextTemplateRaw from './ThemeColorsNeutralText.template?raw';
import { ThemeColorsPrimaryBaseTemplate } from './ThemeColorsPrimaryBase.template';
import ThemeColorsPrimaryBaseTemplateRaw from './ThemeColorsPrimaryBase.template?raw';
import { ThemeColorsPrimaryStrokeTemplate } from './ThemeColorsPrimaryStroke.template';
import ThemeColorsPrimaryStrokeTemplateRaw from './ThemeColorsPrimaryStroke.template?raw';
import { ThemeColorsPrimaryTextTemplate } from './ThemeColorsPrimaryText.template';
import ThemeColorsPrimaryTextTemplateRaw from './ThemeColorsPrimaryText.template?raw';
import { ThemeColorsStatusBaseTemplate } from './ThemeColorsStatusBase.template';
import ThemeColorsStatusBaseTemplateRaw from './ThemeColorsStatusBase.template?raw';
import { ThemeColorsStatusStrokeTemplate } from './ThemeColorsStatusStroke.template';
import ThemeColorsStatusStrokeTemplateRaw from './ThemeColorsStatusStroke.template?raw';
import { ThemeColorsStatusTextTemplate } from './ThemeColorsStatusText.template';
import ThemeColorsStatusTextTemplateRaw from './ThemeColorsStatusText.template?raw';

const meta = {
  title: 'Theme Colors',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj;

export const Usage: Story = {
  parameters: {
    docs: {
      source: {
        code: ThemeColorsTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsTemplate />,
};

export const NeutralBase: Story = {
  name: 'Neutral / Base',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsNeutralBaseTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsNeutralBaseTemplate />,
};

export const NeutralText: Story = {
  name: 'Neutral / Text',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsNeutralTextTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsNeutralTextTemplate />,
};

export const NeutralStroke: Story = {
  name: 'Neutral / Stroke',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsNeutralStrokeTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsNeutralStrokeTemplate />,
};

export const PrimaryBase: Story = {
  name: 'Primary / Base',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsPrimaryBaseTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsPrimaryBaseTemplate />,
};

export const PrimaryText: Story = {
  name: 'Primary / Text',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsPrimaryTextTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsPrimaryTextTemplate />,
};

export const PrimaryStroke: Story = {
  name: 'Primary / Stroke',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsPrimaryStrokeTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsPrimaryStrokeTemplate />,
};

export const StatusBase: Story = {
  name: 'Status / Base',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsStatusBaseTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsStatusBaseTemplate />,
};

export const StatusText: Story = {
  name: 'Status / Text',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsStatusTextTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsStatusTextTemplate />,
};

export const StatusStroke: Story = {
  name: 'Status / Stroke',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsStatusStrokeTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsStatusStrokeTemplate />,
};

export const ExtraBase: Story = {
  name: 'Extra / Base',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsExtraBaseTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsExtraBaseTemplate />,
};

export const ExtraText: Story = {
  name: 'Extra / Text',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsExtraTextTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsExtraTextTemplate />,
};

export const ExtraStroke: Story = {
  name: 'Extra / Stroke',
  parameters: {
    docs: {
      source: {
        code: ThemeColorsExtraStrokeTemplateRaw,
      },
    },
  },
  render: () => <ThemeColorsExtraStrokeTemplate />,
};
