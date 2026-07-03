export const errorStroke = {
  _1: {
    rest: {
      light: 'error.error110',
      dark: 'error.error80',
    },
    hover: {
      light: 'error.error120',
      dark: 'error.error70',
    },
    press: {
      light: 'error.error140',
      dark: 'error.error60',
    },
  },
  _2: {
    rest: {
      light: 'error.error90',
      dark: 'error.error110',
    },
  },
} as const;

export type ErrorStroke = typeof errorStroke;
