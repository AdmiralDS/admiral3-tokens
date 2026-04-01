import type { PlaygroundScenario } from './index';
import { ThemeColorsTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColors.template';
import { ThemeColorsExtraBaseTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsExtraBase.template';
import { ThemeColorsExtraStrokeTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsExtraStroke.template';
import { ThemeColorsExtraTextTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsExtraText.template';
import { ThemeColorsNeutralBaseTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsNeutralBase.template';
import { ThemeColorsNeutralStrokeTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsNeutralStroke.template';
import { ThemeColorsNeutralTextTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsNeutralText.template';
import { ThemeColorsPrimaryBaseTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsPrimaryBase.template';
import { ThemeColorsPrimaryStrokeTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsPrimaryStroke.template';
import { ThemeColorsPrimaryTextTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsPrimaryText.template';
import { ThemeColorsStatusBaseTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsStatusBase.template';
import { ThemeColorsStatusStrokeTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsStatusStroke.template';
import { ThemeColorsStatusTextTemplate } from '../../src/tokens/color/themeColors/stories/ThemeColorsStatusText.template';

export const themeColorsScenarios: PlaygroundScenario[] = [
  {
    id: 'theme-colors/usage',
    title: 'Theme Colors: Usage',
    render: () => <ThemeColorsTemplate />,
  },
  {
    id: 'theme-colors/palette-neutral-base',
    title: 'Theme Colors: Neutral / Base',
    render: () => <ThemeColorsNeutralBaseTemplate />,
  },
  {
    id: 'theme-colors/palette-neutral-text',
    title: 'Theme Colors: Neutral / Text',
    render: () => <ThemeColorsNeutralTextTemplate />,
  },
  {
    id: 'theme-colors/palette-neutral-stroke',
    title: 'Theme Colors: Neutral / Stroke',
    render: () => <ThemeColorsNeutralStrokeTemplate />,
  },
  {
    id: 'theme-colors/palette-primary-base',
    title: 'Theme Colors: Primary / Base',
    render: () => <ThemeColorsPrimaryBaseTemplate />,
  },
  {
    id: 'theme-colors/palette-primary-text',
    title: 'Theme Colors: Primary / Text',
    render: () => <ThemeColorsPrimaryTextTemplate />,
  },
  {
    id: 'theme-colors/palette-primary-stroke',
    title: 'Theme Colors: Primary / Stroke',
    render: () => <ThemeColorsPrimaryStrokeTemplate />,
  },
  {
    id: 'theme-colors/palette-status-base',
    title: 'Theme Colors: Status / Base',
    render: () => <ThemeColorsStatusBaseTemplate />,
  },
  {
    id: 'theme-colors/palette-status-text',
    title: 'Theme Colors: Status / Text',
    render: () => <ThemeColorsStatusTextTemplate />,
  },
  {
    id: 'theme-colors/palette-status-stroke',
    title: 'Theme Colors: Status / Stroke',
    render: () => <ThemeColorsStatusStrokeTemplate />,
  },
  {
    id: 'theme-colors/palette-extra-base',
    title: 'Theme Colors: Extra / Base',
    render: () => <ThemeColorsExtraBaseTemplate />,
  },
  {
    id: 'theme-colors/palette-extra-text',
    title: 'Theme Colors: Extra / Text',
    render: () => <ThemeColorsExtraTextTemplate />,
  },
  {
    id: 'theme-colors/palette-extra-stroke',
    title: 'Theme Colors: Extra / Stroke',
    render: () => <ThemeColorsExtraStrokeTemplate />,
  },
];
