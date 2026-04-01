import type { CSSProperties } from 'react';

import { styled } from 'styled-components';

import { globalColors, radius, shadow, textStyles, themeColors, typography } from '@admiral-ds/admiral3-tokens';

const body2LongInlineStyle: CSSProperties = typography['Body/Body 2 Long'];

const StyledPage = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 32px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  background: var(--admiral-color-base-neutral-base1-rest, ${({ theme }) => theme.color.base.neutral.base1.rest});

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
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color['Text/Neutral/Text 1/Rest']});
  ${typography['Header/H4']}
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
  border: 1px solid ${({ theme }) => theme.color['Stroke/Neutral/Stroke 1/Rest']};
  border-radius: ${({ theme }) => theme.radius['By Base/8/Large']};
  box-shadow: var(--admiral-shadow-shadow08, ${({ theme }) => theme.shadow['Shadow 08']});
`;

const StyledCardTitle = styled.h2`
  margin: 0 0 16px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography.textStyles.header.h6}
`;

const StyledRows = styled.div`
  display: grid;
  gap: 10px;
`;

const StyledExampleRow = styled.div`
  display: grid;
  grid-template-columns: minmax(120px, 1fr) minmax(0, 1.45fr);
  gap: 12px;
  align-items: start;
  min-width: 0;

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSample = styled.div`
  min-width: 0;
  padding: 10px 12px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};
  border: 1px solid ${({ theme }) => theme.color.stroke.neutral.subtle.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
`;

const StyledCode = styled.code`
  display: block;
  min-width: 0;
  padding: 10px 12px;
  overflow-wrap: anywhere;
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  background: ${({ theme }) => theme.color.base.neutral.base3.rest};
  border-radius: ${({ theme }) => theme.radius.byBase['2'].medium};
  ${textStyles.monospace.mono3}
`;

const StyledTypographyAlias = styled(StyledSample)`
  ${typography['Body/Body 2 Long']}
`;

const StyledTypographyNestedObject = styled(StyledSample)`
  ${typography.textStyles.body.body2Long}
`;

const StyledTextStylesExport = styled(StyledSample)`
  ${textStyles.body.body2Long}
`;

const StyledColorSemanticNested = styled(StyledSample)`
  color: ${({ theme }) => theme.color.text.neutral.staticWhite['1']};
  background: ${({ theme }) => theme.color.base.primary.base1.rest};
  border-color: ${({ theme }) => theme.color.stroke.primary.stroke1.rest};
`;

const StyledColorSemanticAlias = styled(StyledSample)`
  color: ${({ theme }) => theme.color['Text/Neutral/Static White/1']};
  background: ${({ theme }) => theme.color['Base/Status/Success/Base 1/Rest']};
  border-color: ${({ theme }) => theme.color['Stroke/Status/Success/Stroke 1/Rest']};
`;

const StyledColorCssVars = styled(StyledSample)`
  color: var(--admiral-color-text-neutral-static-white-1, ${({ theme }) => theme.color.text.neutral.staticWhite['1']});
  background: var(
    --admiral-color-base-status-error-base1-rest,
    ${({ theme }) => theme.color.base.status.error.base1.rest}
  );
  border-color: var(
    --admiral-color-stroke-status-error-stroke1-rest,
    ${({ theme }) => theme.color.stroke.status.error.stroke1.rest}
  );
`;

const StyledColorGlobal = styled(StyledSample)`
  color: ${globalColors.neutral.white};
  background: var(--admiral-color-global-primary-primary110, ${globalColors.primary.primary110});
  border-color: ${globalColors.primary.primary130};
`;

const StyledColorSourceReference = styled(StyledSample)`
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.primary.base3.rest};
  border-color: ${({ theme }) => theme.color.stroke.primary.stroke2.rest};
`;

const StyledRadiusNested = styled(StyledSample)`
  border-radius: ${({ theme }) => theme.radius.byBase['6'].large};
`;

const StyledRadiusAlias = styled(StyledSample)`
  border-radius: ${({ theme }) => theme.radius['By Base/6/Large']};
`;

const StyledRadiusExport = styled(StyledSample)`
  border-radius: ${radius.byBase['6'].large};
`;

const StyledRadiusCssVar = styled(StyledSample)`
  border-radius: var(--admiral-radius-by-base-6-large, ${({ theme }) => theme.radius.byBase['6'].large});
`;

const StyledShadowNested = styled(StyledSample)`
  box-shadow: ${({ theme }) => theme.shadow.shadow08};
`;

const StyledShadowAlias = styled(StyledSample)`
  box-shadow: ${({ theme }) => theme.shadow['Shadow 08']};
`;

const StyledShadowCssVar = styled(StyledSample)`
  box-shadow: var(--admiral-shadow-shadow08, ${({ theme }) => theme.shadow.shadow08});
`;

