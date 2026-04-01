export const statusStroke = {
  error: {
    light: {
      stroke1: {
        rest: 'error.error110',
        hover: 'error.error120',
        press: 'error.error140',
      },
      stroke2: {
        rest: 'error.error90',
      },
    },
    dark: {
      stroke1: {
        rest: 'error.error80',
        hover: 'error.error70',
        press: 'error.error60',
      },
      stroke2: {
        rest: 'error.error110',
      },
    },
  },
  success: {
    light: {
      stroke1: {
        rest: 'success.success80',
        hover: 'success.success90',
        press: 'success.success100',
      },
      stroke2: {
        rest: 'success.success60',
      },
    },
    dark: {
      stroke1: {
        rest: 'success.success60',
        hover: 'success.success50',
        press: 'success.success40',
      },
      stroke2: {
        rest: 'success.success90',
      },
    },
  },
  warning: {
    light: {
      stroke1: {
        rest: 'warning.warning70',
      },
      stroke2: {
        rest: 'warning.warning60',
      },
    },
    dark: {
      stroke1: {
        rest: 'warning.warning60',
      },
      stroke2: {
        rest: 'warning.warning80',
      },
    },
  },
  attention: {
    light: {
      stroke1: {
        rest: 'attention.attention50',
      },
    },
    dark: {
      stroke1: {
        rest: 'attention.attention50',
      },
    },
  },
} as const;

export type StatusStroke = typeof statusStroke;
