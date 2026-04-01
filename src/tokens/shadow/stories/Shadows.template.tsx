import { styled } from 'styled-components';

import { darkTheme, lightTheme, shadow, typography, type Shadow } from '@admiral-ds/admiral3-tokens';

type ShadowTokenName = keyof Shadow;
type ShadowLayer = Shadow[ShadowTokenName][number];

type ShadowPreviewBlock = {
  themeName: 'light' | 'dark';
};

export type ShadowsTemplateProps = {
  blocks: ShadowPreviewBlock[];
};

const themeByName = {
  light: lightTheme,
  dark: darkTheme,
} as const;

const StyledPage = styled.section<{ $themeName: ShadowPreviewBlock['themeName'] }>`
  box-sizing: border-box;
  min-height: 100vh;
  background: ${({ $themeName }) => themeByName[$themeName].color.base.neutral.base1.rest};
`;

const StyledBlock = styled.section<{ $themeName: ShadowPreviewBlock['themeName'] }>`
  box-sizing: border-box;
  padding: 26px 22px 48px;
  color: ${({ $themeName }) => themeByName[$themeName].color.text.neutral.text1.rest};
  background: ${({ $themeName }) => themeByName[$themeName].color.base.neutral.base1.rest};
`;

const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
  align-items: flex-start;
`;

const StyledCard = styled.article<{ $themeName: ShadowPreviewBlock['themeName']; $shadow: string }>`
  box-sizing: border-box;
  flex: 0 0 200px;
  height: fit-content;
  padding: 20px;
  background: ${({ $themeName }) => themeByName[$themeName].color.base.neutral.base1.rest};
  border: 1px solid ${({ $themeName }) => themeByName[$themeName].color.stroke.neutral.stroke1.rest};
  border-radius: ${({ $themeName }) => themeByName[$themeName].radius.byBase['4'].medium};
  box-shadow: ${({ $shadow }) => $shadow};
`;

const StyledTitle = styled.h2<{ $themeName: ShadowPreviewBlock['themeName'] }>`
  margin: 0 0 18px;
  color: ${({ $themeName }) => themeByName[$themeName].color.text.neutral.text1.rest};
  ${typography['Subtitle/Subtitle 2']}
`;

const StyledLayer = styled.div`
  margin-top: 16px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledDivider = styled.div<{ $themeName: ShadowPreviewBlock['themeName'] }>`
  height: 1px;
  margin: 0 0 16px;
  background: ${({ $themeName }) => themeByName[$themeName].color.stroke.neutral.subtle.rest};
`;

const StyledRow = styled.div<{ $themeName: ShadowPreviewBlock['themeName'] }>`
  display: grid;
  grid-template-columns: 48px max-content;
  gap: 0;
  color: ${({ $themeName }) => themeByName[$themeName].color.text.neutral.text2.rest};
  ${typography['Caption/Caption 1']}
`;

const StyledValue = styled.span<{ $themeName: ShadowPreviewBlock['themeName'] }>`
  color: ${({ $themeName }) => themeByName[$themeName].color.text.neutral.text1.rest};
  white-space: nowrap;
`;

const formatTokenTitle = (name: string) => name.replace(/^shadow(\d+)$/, 'Shadow $1');

const formatTokenValue = (value: string) => value.replace('px', '');

const formatShadowColor = (color: ShadowLayer['color']) =>
  `Shadows/${color.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (letter) => letter.toUpperCase())}`;

export const ShadowsTemplate = ({ blocks }: ShadowsTemplateProps) => (
  <StyledPage $themeName={blocks[0]?.themeName ?? 'light'}>
    {blocks.map(({ themeName }) => {
      const theme = themeByName[themeName];

      return (
        <StyledBlock key={themeName} $themeName={themeName}>
          <StyledList>
            {Object.entries(shadow).map(([name, layers]) => (
              <StyledCard key={name} $shadow={theme.shadow[name as ShadowTokenName]} $themeName={themeName}>
                <StyledTitle $themeName={themeName}>{formatTokenTitle(name)}</StyledTitle>
                {layers.map((layer, index) => (
                  <StyledLayer key={`${name}-${layer.color}`}>
                    {index > 0 ? <StyledDivider $themeName={themeName} /> : null}
                    <StyledRow $themeName={themeName}>
                      <span>X</span>
                      <StyledValue $themeName={themeName}>{formatTokenValue(layer.x)}</StyledValue>
                    </StyledRow>
                    <StyledRow $themeName={themeName}>
                      <span>Y</span>
                      <StyledValue $themeName={themeName}>{formatTokenValue(layer.y)}</StyledValue>
                    </StyledRow>
                    <StyledRow $themeName={themeName}>
                      <span>Blur</span>
                      <StyledValue $themeName={themeName}>{formatTokenValue(layer.blur)}</StyledValue>
                    </StyledRow>
                    <StyledRow $themeName={themeName}>
                      <span>Color</span>
                      <StyledValue $themeName={themeName}>{formatShadowColor(layer.color)}</StyledValue>
                    </StyledRow>
                  </StyledLayer>
                ))}
              </StyledCard>
            ))}
          </StyledList>
        </StyledBlock>
      );
    })}
  </StyledPage>
);
