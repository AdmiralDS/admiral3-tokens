import { styled } from 'styled-components';

import {
  buildTheme,
  createGlobalColorCss,
  createPrimaryCssVariables,
  generateAdmiralPalette,
  textStyles,
} from '@admiral-ds/admiral3-tokens';

import { FontsSourceCodePro, FontsVTBGroup } from '@admiral-ds/admiral3-tokens/fonts';

const customPrimary = generateAdmiralPalette('#8B3DFF', 'primary');
const customPrimaryVariables = createPrimaryCssVariables(customPrimary);
const customTheme = buildTheme('light', {
  globalColors: {
    primary: customPrimary,
  },
});
const customGlobalCss = createGlobalColorCss({ primary: customPrimary }, '.brand-theme');

const StyledPage = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 32px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};

  @media (max-width: 720px) {
    padding: 20px;
  }
`;

const StyledHeader = styled.header`
  max-width: 1120px;
  margin: 0 auto 24px;
`;

const StyledTitle = styled.h1`
  margin: 0 0 8px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${textStyles.header.h4}
`;

const StyledLead = styled.p`
  max-width: 760px;
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  ${textStyles.body.body1Long}
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.article`
  box-sizing: border-box;
  min-width: 0;
  padding: 24px;
  background: ${({ theme }) => theme.color.base.neutral.base2.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['8'].large};
`;

const StyledCardTitle = styled.h2`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${textStyles.header.h6}
`;

const StyledCode = styled.code`
  display: block;
  min-width: 0;
  padding: 12px;
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  background: ${({ theme }) => theme.color.base.neutral.base3.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['2'].medium};
  ${textStyles.monospace.mono3}
`;

const StyledPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 8px;

  @media (max-width: 560px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const StyledSwatch = styled.div<{ $color: string }>`
  min-width: 0;
  aspect-ratio: 1;
  background: ${({ $color }) => $color};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
`;

const StyledDemo = styled.div`
  display: grid;
  gap: 12px;
`;

const StyledAction = styled.button`
  justify-self: start;
  padding: 10px 16px;
  color: ${customTheme.color.text.neutral.staticWhite['1']};
  background: ${customTheme.color.base.primary.base1.rest};
  border: 1px solid ${customTheme.color.stroke.primary.stroke1.rest};
  border-radius: ${customTheme.radius.byBase['4'].medium};
  ${textStyles.button.button1}
`;

const StyledVtbText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  font-family: 'VTB Group UI', sans-serif;
  ${textStyles.body.body1Long}
`;

const StyledMonoText = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  font-family: 'Source Code Pro', monospace;
  ${textStyles.monospace.mono2}
`;

const palettePreview = [
  customPrimary.primary10,
  customPrimary.primary40,
  customPrimary.primary70,
  customPrimary.primary100,
  customPrimary.primary130,
  customPrimary.primary160,
];

export const HelpersAndFontsTemplate = () => (
  <StyledPage>
    <FontsVTBGroup />
    <FontsSourceCodePro />

    <StyledHeader>
      <StyledTitle>Helpers and fonts</StyledTitle>
      <StyledLead>
        Публичные helpers можно использовать для brand palette, CSS variables, theme objects и подключения шрифтов через
        React entrypoint.
      </StyledLead>
    </StyledHeader>

    <StyledGrid>
      <StyledCard>
        <StyledCardTitle>Generated primary palette</StyledCardTitle>
        <StyledDemo>
          <StyledPalette aria-label="Generated primary palette preview">
            {palettePreview.map((color) => (
              <StyledSwatch key={color} $color={color} />
            ))}
          </StyledPalette>
          <StyledCode>{`const primary = generateAdmiralPalette('#8B3DFF', 'primary');
const variables = createPrimaryCssVariables(primary);

variables['--admiral-color-global-primary-primary110'];
// ${customPrimaryVariables['--admiral-color-global-primary-primary110']}`}</StyledCode>
        </StyledDemo>
      </StyledCard>

      <StyledCard>
        <StyledCardTitle>Theme with overrides</StyledCardTitle>
        <StyledDemo>
          <StyledAction type="button">Primary action</StyledAction>
          <StyledCode>{`const theme = buildTheme('light', {
  globalColors: {
    primary,
  },
});

theme.color.base.primary.base1.rest;
// ${customTheme.color.base.primary.base1.rest}`}</StyledCode>
        </StyledDemo>
      </StyledCard>

      <StyledCard>
        <StyledCardTitle>CSS block helper</StyledCardTitle>
        <StyledCode>{customGlobalCss}</StyledCode>
      </StyledCard>

      <StyledCard>
        <StyledCardTitle>Font helpers</StyledCardTitle>
        <StyledDemo>
          <StyledVtbText>VTB Group UI regular text sample</StyledVtbText>
          <StyledMonoText>Source Code Pro monospace sample 0123456789</StyledMonoText>
          <StyledCode>{`import { FontsSourceCodePro, FontsVTBGroup } from '@admiral-ds/admiral3-tokens/fonts';

export function AppFonts() {
  return (
    <>
      <FontsVTBGroup />
      <FontsSourceCodePro />
    </>
  );
}`}</StyledCode>
        </StyledDemo>
      </StyledCard>
    </StyledGrid>
  </StyledPage>
);
