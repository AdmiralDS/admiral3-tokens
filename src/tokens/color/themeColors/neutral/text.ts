export const neutralText = {
  _1: {
    rest: {
      light: 'opacityBlack.88',
      dark: 'opacityWhite.88',
      lightNeutral: 'opacityBlack.88',
      darkNeutral: 'opacityWhite.88',
    },
    hover: {
      light: 'primary.primary120',
      dark: 'primary.primary90',
      lightNeutral: 'opacityBlack.72',
      darkNeutral: 'opacityWhite.72',
    },
    press: {
      light: 'primary.primary140',
      dark: 'primary.primary80',
      lightNeutral: 'opacityBlack.56',
      darkNeutral: 'opacityWhite.56',
    },
  },
  _2: {
    rest: {
      light: 'opacityBlack.56',
      dark: 'opacityWhite.56',
      lightNeutral: 'opacityBlack.56',
      darkNeutral: 'opacityWhite.56',
    },
    hover: {
      light: 'primary.primary120',
      dark: 'primary.primary90',
      lightNeutral: 'opacityBlack.48',
      darkNeutral: 'opacityWhite.48',
    },
    press: {
      light: 'primary.primary140',
      dark: 'primary.primary80',
      lightNeutral: 'opacityBlack.36',
      darkNeutral: 'opacityWhite.36',
    },
  },
  _3: {
    rest: {
      light: 'opacityBlack.40',
      dark: 'opacityWhite.36',
      lightNeutral: 'opacityBlack.40',
      darkNeutral: 'opacityWhite.36',
    },
  },
  disable: {
    rest: {
      light: 'opacityBlack.26',
      dark: 'opacityWhite.24',
      lightNeutral: 'opacityBlack.26',
      darkNeutral: 'opacityWhite.24',
    },
  },
  staticWhite: {
    _1: {
      light: 'neutral.white',
      dark: 'neutral.white',
      lightNeutral: 'neutral.white',
      darkNeutral: 'opacityBlack.88',
    },
    _2: {
      light: 'opacityWhite.56',
      dark: 'opacityWhite.56',
      lightNeutral: 'opacityWhite.56',
      darkNeutral: 'opacityBlack.56',
    },
    _3: {
      light: 'opacityWhite.36',
      dark: 'opacityWhite.36',
      lightNeutral: 'opacityWhite.36',
      darkNeutral: 'opacityBlack.36',
    },
    disable: {
      light: 'opacityWhite.24',
      dark: 'opacityWhite.24',
      lightNeutral: 'opacityWhite.24',
      darkNeutral: 'opacityBlack.20',
    },
  },
  staticBlack: {
    _1: {
      light: 'opacityBlack.88',
      dark: 'opacityBlack.88',
      lightNeutral: 'opacityBlack.88',
      darkNeutral: 'opacityBlack.88',
    },
    _2: {
      light: 'opacityBlack.56',
      dark: 'opacityBlack.56',
      lightNeutral: 'opacityBlack.56',
      darkNeutral: 'opacityBlack.56',
    },
    _3: {
      light: 'opacityBlack.40',
      dark: 'opacityBlack.40',
      lightNeutral: 'opacityBlack.40',
      darkNeutral: 'opacityBlack.40',
    },
    disable: {
      light: 'opacityBlack.26',
      dark: 'opacityBlack.26',
      lightNeutral: 'opacityBlack.26',
      darkNeutral: 'opacityBlack.26',
    },
  },
  inverted: {
    rest: {
      light: 'opacityWhite.88',
      dark: 'opacityBlack.88',
      lightNeutral: 'opacityWhite.88',
      darkNeutral: 'opacityBlack.88',
    },
    hover: {
      light: 'opacityWhite.56',
      dark: 'opacityBlack.56',
      lightNeutral: 'opacityWhite.56',
      darkNeutral: 'opacityBlack.56',
    },
    press: {
      light: 'opacityWhite.36',
      dark: 'opacityBlack.36',
      lightNeutral: 'opacityWhite.36',
      darkNeutral: 'opacityBlack.36',
    },
    disable: {
      light: 'opacityWhite.26',
      dark: 'opacityBlack.26',
      lightNeutral: 'opacityWhite.26',
      darkNeutral: 'opacityBlack.26',
    },
  },
} as const;

export type NeutralText = typeof neutralText;
