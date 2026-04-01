import { ThemeProvider, styled } from 'styled-components';

import { themes, typography, type BuiltTheme, type ThemeMode } from '@admiral-ds/admiral3-tokens';

type ScopedThemeExample = {
  readonly getMode: (globalMode: 'light' | 'dark') => ThemeMode;
  readonly title: string;
  readonly text: string;
};

const scopedThemeExamples: readonly ScopedThemeExample[] = [
  {
    getMode: (globalMode) => globalMode,
    title: 'Глобальная тема',
    text: 'Компонент использует ту же тему, что и приложение.',
  },
  {
    getMode: () => 'dark',
    title: 'Статичный Dark',
    text: 'Компонент остается темным при любом режиме приложения.',
  },
  {
    getMode: (globalMode) => (globalMode === 'dark' ? 'darkNeutral' : 'lightNeutral'),
    title: 'Neutral-режим',
    text: 'Компонент меняет только accent и продолжает следовать light/dark режиму.',
  },
];

const StyledPage = styled.article`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 32px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};

  @media (max-width: 720px) {
    padding: 20px;
  }
`;

const StyledContent = styled.div`
  display: grid;
  gap: 32px;
  max-width: 1120px;
`;

const StyledHeader = styled.header`
  display: grid;
  gap: 20px;
`;

const StyledTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Header/H4']}
`;

const StyledText = styled.p`
  max-width: 960px;
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Body/Body 1 Long']}
`;

const StyledDemo = styled.section`
  display: grid;
  gap: 16px;
  padding: 24px;
  background: ${({ theme }) => theme.color.base.neutral.base2.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['8'].large};
`;

const StyledDemoTitle = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Header/H5']}
`;

const StyledCards = styled.div`
  display: grid;
  gap: 12px;
`;

const StyledThemePanels = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const StyledThemeModePanel = styled.div`
  display: grid;
  gap: 16px;
  min-width: 0;
  padding: 20px;
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['6'].large};
`;

const StyledThemeModeTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Header/H6']}
`;

const StyledCard = styled.article`
  display: grid;
  gap: 14px;
  min-width: 0;
  padding: 20px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['6'].large};
  box-shadow: ${({ theme }) => theme.shadow.shadow04};
`;

const StyledSideMenu = styled(StyledCard)`
  min-height: 172px;
`;

const StyledCardTitle = styled.h3`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Header/H6']}
`;

const StyledCardText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  ${typography['Body/Body 2 Long']}
`;

const StyledAction = styled.button`
  justify-self: start;
  min-height: 36px;
  padding: 0 14px;
  color: ${({ theme }) => theme.color.text.neutral.inverted.rest};
  background: ${({ theme }) => theme.color.base.primary.base1.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.primary.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
  cursor: pointer;
  ${typography['Button/Button 2']}

  &:hover {
    background: ${({ theme }) => theme.color.base.primary.base1.hover};
  }
`;

const StyledMenuList = styled.nav`
  display: grid;
  gap: 8px;
`;

const StyledMenuItem = styled.span`
  display: block;
  padding: 8px 10px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base2.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
  ${typography['Body/Body 2 Long']}
`;

const StyledMenuItemActive = styled(StyledMenuItem)`
  color: ${({ theme }) => theme.color.text.neutral.inverted.rest};
  background: ${({ theme }) => theme.color.base.primary.base1.rest};
`;

const ScopedThemeCard = ({
  globalMode,
  item,
}: {
  readonly globalMode: 'light' | 'dark';
  readonly item: ScopedThemeExample;
}) => {
  const mode = item.getMode(globalMode);

  return (
    <ThemeProvider theme={themes[mode] as BuiltTheme}>
      <StyledSideMenu>
        <div>
          <StyledCardTitle>{item.title}</StyledCardTitle>
          <StyledCardText>{item.text}</StyledCardText>
        </div>
        <StyledMenuList aria-label={`${item.title}: ${mode}`}>
          <StyledMenuItemActive>Dashboard</StyledMenuItemActive>
          <StyledMenuItem>Products</StyledMenuItem>
          <StyledMenuItem>Settings</StyledMenuItem>
        </StyledMenuList>
        <StyledAction type="button">{mode}</StyledAction>
      </StyledSideMenu>
    </ThemeProvider>
  );
};

const ThemeModePanel = ({ mode, title }: { readonly mode: 'light' | 'dark'; readonly title: string }) => (
  <ThemeProvider theme={themes[mode] as BuiltTheme}>
    <StyledThemeModePanel>
      <StyledThemeModeTitle>{title}</StyledThemeModeTitle>
      <StyledCards>
        {scopedThemeExamples.map((item) => (
          <ScopedThemeCard key={item.title} globalMode={mode} item={item} />
        ))}
      </StyledCards>
    </StyledThemeModePanel>
  </ThemeProvider>
);

export const ComponentThemeScopeTemplate = () => (
  <StyledPage>
    <StyledContent>
      <StyledHeader>
        <StyledTitle>Переключение тем в отдельных компонентах</StyledTitle>
        <StyledText>
          Компонент можно обернуть во вложенный ThemeProvider. Если меняется только Neutral-режим, компонент продолжает
          следовать глобальному Light/Dark. Если явно задать Dark, компонент становится статичным.
        </StyledText>
      </StyledHeader>

      <StyledDemo>
        <StyledDemoTitle>Side Menu: глобальная и локальная тема</StyledDemoTitle>
        <StyledThemePanels>
          <ThemeModePanel mode="light" title="Приложение в Light" />
          <ThemeModePanel mode="dark" title="Приложение в Dark" />
        </StyledThemePanels>
      </StyledDemo>
    </StyledContent>
  </StyledPage>
);
