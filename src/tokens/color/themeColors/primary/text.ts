export const primaryText = {
  _1: {
    rest: {
      light: 'primary.primary110',
      dark: 'primary.primary80',
      lightNeutral: 'opacityBlack.88',
      darkNeutral: 'opacityWhite.88',
    },
    hover: {
      light: 'primary.primary120',
      dark: 'primary.primary70',
      lightNeutral: 'opacityBlack.72',
      darkNeutral: 'opacityWhite.72',
    },
    press: {
      light: 'primary.primary140',
      dark: 'primary.primary60',
      lightNeutral: 'opacityBlack.56',
      darkNeutral: 'opacityWhite.56',
    },
  },
  link: {
    rest: {
      light: 'primary.primary110',
      dark: 'primary.primary80',
      lightNeutral: 'opacityBlack.88',
      darkNeutral: 'opacityWhite.88',
    },
    hover: {
      light: 'primary.primary120',
      dark: 'primary.primary70',
      lightNeutral: 'opacityBlack.72',
      darkNeutral: 'opacityWhite.72',
    },
    press: {
      light: 'primary.primary140',
      dark: 'primary.primary60',
      lightNeutral: 'opacityBlack.56',
      darkNeutral: 'opacityWhite.56',
    },
  },
  inverted: {
    rest: {
      light: 'primary.primary80',
      dark: 'primary.primary110',
      lightNeutral: 'opacityWhite.88',
      darkNeutral: 'opacityBlack.88',
    },
    hover: {
      light: 'primary.primary70',
      dark: 'primary.primary120',
      lightNeutral: 'opacityWhite.72',
      darkNeutral: 'opacityBlack.72',
    },
    press: {
      light: 'primary.primary60',
      dark: 'primary.primary140',
      lightNeutral: 'opacityWhite.56',
      darkNeutral: 'opacityBlack.56',
    },
  },
} as const;

export type PrimaryText = typeof primaryText;
