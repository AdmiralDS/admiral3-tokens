import { useMemo, useState } from 'react';

import { ThemeProvider, styled } from 'styled-components';

import {
  darkNeutralTheme,
  darkTheme,
  lightNeutralTheme,
  lightTheme,
  typography,
  type ThemeMode,
} from '@admiral-ds/admiral3-tokens';

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
  lightNeutral: lightNeutralTheme,
  darkNeutral: darkNeutralTheme,
} as const;

const modeOptions = Object.keys(themeMap) as ThemeMode[];

const StyledShell = styled.section`
  width: min(760px, 100%);
  padding: ${({ theme }) => theme.radius.byBase['8'].large};
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base2.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['8'].large};
`;

const StyledToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`;

const StyledModeButton = styled.button<{ $active: boolean }>`
  min-height: 32px;
  padding: 0 12px;
  color: ${({ $active, theme }) =>
    $active ? theme.color.text.neutral.staticWhite['1'] : theme.color.text.neutral.text1.rest};
  background: ${({ $active, theme }) =>
    $active ? theme.color.base.primary.base1.rest : theme.color.base.neutral.base1.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
  cursor: pointer;
`;

const StyledCard = styled.article`
  padding: 20px;
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['6'].large};
  box-shadow: ${({ theme }) => theme.shadow.shadow08};
`;

const StyledSurface = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 16px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StyledEyebrow = styled.span`
  display: block;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.text.primary.text1.rest};
  ${typography['Caption/Caption 1']}
`;

const StyledTitle = styled.h2`
  margin: 0 0 8px;
  ${typography['Header/H4']}
`;

const StyledText = styled.p`
  margin: 0;
  max-width: 520px;
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  ${typography['Body/Body 2 Long']}
`;

const StyledActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
`;

const StyledActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  min-height: 36px;
  padding: 0 14px;
  color: ${({ $variant = 'primary', theme }) =>
    $variant === 'primary' ? theme.color.text.neutral.staticWhite['1'] : theme.color.text.neutral.text1.rest};
  background: ${({ $variant = 'primary', theme }) =>
    $variant === 'primary' ? theme.color.base.primary.base1.rest : theme.color.base.neutral.base1.rest};
  border: 1px solid
    ${({ $variant = 'primary', theme }) =>
      $variant === 'primary' ? theme.color.stroke.primary.stroke1.rest : theme.color.stroke.neutral.stroke2.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
`;

const StyledSwatches = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 32px);
  gap: 8px;
`;

const StyledSwatch = styled.span<{ $tone: 'primary' | 'success' | 'warning' | 'error' }>`
  width: 32px;
  aspect-ratio: 1;
  background: ${({ $tone, theme }) => {
    if ($tone === 'primary') {
      return theme.color.base.primary.base1.rest;
    }

    return theme.color.base.status[$tone].base1.rest;
  }};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
`;

export const TokenStyledExample = () => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const theme = useMemo(() => themeMap[mode], [mode]);

  return (
    <ThemeProvider theme={theme}>
      <StyledShell>
        <StyledToolbar>
          {modeOptions.map((item) => (
            <StyledModeButton
              key={item}
              $active={item === mode}
              data-active={item === mode ? 'true' : undefined}
              onClick={() => setMode(item)}
              type="button"
            >
              {item}
            </StyledModeButton>
          ))}
        </StyledToolbar>
        <StyledSurface>
          <StyledCard>
            <StyledEyebrow>ThemeProvider</StyledEyebrow>
            <StyledTitle>Styled-components tokens</StyledTitle>
            <StyledText>This panel uses package theme objects for color, radius and resolved shadow tokens.</StyledText>
            <StyledActions>
              <StyledActionButton type="button">Primary action</StyledActionButton>
              <StyledActionButton $variant="secondary" type="button">
                Secondary
              </StyledActionButton>
            </StyledActions>
          </StyledCard>

          <StyledSwatches aria-label="Styled-components token samples">
            <StyledSwatch $tone="primary" />
            <StyledSwatch $tone="success" />
            <StyledSwatch $tone="warning" />
            <StyledSwatch $tone="error" />
          </StyledSwatches>
        </StyledSurface>
      </StyledShell>
    </ThemeProvider>
  );
};
