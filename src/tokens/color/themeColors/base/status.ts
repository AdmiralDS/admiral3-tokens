export const statusBase = {
  error: {
    light: {
      base1: {
        rest: 'error.error110',
        hover: 'error.error120',
        press: 'error.error140',
      },
      base2: {
        rest: 'error.error30',
      },
      base3: {
        rest: 'error.error10',
        hover: 'error.error20',
        press: 'error.error30',
      },
    },
    dark: {
      base1: {
        rest: 'error.error100',
        hover: 'error.error90',
        press: 'error.error80',
      },
      base2: {
        rest: 'error.error160',
      },
      base3: {
        rest: 'error.error170',
        hover: 'error.error160',
        press: 'error.error150',
      },
    },
  },
  success: {
    light: {
      base1: {
        rest: 'success.success80',
        hover: 'success.success90',
        press: 'success.success100',
      },
      base2: {
        rest: 'success.success30',
      },
      base3: {
        rest: 'success.success10',
        hover: 'success.success20',
        press: 'success.success30',
      },
    },
    dark: {
      base1: {
        rest: 'success.success80',
        hover: 'success.success70',
        press: 'success.success60',
      },
      base2: {
        rest: 'success.success130',
      },
      base3: {
        rest: 'success.success140',
        hover: 'success.success130',
        press: 'success.success120',
      },
    },
  },
  warning: {
    light: {
      base1: {
        rest: 'warning.warning70',
        hover: 'warning.warning80',
        press: 'warning.warning90',
      },
      base2: {
        rest: 'warning.warning30',
      },
      base3: {
        rest: 'warning.warning10',
        hover: 'warning.warning20',
        press: 'warning.warning30',
      },
    },
    dark: {
      base1: {
        rest: 'warning.warning70',
        hover: 'warning.warning60',
        press: 'warning.warning50',
      },
      base2: {
        rest: 'warning.warning120',
      },
      base3: {
        rest: 'warning.warning130',
        hover: 'warning.warning120',
        press: 'warning.warning110',
      },
    },
  },
  attention: {
    light: {
      base1: {
        rest: 'attention.attention50',
        hover: 'attention.attention60',
        press: 'attention.attention70',
      },
      base2: {
        rest: 'attention.attention30',
      },
      base3: {
        rest: 'attention.attention10',
        hover: 'attention.attention20',
        press: 'attention.attention30',
      },
    },
    dark: {
      base1: {
        rest: 'attention.attention50',
        hover: 'attention.attention40',
        press: 'attention.attention30',
      },
      base2: {
        rest: 'attention.attention120',
      },
      base3: {
        rest: 'attention.attention130',
        hover: 'attention.attention120',
        press: 'attention.attention110',
      },
    },
  },
} as const;

export type StatusBase = typeof statusBase;
