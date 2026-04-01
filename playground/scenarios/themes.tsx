import type { PlaygroundScenario } from './index';
import { ComponentThemeScopeTemplate } from '../../src/tokens/themes/stories/ComponentThemeScope.template';
import { ThemesOverviewTemplate } from '../../src/tokens/themes/stories/ThemesOverview.template';

export const themeScenarios: PlaygroundScenario[] = [
  {
    id: 'themes/overview',
    title: 'Themes',
    render: () => <ThemesOverviewTemplate />,
  },
  {
    id: 'themes/component-scope',
    title: 'Themes: Component scope',
    render: () => <ComponentThemeScopeTemplate />,
  },
];
