export const errorBase = {
  _1: {
    rest: {
      light: 'error.error110',
      dark: 'error.error100',
    },
    hover: {
      light: 'error.error120',
      dark: 'error.error90',
    },
    press: {
      light: 'error.error140',
      dark: 'error.error80',
    },
  },
  _2: {
    rest: {
      light: 'error.error30',
      dark: 'error.error160',
    },
  },
  _3: {
    rest: {
      light: 'error.error10',
      dark: 'error.error170',
    },
    hover: {
      light: 'error.error20',
      dark: 'error.error160',
    },
    press: {
      light: 'error.error30',
      dark: 'error.error150',
    },
  },
} as const;

export type ErrorBase = typeof errorBase;
