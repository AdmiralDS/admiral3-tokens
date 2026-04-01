export const primaryText = {
  light: {
    text1: {
      rest: 'primary.primary110',
      hover: 'primary.primary120',
      press: 'primary.primary140',
    },
    link: {
      rest: 'primary.primary110',
      hover: 'primary.primary120',
      press: 'primary.primary140',
    },
    inverted: {
      rest: 'primary.primary80',
      hover: 'primary.primary70',
      press: 'primary.primary60',
    },
  },
  dark: {
    text1: {
      rest: 'primary.primary80',
      hover: 'primary.primary70',
      press: 'primary.primary60',
    },
    link: {
      rest: 'primary.primary80',
      hover: 'primary.primary70',
      press: 'primary.primary60',
    },
    inverted: {
      rest: 'primary.primary110',
      hover: 'primary.primary120',
      press: 'primary.primary140',
    },
  },
  lightNeutral: {
    text1: {
      rest: 'opacityBlack.88',
      hover: 'opacityBlack.72',
      press: 'opacityBlack.56',
    },
    link: {
      rest: 'opacityBlack.88',
      hover: 'opacityBlack.72',
      press: 'opacityBlack.56',
    },
    inverted: {
      rest: 'opacityWhite.88',
      hover: 'opacityWhite.72',
      press: 'opacityWhite.56',
    },
  },
  darkNeutral: {
    text1: {
      rest: 'opacityWhite.88',
      hover: 'opacityWhite.72',
      press: 'opacityWhite.56',
    },
    link: {
      rest: 'opacityWhite.88',
      hover: 'opacityWhite.72',
      press: 'opacityWhite.56',
    },
    inverted: {
      rest: 'opacityBlack.88',
      hover: 'opacityBlack.72',
      press: 'opacityBlack.56',
    },
  },
} as const;

export type PrimaryText = typeof primaryText;
