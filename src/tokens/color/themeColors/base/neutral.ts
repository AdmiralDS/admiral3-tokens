export const neutralBase = {
  light: {
    base1: {
      rest: 'neutral.white',
      hover: 'neutral.grey06',
      press: 'neutral.grey10',
      focus: 'neutral.grey08',
    },
    base2: {
      rest: 'neutral.grey04',
      hover: 'neutral.grey10',
      press: 'neutral.grey14',
      focus: 'neutral.grey12',
    },
    base3: {
      rest: 'neutral.grey08',
      hover: 'neutral.grey14',
      press: 'neutral.grey18',
      focus: 'neutral.grey16',
    },
    base4: {
      rest: 'neutral.grey56',
      hover: 'neutral.grey62',
      press: 'neutral.grey66',
    },
    elevated: {
      rest: 'neutral.white',
      hover: 'opacityBlack.04',
      press: 'opacityBlack.10',
      focus: 'opacityBlack.08',
    },
    invisible: {
      rest: 'opacityBlack.00',
      hover: 'opacityBlack.04',
      press: 'opacityBlack.10',
      focus: 'opacityBlack.08',
    },
    invisibleStatic: {
      rest: 'opacityWhite.00',
      hover: 'opacityWhite.04',
      press: 'opacityWhite.10',
      focus: 'opacityWhite.08',
    },
    opacity: {
      rest: 'opacityBlack.04',
      hover: 'opacityBlack.10',
      press: 'opacityBlack.14',
      focus: 'opacityBlack.12',
    },
    opacitySubtle: {
      rest: 'opacityBlack.02',
      hover: 'opacityBlack.08',
      press: 'opacityBlack.12',
      focus: 'opacityBlack.10',
    },
    opacityStatic: {
      rest: 'opacityWhite.04',
      hover: 'opacityWhite.10',
      press: 'opacityWhite.14',
      focus: 'opacityWhite.12',
    },
    inverted: {
      rest: 'neutral.grey82',
      hover: 'neutral.grey76',
      press: 'neutral.grey70',
      disable: 'neutral.grey26',
    },
    darkStatic: {
      '1': 'neutral.grey88',
      '2': 'neutral.grey90',
      '3': 'neutral.grey82',
    },
    overlay: {
      rest: 'opacityBlack.56',
    },
    scrollbar: {
      rest: 'opacityBlack.20',
      hover: 'opacityBlack.24',
      press: 'opacityBlack.28',
    },
  },
  dark: {
    base1: {
      rest: 'neutral.grey88',
      hover: 'neutral.grey84',
      press: 'neutral.grey80',
      focus: 'neutral.grey82',
    },
    base2: {
      rest: 'neutral.grey90',
      hover: 'neutral.grey86',
      press: 'neutral.grey82',
      focus: 'neutral.grey84',
    },
    base3: {
      rest: 'neutral.grey82',
      hover: 'neutral.grey78',
      press: 'neutral.grey74',
      focus: 'neutral.grey76',
    },
    base4: {
      rest: 'neutral.grey60',
      hover: 'neutral.grey54',
      press: 'neutral.grey50',
    },
    elevated: {
      rest: 'neutral.grey86',
      hover: 'opacityWhite.04',
      press: 'opacityWhite.10',
      focus: 'opacityWhite.08',
    },
    invisible: {
      rest: 'opacityWhite.00',
      hover: 'opacityWhite.04',
      press: 'opacityWhite.10',
      focus: 'opacityWhite.08',
    },
    invisibleStatic: {
      rest: 'opacityWhite.00',
      hover: 'opacityWhite.04',
      press: 'opacityWhite.10',
      focus: 'opacityWhite.08',
    },
    opacity: {
      rest: 'opacityWhite.04',
      hover: 'opacityWhite.10',
      press: 'opacityWhite.14',
      focus: 'opacityWhite.12',
    },
    opacitySubtle: {
      rest: 'opacityWhite.02',
      hover: 'opacityWhite.08',
      press: 'opacityWhite.12',
      focus: 'opacityWhite.10',
    },
    opacityStatic: {
      rest: 'opacityWhite.04',
      hover: 'opacityWhite.10',
      press: 'opacityWhite.14',
      focus: 'opacityWhite.12',
    },
    inverted: {
      rest: 'neutral.grey08',
      hover: 'neutral.grey16',
      press: 'neutral.grey24',
      disable: 'neutral.grey80',
    },
    darkStatic: {
      '1': 'neutral.grey88',
      '2': 'neutral.grey90',
      '3': 'neutral.grey82',
    },
    overlay: {
      rest: 'opacityBlack.56',
    },
    scrollbar: {
      rest: 'opacityWhite.16',
      hover: 'opacityBlack.20',
      press: 'opacityBlack.24',
    },
  },
} as const;

export type NeutralBase = typeof neutralBase;
