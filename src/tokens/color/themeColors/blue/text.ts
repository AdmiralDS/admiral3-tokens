export const blueText = {
  _1: {
    rest: {
      light: 'blue.blue110',
      dark: 'blue.blue80',
    },
    hover: {
      light: 'blue.blue120',
      dark: 'blue.blue70',
    },
    press: {
      light: 'blue.blue140',
      dark: 'blue.blue60',
    },
  },
} as const;

export type BlueText = typeof blueText;
