import { ThemeProvider, styled } from 'styled-components';

import {
  buildTheme,
  createGlobalColorCss,
  createGlobalColorCssVariables,
  generateAdmiralPalette,
  textStyles,
  typography,
} from '@admiral-ds/admiral3-tokens';

// Специально берем цвета не из палитры globalColors
const brandColor = '#8B3DFF';
const errorColor = '#E0205A';
const brandPrimary = generateAdmiralPalette(brandColor, 'primary');
const brandError = generateAdmiralPalette(errorColor, 'error');
const globalColorCssVariables = createGlobalColorCssVariables({
  primary: brandPrimary,
  error: brandError,
});
const brandTheme = buildTheme('light', {
  globalColors: {
    primary: brandPrimary,
    error: brandError,
  },
});
const brandThemeClassName = 'custom-primary-palette-theme';
const brandThemeCss = createGlobalColorCss(
  {
    primary: brandPrimary,
    error: brandError,
  },
  `.${brandThemeClassName}`,
);

const cssVarsCodeSample = `const brandPrimary = generateAdmiralPalette('${brandColor}', 'primary');
const brandError = generateAdmiralPalette('${errorColor}', 'error');

const colorCssVariables = createGlobalColorCssVariables({
  primary: brandPrimary,
  error: brandError,
});

<div style={colorCssVariables}>
  ...
</div>`;

const cssFileCodeSample = `const css = createGlobalColorCss(
  {
    primary: brandPrimary,
    error: brandError,
  },
  '.brand-theme',
);

// .brand-theme {
//   --admiral-color-global-primary-primary110: ...;
//   --admiral-color-global-error-error110: ...;
// }`;

const themeCodeSample = `const brandPrimary = generateAdmiralPalette('${brandColor}', 'primary');
const brandError = generateAdmiralPalette('${errorColor}', 'error');

const theme = buildTheme('light', {
  globalColors: {
    primary: brandPrimary,
    error: brandError,
  },
});

<ThemeProvider theme={theme}>
  ...
</ThemeProvider>`;

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

const StyledInner = styled.div`
  display: grid;
  gap: 24px;
  max-width: 960px;
  margin: 0 auto;
`;

const StyledHeader = styled.header`
  display: grid;
  gap: 8px;
`;

const StyledTitle = styled.h1`
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography.textStyles.header.h4}
`;

const StyledLead = styled.p`
  max-width: 720px;
  margin: 0;
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  ${textStyles.body.body1Long}
`;

const StyledBase = styled.div`
  display: grid;
  grid-template-columns: 96px minmax(0, 1fr);
  gap: 16px;
  align-items: center;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const StyledBaseSwatch = styled.div`
  width: 96px;
  height: 56px;
  background: ${brandColor};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
`;

const StyledBaseText = styled.div`
  display: grid;
  gap: 4px;
  min-width: 0;
