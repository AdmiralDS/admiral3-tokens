export const attentionBase = {
  _1: {
    rest: {
      light: 'attention.attention50',
      dark: 'attention.attention50',
    },
    hover: {
      light: 'attention.attention60',
      dark: 'attention.attention40',
    },
    press: {
      light: 'attention.attention70',
      dark: 'attention.attention30',
    },
  },
  _2: {
    rest: {
      light: 'attention.attention30',
      dark: 'attention.attention120',
    },
  },
  _3: {
    rest: {
      light: 'attention.attention10',
      dark: 'attention.attention130',
    },
    hover: {
      light: 'attention.attention20',
      dark: 'attention.attention120',
    },
    press: {
      light: 'attention.attention30',
      dark: 'attention.attention110',
    },
  },
} as const;

export type AttentionBase = typeof attentionBase;
