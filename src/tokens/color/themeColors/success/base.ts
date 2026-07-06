export const successBase = {
  _1: {
    rest: {
      light: 'success.success80',
      dark: 'success.success80',
    },
    hover: {
      light: 'success.success90',
      dark: 'success.success70',
    },
    press: {
      light: 'success.success100',
      dark: 'success.success60',
    },
  },
  _2: {
    rest: {
      light: 'success.success30',
      dark: 'success.success130',
    },
  },
  _3: {
    rest: {
      light: 'success.success10',
      dark: 'success.success140',
    },
    hover: {
      light: 'success.success20',
      dark: 'success.success130',
    },
    press: {
      light: 'success.success30',
      dark: 'success.success120',
    },
  },
} as const;

export type SuccessBase = typeof successBase;
