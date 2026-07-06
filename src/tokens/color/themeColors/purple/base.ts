export const purpleBase = {
  _1: {
    rest: {
      light: 'purple.purple110',
      dark: 'purple.purple110',
    },
    hover: {
      light: 'purple.purple120',
      dark: 'purple.purple100',
    },
    press: {
      light: 'purple.purple140',
      dark: 'purple.purple90',
    },
  },
  _2: {
    rest: {
      light: 'purple.purple30',
      dark: 'purple.purple160',
    },
  },
  _3: {
    rest: {
      light: 'purple.purple10',
      dark: 'purple.purple170',
    },
    hover: {
      light: 'purple.purple20',
      dark: 'purple.purple160',
    },
    press: {
      light: 'purple.purple30',
      dark: 'purple.purple150',
    },
  },
} as const;

export type PurpleBase = typeof purpleBase;
