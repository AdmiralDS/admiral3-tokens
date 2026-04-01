import type { PlaygroundScenario } from './index';
import {
  extraPaletteArgs,
  neutralPaletteArgs,
  opacityPaletteArgs,
  primaryPaletteArgs,
  statusPaletteArgs,
} from '../../src/tokens/color/globalColors/stories/GlobalColorsPalette.args';
import { GlobalColorsPaletteTemplate } from '../../src/tokens/color/globalColors/stories/GlobalColorsPalette.template';

export const globalColorsScenarios: PlaygroundScenario[] = [
  {
    id: 'global-colors/neutral',
    title: 'Global Colors Neutral',
    render: () => <GlobalColorsPaletteTemplate {...neutralPaletteArgs} />,
  },
  {
    id: 'global-colors/primary',
    title: 'Global Colors Primary',
    render: () => <GlobalColorsPaletteTemplate {...primaryPaletteArgs} />,
  },
  {
    id: 'global-colors/status',
    title: 'Global Colors Status',
    render: () => <GlobalColorsPaletteTemplate {...statusPaletteArgs} />,
  },
  {
    id: 'global-colors/extra',
    title: 'Global Colors Extra',
    render: () => <GlobalColorsPaletteTemplate {...extraPaletteArgs} />,
  },
  {
    id: 'global-colors/opacity',
    title: 'Global Colors Opacity',
    render: () => <GlobalColorsPaletteTemplate {...opacityPaletteArgs} />,
  },
];
