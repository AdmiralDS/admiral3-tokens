import { styled } from 'styled-components';

import { globalColors, typography } from '@admiral-ds/admiral3-tokens';

export type Palette = Record<string, string>;

export type PaletteBlock = {
  title?: string;
  colors: Palette;
  baseColor?: string;
  fullWidth?: boolean;
  labelPrefix?: string;
  sectionBackgroundColor?: string;
  sectionColor?: string;
  swatchBackgroundColor?: string;
  titleMarginBottom?: number;
};

export type GlobalColorsPaletteTemplateProps = {
  title: string;
  palettes: PaletteBlock[];
  showPageTitle?: boolean;
  swatchSize?: number;
};

const paletteGap = 64;
const swatchLabelGap = 16;

const StyledPage = styled.section<{ $hasFullWidthLastBlock?: boolean }>`
  box-sizing: border-box;
  min-height: 100vh;
  padding: ${({ $hasFullWidthLastBlock }) => `16px 26px ${$hasFullWidthLastBlock ? 0 : 48}px`};
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};
`;

const StyledPageTitle = styled.h1`
  margin: 0 0 52px;
  ${typography['Header/H5']}
`;

const StyledPaletteBlock = styled.section<{
  $fullWidth?: boolean;
  $isFirst?: boolean;
  $showPageTitle?: boolean;
  $sectionBackgroundColor?: string;
  $sectionColor?: string;
}>`
  margin: ${({ $fullWidth, $isFirst, $showPageTitle }) => {
    if (!$fullWidth) return `${$isFirst ? 0 : 72}px 0 0`;
    return `${$isFirst && !$showPageTitle ? -16 : $isFirst ? 0 : 72}px -26px 0`;
  }};
  padding: ${({ $fullWidth }) => ($fullWidth ? '16px 26px 48px' : undefined)};
  color: ${({ $sectionColor }) => $sectionColor};
  background: ${({ $sectionBackgroundColor }) => $sectionBackgroundColor};
`;

const StyledPaletteTitle = styled.h2<{ $marginBottom?: number }>`
  margin: ${({ $marginBottom }) => `0 0 ${$marginBottom || 24}px`};
  ${typography['Header/H6']}
`;

const StyledPaletteList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${paletteGap}px 0;
`;

const StyledPaletteItem = styled.div<{ $swatchSize: number }>`
  flex: 0 0 ${({ $swatchSize }) => $swatchSize}px;
  min-width: ${({ $swatchSize }) => $swatchSize}px;
`;

const StyledSwatch = styled.div<{ $swatchSize: number; $backgroundColor?: string }>`
  width: ${({ $swatchSize }) => $swatchSize}px;
  height: ${({ $swatchSize }) => $swatchSize}px;
  background: ${({ $backgroundColor }) => $backgroundColor};
`;

const StyledSwatchColor = styled.div<{ $color: string; $hasBorder?: boolean }>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background: ${({ $color }) => $color};
  border: ${({ $hasBorder, theme }) =>
    $hasBorder ? `1px solid ${theme.color.stroke.neutral.stroke1.rest}` : undefined};
`;

const StyledTokenName = styled.div`
  margin-top: ${swatchLabelGap}px;
  ${typography['Body/Body 1 Short']}
`;

const StyledTokenValue = styled.div<{ $isInverted?: boolean }>`
  margin-top: 8px;
  color: ${({ $isInverted, theme }) => ($isInverted ? 'currentColor' : theme.color.text.neutral.text2.rest)};
  opacity: ${({ $isInverted }) => ($isInverted ? 0.64 : 1)};
  ${typography['Body/Body 1 Short']}
`;

const formatTokenName = (name: string) => {
  if (/^\d+$/.test(name)) return name;

  return name.replace(/([a-zA-Z]+)(\d+)/, '$1-$2').replace(/^[a-z]/, (letter) => letter.toUpperCase());
};

const formatOpacityValue = (value: string, baseColor: string) => {
  const alpha = Number(value.match(/rgba\(\d+,\s\d+,\s\d+,\s(.+)\)/)?.[1] || 0);

  return `${baseColor} — ${Math.round(alpha * 100)}%`;
};

const getPaletteEntries = (colors: Palette) => {
  const entries = Object.entries(colors);
  const hasOnlyNumericKeys = entries.every(([name]) => /^\d+$/.test(name));

  return hasOnlyNumericKeys
    ? entries.toSorted(([firstName], [secondName]) => Number(firstName) - Number(secondName))
    : entries;
};

export const GlobalColorsPaletteTemplate = ({
  title,
  palettes,
  showPageTitle = true,
  swatchSize = 100,
}: GlobalColorsPaletteTemplateProps) => {
  const hasFullWidthLastBlock = palettes.at(-1)?.fullWidth;

  return (
    <StyledPage $hasFullWidthLastBlock={hasFullWidthLastBlock}>
      {showPageTitle ? <StyledPageTitle>{title}</StyledPageTitle> : null}

      {palettes.map((paletteBlock, paletteIndex) => (
        <StyledPaletteBlock
          key={paletteBlock.title || paletteIndex}
          $fullWidth={paletteBlock.fullWidth}
          $isFirst={paletteIndex === 0}
          $sectionBackgroundColor={paletteBlock.sectionBackgroundColor}
          $sectionColor={paletteBlock.sectionColor}
          $showPageTitle={showPageTitle}
        >
          {paletteBlock.title ? (
            <StyledPaletteTitle $marginBottom={paletteBlock.titleMarginBottom}>{paletteBlock.title}</StyledPaletteTitle>
          ) : null}

          <StyledPaletteList>
            {getPaletteEntries(paletteBlock.colors).map(([name, value]) => (
              <StyledPaletteItem key={name} $swatchSize={swatchSize}>
                <StyledSwatch $backgroundColor={paletteBlock.swatchBackgroundColor} $swatchSize={swatchSize}>
                  <StyledSwatchColor $color={value} $hasBorder={value.toUpperCase() === globalColors.neutral.white} />
                </StyledSwatch>
                <StyledTokenName>
                  {paletteBlock.labelPrefix ? `${paletteBlock.labelPrefix}-${name}` : formatTokenName(name)}
                </StyledTokenName>
                <StyledTokenValue $isInverted={Boolean(paletteBlock.sectionColor)}>
                  {paletteBlock.baseColor ? formatOpacityValue(value, paletteBlock.baseColor) : value}
                </StyledTokenValue>
              </StyledPaletteItem>
            ))}
          </StyledPaletteList>
        </StyledPaletteBlock>
      ))}
    </StyledPage>
  );
};
