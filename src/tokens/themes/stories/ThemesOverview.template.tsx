import { ThemeProvider, styled } from 'styled-components';

import { themes, typography, type BuiltTheme, type ThemeMode } from '@admiral-ds/admiral3-tokens';

type ThemeOverviewItem = {
  readonly mode: ThemeMode;
  readonly title: string;
  readonly description: string;
};

const themeOverviewItems: readonly ThemeOverviewItem[] = [
  {
    mode: 'light',
    title: 'Light theme',
    description: 'Это дефолтная светлая тема с цветным акцентным цветом, в данном случае — синим',
  },
  {
    mode: 'lightNeutral',
    title: 'Neutral Light theme',
    description:
      'Светлая тема, но весь акцентный цвет становится нейтральным. Учитывайте, что нейтральным становится только акцентный цвет. Все остальные цвета (зеленый, красный и тд) не меняются.',
  },
  {
    mode: 'dark',
    title: 'Dark theme',
    description: 'Темная тема с цветным акцентным цветом',
  },
  {
    mode: 'darkNeutral',
    title: 'Neutral Dark theme',
    description: 'Темная тема с нейтральным акцентным цветом',
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
  gap: 24px;
  max-width: 1120px;
`;

const StyledLead = styled.p`
  max-width: 1080px;
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Header/H4']}
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const StyledThemeCard = styled.section`
  display: grid;
  min-width: 0;
  min-height: 232px;
  padding: 24px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['8'].large};
  box-shadow: ${({ theme }) => theme.shadow.shadow08};
`;

const StyledThemeTitle = styled.h2`
  margin: 0 0 24px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Header/H5']}
`;

const StyledThemeDescription = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Body/Body 1 Long']}
`;

const StyledPreview = styled.div`
  display: grid;
  gap: 12px;
  align-self: end;
`;

const StyledPreviewRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledPill = styled.span`
  display: inline-flex;
  min-height: 32px;
  align-items: center;
  padding: 0 12px;
  color: ${({ theme }) => theme.color.text.neutral.inverted.rest};
  background: ${({ theme }) => theme.color.base.primary.base1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
  ${typography['Button/Button 2']}
`;

const StyledSecondaryPill = styled(StyledPill)`
  color: ${({ theme }) => theme.color.text.primary.text1.rest};
  background: ${({ theme }) => theme.color.base.primary.base3.rest};
`;

const ThemeOverviewCard = ({ item }: { readonly item: ThemeOverviewItem }) => (
  <ThemeProvider theme={themes[item.mode] as BuiltTheme}>
    <StyledThemeCard>
      <div>
        <StyledThemeTitle>{item.title}</StyledThemeTitle>
        <StyledThemeDescription>{item.description}</StyledThemeDescription>
      </div>
      <StyledPreview aria-label={`${item.title} accent preview`}>
        <StyledPreviewRow>
          <StyledPill>Primary</StyledPill>
          <StyledSecondaryPill>Secondary</StyledSecondaryPill>
        </StyledPreviewRow>
      </StyledPreview>
    </StyledThemeCard>
  </ThemeProvider>
);

export const ThemesOverviewTemplate = () => (
  <StyledPage>
    <StyledContent>
      <StyledLead>В библиотеке присутствуют 4 темы — Light, Neutral Light, Dark, Neutral Dark.</StyledLead>
      <StyledGrid>
        {themeOverviewItems.map((item) => (
          <ThemeOverviewCard key={item.mode} item={item} />
        ))}
      </StyledGrid>
    </StyledContent>
  </StyledPage>
);
