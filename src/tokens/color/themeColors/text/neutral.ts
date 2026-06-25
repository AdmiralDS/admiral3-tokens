export const neutralText = {
  light: {
    text1: {
      rest: 'opacityBlack.88',
      hover: 'primary.primary120',
      press: 'primary.primary140',
    },
    text2: {
      rest: 'opacityBlack.56',
      hover: 'primary.primary120',
      press: 'primary.primary140',
    },
    text3: {
      rest: 'opacityBlack.40',
    },
    inverted: {
      rest: 'opacityWhite.88',
      hover: 'opacityWhite.56',
      press: 'opacityWhite.36',
      disable: 'opacityWhite.26',
    },
    disable: {
      rest: 'opacityBlack.26',
    },
    staticWhite: {
      '1': 'neutral.white',
      '2': 'opacityWhite.56',
      '3': 'opacityWhite.36',
      disable: 'opacityWhite.24',
    },
    staticBlack: {
      '1': 'opacityBlack.88',
      '2': 'opacityBlack.56',
      '3': 'opacityBlack.40',
      disable: 'opacityBlack.26',
    },
  },
  dark: {
    text1: {
      rest: 'opacityWhite.88',
      hover: 'primary.primary90',
      press: 'primary.primary80',
    },
    text2: {
      rest: 'opacityWhite.56',
      hover: 'primary.primary90',
      press: 'primary.primary80',
    },
    text3: {
      rest: 'opacityWhite.36',
    },
    inverted: {
      rest: 'opacityBlack.88',
      hover: 'opacityBlack.56',
      press: 'opacityBlack.36',
      disable: 'opacityBlack.26',
    },
    disable: {
      rest: 'opacityWhite.24',
    },
    staticWhite: {
      '1': 'neutral.white',
      '2': 'opacityWhite.56',
      '3': 'opacityWhite.36',
      disable: 'opacityWhite.24',
    },
    staticBlack: {
      '1': 'opacityBlack.88',
      '2': 'opacityBlack.56',
      '3': 'opacityBlack.40',
      disable: 'opacityBlack.26',
    },
  },
  lightNeutral: {
    text1: {
      rest: 'opacityBlack.88',
      hover: 'opacityBlack.72',
      press: 'opacityBlack.56',
    },
    text2: {
      rest: 'opacityBlack.56',
      hover: 'opacityBlack.48',
      press: 'opacityBlack.36',
    },
    text3: {
      rest: 'opacityBlack.40',
    },
    inverted: {
      rest: 'opacityWhite.88',
      hover: 'opacityWhite.56',
      press: 'opacityWhite.36',
      disable: 'opacityWhite.26',
    },
    disable: {
      rest: 'opacityBlack.26',
    },
    staticWhite: {
      '1': 'neutral.white',
      '2': 'opacityWhite.56',
      '3': 'opacityWhite.36',
      disable: 'opacityWhite.24',
    },
    staticBlack: {
      '1': 'opacityBlack.88',
      '2': 'opacityBlack.56',
      '3': 'opacityBlack.40',
      disable: 'opacityBlack.26',
    },
  },
  darkNeutral: {
    text1: {
      rest: 'opacityWhite.88',
      hover: 'opacityWhite.72',
      press: 'opacityWhite.56',
    },
    text2: {
      rest: 'opacityWhite.56',
      hover: 'opacityWhite.48',
      press: 'opacityWhite.36',
    },
    text3: {
      rest: 'opacityWhite.36',
    },
    inverted: {
      rest: 'opacityBlack.88',
      hover: 'opacityBlack.56',
      press: 'opacityBlack.36',
      disable: 'opacityBlack.26',
    },
    disable: {
      rest: 'opacityWhite.24',
    },
    staticWhite: {
      '1': 'opacityBlack.88',
      '2': 'opacityBlack.56',
      '3': 'opacityBlack.36',
      disable: 'opacityBlack.20',
    },
    staticBlack: {
      '1': 'opacityBlack.88',
      '2': 'opacityBlack.56',
      '3': 'opacityBlack.40',
      disable: 'opacityBlack.26',
    },
  },
} as const;

export type NeutralText = typeof neutralText;
