export const successText = {
  _1: {
    rest: {
      light: 'success.success90',
      dark: 'success.success60',
    },
    hover: {
      light: 'success.success100',
      dark: 'success.success50',
    },
    press: {
      light: 'success.success110',
      dark: 'success.success40',
    },
  },
} as const;

export type SuccessText = typeof successText;
