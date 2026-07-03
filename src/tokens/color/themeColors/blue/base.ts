export const blueBase = {
  _1: {
    rest: {
      light: 'blue.blue110',
      dark: 'blue.blue100',
    },
    hover: {
      light: 'blue.blue120',
      dark: 'blue.blue90',
    },
    press: {
      light: 'blue.blue140',
      dark: 'blue.blue80',
    },
  },
  _2: {
    rest: {
      light: 'blue.blue30',
      dark: 'blue.blue160',
    },
  },
  _3: {
    rest: {
      light: 'blue.blue10',
      dark: 'blue.blue170',
    },
    hover: {
      light: 'blue.blue20',
      dark: 'blue.blue160',
    },
    press: {
      light: 'blue.blue30',
      dark: 'blue.blue150',
    },
  },
} as const;

export type BlueBase = typeof blueBase;
