export const tealBase = {
  _1: {
    rest: {
      light: 'teal.teal110',
      dark: 'teal.teal100',
    },
    hover: {
      light: 'teal.teal120',
      dark: 'teal.teal90',
    },
    press: {
      light: 'teal.teal140',
      dark: 'teal.teal80',
    },
  },
  _2: {
    rest: {
      light: 'teal.teal30',
      dark: 'teal.teal160',
    },
  },
  _3: {
    rest: {
      light: 'teal.teal10',
      dark: 'teal.teal170',
    },
    hover: {
      light: 'teal.teal20',
      dark: 'teal.teal160',
    },
    press: {
      light: 'teal.teal30',
      dark: 'teal.teal150',
    },
  },
} as const;

export type TealBase = typeof tealBase;
