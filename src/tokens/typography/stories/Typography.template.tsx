import { styled } from 'styled-components';

import type { TypographyTextStyleName } from '@admiral-ds/admiral3-tokens';
import { typography, typographyPrimitives } from '@admiral-ds/admiral3-tokens';

type TypographyStyle = {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
};

export type TypographyRow = {
  name: string;
  styleName: TypographyTextStyleName;
  description: string;
};

export type TypographyColorToken = {
  cssVariable: string;
  tokenName: `Text/${string}`;
};

export type TypographySection = {
  title: string;
  rows: TypographyRow[];
  colorTokens?: TypographyColorToken[];
};

export type TypographyTemplateProps = {
  title: string;
  sections: TypographySection[];
};

const formatFontWeight = (value: number) => {
  const primitiveName = Object.entries(typographyPrimitives.fontWeight).find(([, primitiveValue]) => {
    return primitiveValue === value;
  })?.[0];

  return primitiveName ? primitiveName.replace(/^./, (letter) => letter.toUpperCase()) : value;
};

const StyledPage = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 26px 24px 48px;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  background: var(--admiral-color-base-neutral-base1-rest, ${(p) => p.theme.color['Base/Neutral/Base 1/Rest']});
`;

const StyledSectionTitle = styled.h2`
  box-sizing: border-box;
  margin: 0 0 56px;
  padding: 24px 28px;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  background: var(--admiral-color-base-neutral-base2-rest, ${(p) => p.theme.color['Base/Neutral/Base 2/Rest']});
  border-radius: var(--admiral-radius-by-base-4-medium, ${(p) => p.theme.radius['By Base/4/Medium']});
  ${typography['Header/H6']}
`;

const StyledList = styled.div`
  border-bottom: 1px solid
    var(--admiral-color-stroke-neutral-subtle-rest, ${(p) => p.theme.color['Stroke/Neutral/Subtle/Rest']});
`;

const StyledSection = styled.section`
  &:not(:first-child) {
    margin-top: 24px;
  }
`;

const StyledTitle = styled.h1`
  max-width: 1024px;
  margin: 0 auto 10px;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${typography['Header/H4']}
`;

const StyledRow = styled.article<{ $hasColors: boolean }>`
  display: grid;
  grid-template-areas: ${({ $hasColors }) =>
    $hasColors ? "'sample meta description colors'" : "'sample meta description'"};
  grid-template-columns: ${({ $hasColors }) =>
    $hasColors
      ? 'minmax(118px, max-content) 160px minmax(180px, 320px) 176px'
      : 'minmax(118px, max-content) 220px minmax(240px, 480px)'};
  column-gap: 16px;
  row-gap: 18px;
  align-items: start;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
  min-height: 154px;
  padding: 0 0 54px;
  border-top: 1px solid
    var(--admiral-color-stroke-neutral-subtle-rest, ${(p) => p.theme.color['Stroke/Neutral/Subtle/Rest']});

  &:first-child {
    border-top: 0;
  }

  &:not(:first-child) {
    padding-top: 46px;
  }

  @media (max-width: 820px) {
    grid-template-areas: ${({ $hasColors }) =>
      $hasColors ? "'sample meta description' 'sample meta colors'" : "'sample meta description'"};
    grid-template-columns: ${({ $hasColors }) =>
      $hasColors
        ? 'minmax(118px, max-content) 160px minmax(180px, 320px)'
        : 'minmax(118px, max-content) 180px minmax(180px, 320px)'};
  }

  @media (max-width: 620px) {
    grid-template-areas:
      'sample meta'
      'description description'
      'colors colors';
    grid-template-columns: minmax(118px, max-content) minmax(150px, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-areas:
      'sample'
      'meta'
      'description'
      'colors';
    grid-template-columns: 1fr;
  }
`;

const StyledSample = styled.div<{ $styleName: TypographyTextStyleName }>`
  grid-area: sample;
  min-width: 0;
  margin: -4px 0 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${({ $styleName }) => typography[$styleName]}
`;

const StyledMeta = styled.dl`
  grid-area: meta;
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 2px 4px;
  min-width: 0;
  margin: 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${typography['Body/Body 2 Long']}
`;

const StyledTerm = styled.dt`
  color: var(--admiral-color-text-neutral-text2-rest, ${(p) => p.theme.color['Text/Neutral/Text 2/Rest']});
`;

const StyledValue = styled.dd`
  min-width: 0;
  margin: 0;
`;

const StyledDescription = styled.p`
  grid-area: description;
  min-width: 0;
  max-width: 320px;
  margin: 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${typography['Body/Body 2 Long']}
`;

const StyledColors = styled.div`
  grid-area: colors;
  justify-self: start;
  width: 176px;
`;

const StyledColorsTitle = styled.div`
  margin-bottom: 18px;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${typography['Body/Body 2 Long']}
`;

const StyledColorList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  width: 176px;
`;

const StyledColor = styled.span<{
  $cssVariable: string;
  $tokenName: TypographyColorToken['tokenName'];
  $isWhite: boolean;
}>`
  box-sizing: border-box;
  display: block;
  width: 28px;
  height: 28px;
  background: var(${(p) => p.$cssVariable}, ${(p) => p.theme.color[p.$tokenName]});
  border: 1px solid
    ${(p) =>
      p.$isWhite
        ? `var(--admiral-color-stroke-neutral-stroke1-rest, ${p.theme.color['Stroke/Neutral/Stroke 1/Rest']})`
        : `var(${p.$cssVariable}, ${p.theme.color[p.$tokenName]})`};
  border-radius: var(--admiral-radius-by-base-8-large, ${(p) => p.theme.radius['By Base/8/Large']});
`;

const formatPxAsPt = (value: string) => value.replace('px', ' pt');
const formatPx = (value: string) => value.replace('px', ' px');

export const TypographyTemplate = ({ sections }: TypographyTemplateProps) => {
  return (
    <StyledPage>
      <StyledTitle>Роли стилей</StyledTitle>
      {sections.map(({ title: sectionTitle, rows, colorTokens }) => (
        <StyledSection key={sectionTitle}>
          <StyledSectionTitle>{sectionTitle}</StyledSectionTitle>
          <StyledList>
            {rows.map(({ name, styleName, description }) => {
              const style = typography[styleName] as TypographyStyle;

              return (
                <StyledRow key={name} $hasColors={Boolean(colorTokens?.length)}>
                  <StyledSample $styleName={styleName}>{name}</StyledSample>
                  <StyledMeta>
                    <StyledTerm>Шрифт</StyledTerm>
                    <StyledValue>{formatFontWeight(style.fontWeight)}</StyledValue>
                    <StyledTerm>Размер</StyledTerm>
                    <StyledValue>{formatPxAsPt(style.fontSize)}</StyledValue>
                    <StyledTerm>Высота строки</StyledTerm>
                    <StyledValue>{formatPx(style.lineHeight)}</StyledValue>
                  </StyledMeta>
                  <StyledDescription>{description}</StyledDescription>
                  {colorTokens ? (
                    <StyledColors>
                      <StyledColorsTitle>Основные цвета</StyledColorsTitle>
                      <StyledColorList>
                        {colorTokens.map(({ cssVariable, tokenName }) => (
                          <StyledColor
                            key={tokenName}
                            $cssVariable={cssVariable}
                            $tokenName={tokenName}
                            $isWhite={tokenName === 'Text/Neutral/Static White/1'}
                          />
                        ))}
                      </StyledColorList>
                    </StyledColors>
                  ) : null}
                </StyledRow>
              );
            })}
          </StyledList>
        </StyledSection>
      ))}
    </StyledPage>
  );
};
