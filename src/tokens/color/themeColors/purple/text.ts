export const purpleText = {
  _1: {
    rest: {
      light: 'purple.purple110',
      dark: 'purple.purple80',
    },
    hover: {
      light: 'purple.purple120',
      dark: 'purple.purple70',
    },
    press: {
      light: 'purple.purple140',
      dark: 'purple.purple60',
    },
  },
} as const;

export type PurpleText = typeof purpleText;
