export const warningBase = {
  _1: {
    rest: {
      light: 'warning.warning70',
      dark: 'warning.warning70',
    },
    hover: {
      light: 'warning.warning80',
      dark: 'warning.warning60',
    },
    press: {
      light: 'warning.warning90',
      dark: 'warning.warning50',
    },
  },
  _2: {
    rest: {
      light: 'warning.warning30',
      dark: 'warning.warning120',
    },
  },
  _3: {
    rest: {
      light: 'warning.warning10',
      dark: 'warning.warning130',
    },
    hover: {
      light: 'warning.warning20',
      dark: 'warning.warning120',
    },
    press: {
      light: 'warning.warning30',
      dark: 'warning.warning110',
    },
  },
} as const;

export type WarningBase = typeof warningBase;
