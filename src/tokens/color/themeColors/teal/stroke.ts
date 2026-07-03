export const tealStroke = {
  _1: {
    rest: {
      light: 'teal.teal110',
      dark: 'teal.teal80',
    },
    hover: {
      light: 'teal.teal120',
      dark: 'teal.teal70',
    },
    press: {
      light: 'teal.teal140',
      dark: 'teal.teal60',
    },
  },
  _2: {
    rest: {
      light: 'teal.teal90',
      dark: 'teal.teal100',
    },
  },
} as const;

export type TealStroke = typeof tealStroke;
