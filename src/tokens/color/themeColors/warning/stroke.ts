export const warningStroke = {
  _1: {
    rest: {
      light: 'warning.warning70',
      dark: 'warning.warning60',
    },
  },
  _2: {
    rest: {
      light: 'warning.warning60',
      dark: 'warning.warning80',
    },
  },
} as const;

export type WarningStroke = typeof warningStroke;
