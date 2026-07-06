export const successStroke = {
  _1: {
    rest: {
      light: 'success.success80',
      dark: 'success.success60',
    },
    hover: {
      light: 'success.success90',
      dark: 'success.success50',
    },
    press: {
      light: 'success.success100',
      dark: 'success.success40',
    },
  },
  _2: {
    rest: {
      light: 'success.success60',
      dark: 'success.success90',
    },
  },
} as const;

export type SuccessStroke = typeof successStroke;
