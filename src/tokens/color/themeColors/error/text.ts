export const errorText = {
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
} as const;

export type ErrorText = typeof errorText;
