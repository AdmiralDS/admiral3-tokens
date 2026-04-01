import {
  attention,
  blue,
  error,
  magenta,
  neutral,
  opacityBlack,
  opacityWhite,
  primary,
  purple,
  success,
  teal,
  warning,
} from '../index';
import type { GlobalColorsPaletteTemplateProps, Palette } from './GlobalColorsPalette.template';

const palette = (colors: Palette) => [{ colors }];

export const neutralPaletteArgs = {
  title: 'Global Colors / Neutral',
  palettes: palette(neutral),
  swatchSize: 100,
} satisfies GlobalColorsPaletteTemplateProps;

export const primaryPaletteArgs = {
  title: 'Global Colors / Primary',
  palettes: palette(primary),
  swatchSize: 100,
} satisfies GlobalColorsPaletteTemplateProps;

export const statusPaletteArgs = {
  title: 'Global Colors / Status',
  palettes: [
    { title: 'Error', colors: error },
    { title: 'Success', colors: success },
    { title: 'Warning', colors: warning },
    { title: 'Attention', colors: attention },
  ],
  swatchSize: 100,
} satisfies GlobalColorsPaletteTemplateProps;

export const extraPaletteArgs = {
  title: 'Global Colors / Extra',
  palettes: [
    { title: 'Blue', colors: blue },
    { title: 'Teal', colors: teal },
    { title: 'Magenta', colors: magenta },
    { title: 'Purple', colors: purple },
  ],
  swatchSize: 100,
} satisfies GlobalColorsPaletteTemplateProps;

export const opacityPaletteArgs = {
  title: 'Global Colors / Opacity',
  showPageTitle: false,
  palettes: [
    {
      title: 'Global Colors / Opacity / Black',
      colors: opacityBlack,
      baseColor: neutral.black,
      fullWidth: true,
      labelPrefix: 'Black',
      swatchBackgroundColor: neutral.white,
      titleMarginBottom: 52,
    },
    {
      title: 'Global Colors / Opacity / White',
      colors: opacityWhite,
      baseColor: neutral.white,
      fullWidth: true,
      labelPrefix: 'White',
      sectionBackgroundColor: neutral.grey88,
      sectionColor: neutral.white,
      swatchBackgroundColor: neutral.grey88,
      titleMarginBottom: 52,
    },
  ],
  swatchSize: 100,
} satisfies GlobalColorsPaletteTemplateProps;