const StyledShadowGeometry = styled(StyledSample)`
  box-shadow: ${({ theme }) =>
    shadow.shadow08.map(({ x, y, blur, color }) => `${x} ${y} ${blur} ${theme.color.shadow[color]}`).join(', ')};
`;

const rows = {
  typography: [
    {
      Sample: StyledTypographyAlias,
      text: 'alias key',
      code: "${typography['Body/Body 2 Long']}",
    },
    {
      Sample: StyledTypographyNestedObject,
      text: 'nested object',
      code: '${typography.textStyles.body.body2Long}',
    },
    {
      Sample: StyledTextStylesExport,
      text: 'separate export',
      code: '${textStyles.body.body2Long}',
    },
  ],
  color: [
    {
      Sample: StyledColorSemanticNested,
      text: 'semantic nested',
      code: 'theme.color.base.primary.base1.rest',
    },
    {
      Sample: StyledColorSemanticAlias,
      text: 'semantic alias key',
      code: "theme.color['Base/Status/Success/Base 1/Rest']",
    },
    {
      Sample: StyledColorCssVars,
      text: 'semantic CSS variables',
      code: 'var(--admiral-color-base-status-error-base1-rest)',
    },
    {
      Sample: StyledColorGlobal,
      text: 'global palette',
      code: 'globalColors.primary.primary110',
    },
    {
      Sample: StyledColorSourceReference,
      text: themeColors.base.primary.light.base1.rest,
      code: 'themeColors.base.primary.light.base1.rest',
    },
  ],
  radius: [
    {
      Sample: StyledRadiusNested,
      text: 'nested object',
      code: "theme.radius.byBase['6'].large",
    },
    {
      Sample: StyledRadiusAlias,
      text: 'alias key',
      code: "theme.radius['By Base/6/Large']",
    },
    {
      Sample: StyledRadiusExport,
      text: 'separate export',
      code: "radius.byBase['6'].large",
    },
    {
      Sample: StyledRadiusCssVar,
      text: 'CSS variable',
      code: 'var(--admiral-radius-by-base-6-large)',
    },
  ],
  shadow: [
    {
      Sample: StyledShadowNested,
      text: 'nested object',
      code: 'theme.shadow.shadow08',
    },
    {
      Sample: StyledShadowAlias,
      text: 'alias key',
      code: "theme.shadow['Shadow 08']",
    },
    {
      Sample: StyledShadowCssVar,
      text: 'CSS variable',
      code: 'var(--admiral-shadow-shadow08)',
    },
    {
      Sample: StyledShadowGeometry,
      text: 'geometry + semantic shadow colors',
      code: 'shadow.shadow08 + theme.color.shadow[color]',
    },
  ],
} as const;

const ExampleRow = ({ Sample, text, code }: (typeof rows)[keyof typeof rows][number]) => (
  <StyledExampleRow>
    <Sample>{text}</Sample>
    <StyledCode>{code}</StyledCode>
  </StyledExampleRow>
);

export const TokenUsageExamplesTemplate = () => (
  <StyledPage>
    <StyledHeader>
      <StyledTitle>Token usage examples</StyledTitle>
      <StyledLead>
        Один и тот же набор токенов использован через alias-ключи, вложенные объекты, отдельные экспорты, CSS-переменные
        и композицию из primitives/geometry.
      </StyledLead>
    </StyledHeader>

    <StyledGrid>
      <StyledCard>
        <StyledCardTitle>Typography</StyledCardTitle>
        <StyledRows>
          {rows.typography.map((row) => (
            <ExampleRow key={row.code} {...row} />
          ))}
          <StyledExampleRow>
            <StyledSample style={body2LongInlineStyle}>React inline style</StyledSample>
            <StyledCode>{"style={typography['Body/Body 2 Long']}"}</StyledCode>
          </StyledExampleRow>
        </StyledRows>
      </StyledCard>

      <StyledCard>
        <StyledCardTitle>Colors</StyledCardTitle>
        <StyledRows>
          {rows.color.map((row) => (
            <ExampleRow key={row.code} {...row} />
          ))}
        </StyledRows>
      </StyledCard>

      <StyledCard>
        <StyledCardTitle>Radius</StyledCardTitle>
        <StyledRows>
          {rows.radius.map((row) => (
            <ExampleRow key={row.code} {...row} />
          ))}
        </StyledRows>
      </StyledCard>

      <StyledCard>
        <StyledCardTitle>Shadow</StyledCardTitle>
        <StyledRows>
          {rows.shadow.map((row) => (
            <ExampleRow key={row.code} {...row} />
          ))}
        </StyledRows>
      </StyledCard>
    </StyledGrid>
  </StyledPage>
);
