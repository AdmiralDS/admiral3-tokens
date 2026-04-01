export const statusText = {
  error: {
    light: {
      text1: {
        rest: 'error.error110',
        hover: 'error.error120',
        press: 'error.error140',
      },
    },
    dark: {
      text1: {
        rest: 'error.error80',
        hover: 'error.error70',
        press: 'error.error60',
      },
    },
  },
  success: {
    light: {
      text1: {
        rest: 'success.success90',
        hover: 'success.success100',
        press: 'success.success110',
      },
    },
    dark: {
      text1: {
        rest: 'success.success60',
        hover: 'success.success50',
        press: 'success.success40',
      },
    },
  },
  warning: {
    light: {
      text1: {
        rest: 'warning.warning70',
      },
    },
    dark: {
      text1: {
        rest: 'warning.warning80',
      },
    },
  },
  attention: {
    light: {
      text1: {
        rest: 'attention.attention80',
      },
    },
    dark: {
      text1: {
        rest: 'attention.attention50',
      },
    },
  },
} as const;

export type StatusText = typeof statusText;
