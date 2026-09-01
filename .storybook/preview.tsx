import type { ComponentType } from 'react';
import { useEffect, useState } from 'react';

import type { Preview } from '@storybook/react-vite';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import { DocsThemeContainer } from './DocsThemeContainer';
import {
  getPreferredSimpleTheme,
  isStorybookAdmiralTheme,
  isStorybookCornerRadius,
  resolveAdmiralTheme,
  resolveStorybookShellTheme,
  type StorybookAdmiralTheme,
} from './storybookThemes';
import { FontsSourceCodePro, FontsVTBGroup } from '../src/fonts';
import { cornerRadiusOptions, type CornerRadiusBase } from '../src/tokens/radius';
import { buildTheme, type BuiltTheme } from '../src/tokens/themes';
import './preview.css';

const StorybookRadiusVariables = createGlobalStyle<{ $radius: BuiltTheme['radius'] }>`
  body {
    --admiral-radius-small: ${({ $radius }) => $radius.small};
    --admiral-radius-medium: ${({ $radius }) => $radius.medium};
    --admiral-radius-large: ${({ $radius }) => $radius.large};
  }
`;

const PreviewThemeShell = ({
  Story,
  selectedCornerRadius,
  selectedTheme,
}: {
  Story: ComponentType;
  selectedCornerRadius: CornerRadiusBase;
  selectedTheme: StorybookAdmiralTheme;
}) => {
  const [preferredTheme, setPreferredTheme] = useState(getPreferredSimpleTheme);
  const theme = resolveAdmiralTheme(selectedTheme, preferredTheme);
  const shellTheme = resolveStorybookShellTheme(selectedTheme, preferredTheme);
  const admiralTheme = buildTheme(theme, { cornerRadius: selectedCornerRadius });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => setPreferredTheme(getPreferredSimpleTheme());

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    document.body.classList.remove('sb-theme-light', 'sb-theme-dark');
    document.body.classList.add(`sb-theme-${shellTheme}`);
    document.body.dataset.admiralTheme = shellTheme;
  }, [shellTheme, theme]);

  useEffect(() => {
    document.body.dataset.admiralCornerRadius = selectedCornerRadius;

    return () => {
      delete document.body.dataset.admiralCornerRadius;
    };
  }, [selectedCornerRadius]);

  return (
    <ThemeProvider theme={admiralTheme}>
      <StorybookRadiusVariables $radius={admiralTheme.radius} />
      <FontsVTBGroup />
      <FontsSourceCodePro />
      <Story />
    </ThemeProvider>
  );
};

const PreviewThemeDecorator = (
  Story: ComponentType,
  context: { globals: { cornerRadius?: string; theme?: string } },
) => {
  const selectedTheme = isStorybookAdmiralTheme(context.globals.theme) ? context.globals.theme : 'system';
  const selectedCornerRadius = isStorybookCornerRadius(context.globals.cornerRadius)
    ? context.globals.cornerRadius
    : '4';

  return <PreviewThemeShell Story={Story} selectedCornerRadius={selectedCornerRadius} selectedTheme={selectedTheme} />;
};

const preview: Preview = {
  tags: ['autodocs'],
  decorators: [PreviewThemeDecorator],
  initialGlobals: {
    cornerRadius: '4',
    theme: 'system',
  },
  globalTypes: {
    cornerRadius: {
      description: 'Corner radius base',
      toolbar: {
        title: 'Corner radius',
        icon: 'circlehollow',
        items: cornerRadiusOptions.map((value) => ({ value, title: `Radius ${value}` })),
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Preview theme',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'system', title: 'System' },
          { value: 'light', title: 'Light' },
          { value: 'lightNeutral', title: 'Light Neutral' },
          { value: 'dark', title: 'Dark' },
          { value: 'darkNeutral', title: 'Dark Neutral' },
        ],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    a11y: {
      test: 'error',
    },
    layout: 'fullscreen',
    options: {
      storySort: {
        order: [
          'Global Colors',
          'Theme Colors',
          'Typography',
          'Radius',
          'Shadows',
          'Animation',
          'Themes',
          'Token Usage Examples',
        ],
      },
    },
    docs: {
      container: DocsThemeContainer,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