`;

const StyledLabel = styled.div`
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  ${textStyles.body.body2Short}
`;

const StyledValue = styled.code`
  min-width: 0;
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${textStyles.monospace.mono3}
`;

const StyledPalette = styled.div`
  display: grid;
  grid-template-columns: repeat(17, minmax(0, 1fr));
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.subtle.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};

  @media (max-width: 720px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

const StyledColor = styled.div<{ $color: string }>`
  display: grid;
  align-content: end;
  min-width: 0;
  aspect-ratio: 1;
  padding: 8px;
  background: ${({ $color }) => $color};
`;

const StyledColorName = styled.span`
  color: ${({ theme }) => theme.color.text.neutral.staticWhite['1']};
  ${textStyles.caption.caption2}
`;

const StyledCode = styled.pre`
  min-width: 0;
  margin: 0;
  padding: 16px;
  overflow: auto;
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  background: ${({ theme }) => theme.color.base.neutral.base3.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
  ${textStyles.monospace.mono3}
`;

const StyledExamples = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const StyledExampleBlock = styled.div`
  display: grid;
  align-content: start;
  gap: 16px;
  padding: 16px;
  background: ${({ theme }) => theme.color.base.neutral.base2.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.stroke1.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
`;

const StyledExampleHeader = styled.div`
  display: grid;
  gap: 4px;
`;

const StyledPreviewRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
`;

const StyledStateButton = styled.button`
  align-self: flex-start;
  width: fit-content;
  min-height: 44px;
  padding: 10px 16px;
  color: ${({ theme }) => theme.color.text.neutral.staticWhite['1']};
  background: var(--admiral-color-global-primary-primary110);
  border: 1px solid var(--admiral-color-global-primary-primary110);
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
  cursor: pointer;
  ${textStyles.body.body2Short}

  &:hover {
    background: var(--admiral-color-global-primary-primary120);
    border-color: var(--admiral-color-global-primary-primary120);
  }

  &:active {
    background: var(--admiral-color-global-primary-primary140);
    border-color: var(--admiral-color-global-primary-primary140);
  }
`;

const StyledErrorStateButton = styled(StyledStateButton)`
  background: var(--admiral-color-global-error-error110);
  border-color: var(--admiral-color-global-error-error110);

  &:hover {
    background: var(--admiral-color-global-error-error120);
    border-color: var(--admiral-color-global-error-error120);
  }

  &:active {
    background: var(--admiral-color-global-error-error140);
    border-color: var(--admiral-color-global-error-error140);
  }
`;

const StyledThemeStateButton = styled(StyledStateButton)`
  background: ${({ theme }) => theme.color.base.primary.base1.rest};
  border-color: ${({ theme }) => theme.color.base.primary.base1.rest};

  &:hover {
    background: ${({ theme }) => theme.color.base.primary.base1.hover};
    border-color: ${({ theme }) => theme.color.base.primary.base1.hover};
  }

  &:active {
    background: ${({ theme }) => theme.color.base.primary.base1.press};
    border-color: ${({ theme }) => theme.color.base.primary.base1.press};
  }
`;

const StyledThemeErrorStateButton = styled(StyledStateButton)`
  background: ${({ theme }) => theme.color.base.status.error.base1.rest};
  border-color: ${({ theme }) => theme.color.base.status.error.base1.rest};

  &:hover {
    background: ${({ theme }) => theme.color.base.status.error.base1.hover};
    border-color: ${({ theme }) => theme.color.base.status.error.base1.hover};
  }

  &:active {
    background: ${({ theme }) => theme.color.base.status.error.base1.press};
    border-color: ${({ theme }) => theme.color.base.status.error.base1.press};
  }
`;

export const CustomPrimaryPaletteTemplate = () => (
  <StyledPage>
    <StyledInner>
      <style>{brandThemeCss}</style>

      <StyledHeader>
        <StyledTitle>Custom primary palette</StyledTitle>
        <StyledLead>Один базовый цвет используется для генерации всей primary-палитры.</StyledLead>
      </StyledHeader>

      <StyledBase>
        <StyledBaseSwatch />
        <StyledBaseText>
          <StyledLabel>Base color</StyledLabel>
          <StyledValue>{brandColor}</StyledValue>
        </StyledBaseText>
      </StyledBase>

      <StyledPalette aria-label="Generated primary palette">
        {Object.entries(brandPrimary).map(([name, color]) => (
          <StyledColor key={name} $color={color}>
            <StyledColorName>{name.replace('primary', '')}</StyledColorName>
          </StyledColor>
        ))}
      </StyledPalette>

      <StyledExamples>
        <StyledExampleBlock style={globalColorCssVariables}>
          <StyledExampleHeader>
            <StyledLabel>CSS variables: inline style</StyledLabel>
            <StyledValue>{'createGlobalColorCssVariables({ primary, error })'}</StyledValue>
          </StyledExampleHeader>
          <StyledPreviewRow>
            <StyledStateButton type="button">Primary button</StyledStateButton>
            <StyledErrorStateButton type="button">Error button</StyledErrorStateButton>
          </StyledPreviewRow>
          <StyledCode>
            <code>{cssVarsCodeSample}</code>
          </StyledCode>
        </StyledExampleBlock>

        <StyledExampleBlock>
          <StyledExampleHeader>
            <StyledLabel>CSS variables: CSS block</StyledLabel>
            <StyledValue>{'createGlobalColorCss({ primary, error })'}</StyledValue>
          </StyledExampleHeader>
          <div className={brandThemeClassName}>
            <StyledPreviewRow>
              <StyledStateButton type="button">Primary button</StyledStateButton>
              <StyledErrorStateButton type="button">Error button</StyledErrorStateButton>
            </StyledPreviewRow>
          </div>
          <StyledCode>
            <code>{brandThemeCss.split('\n').slice(0, 8).join('\n')}</code>
          </StyledCode>
          <StyledCode>
            <code>{cssFileCodeSample}</code>
          </StyledCode>
        </StyledExampleBlock>

        <ThemeProvider theme={brandTheme}>
          <StyledExampleBlock>
            <StyledExampleHeader>
              <StyledLabel>ThemeProvider</StyledLabel>
              <StyledValue>buildTheme('light', overrides)</StyledValue>
            </StyledExampleHeader>
            <StyledPreviewRow>
              <StyledThemeStateButton type="button">Primary button</StyledThemeStateButton>
              <StyledThemeErrorStateButton type="button">Error button</StyledThemeErrorStateButton>
            </StyledPreviewRow>
            <StyledCode>
              <code>{themeCodeSample}</code>
            </StyledCode>
          </StyledExampleBlock>
        </ThemeProvider>
      </StyledExamples>

      <StyledCode>
        <code>{`const themes = buildThemes({
  globalColors: {
    primary: brandPrimary,
    error: brandError,
  },
});

// themes.light
// themes.dark
// themes.lightNeutral
// themes.darkNeutral`}</code>
      </StyledCode>
    </StyledInner>
  </StyledPage>
);
