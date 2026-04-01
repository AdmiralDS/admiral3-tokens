export const extraText = {
  blue: {
    light: {
      text1: {
        rest: 'blue.blue110',
        hover: 'blue.blue120',
        press: 'blue.blue140',
      },
    },
    dark: {
      text1: {
        rest: 'blue.blue80',
        hover: 'blue.blue70',
        press: 'blue.blue60',
      },
    },
  },
  teal: {
    light: {
      text1: {
        rest: 'teal.teal110',
        hover: 'teal.teal120',
        press: 'teal.teal140',
      },
    },
    dark: {
      text1: {
        rest: 'teal.teal80',
        hover: 'teal.teal70',
        press: 'teal.teal60',
      },
    },
  },
  magenta: {
    light: {
      text1: {
        rest: 'magenta.magenta110',
        hover: 'magenta.magenta120',
        press: 'magenta.magenta140',
      },
    },
    dark: {
      text1: {
        rest: 'magenta.magenta80',
        hover: 'magenta.magenta70',
        press: 'magenta.magenta60',
      },
    },
  },
  purple: {
    light: {
      text1: {
        rest: 'purple.purple110',
        hover: 'purple.purple120',
        press: 'purple.purple140',
      },
    },
    dark: {
      text1: {
        rest: 'purple.purple80',
        hover: 'purple.purple70',
        press: 'purple.purple60',
      },
    },
  },
} as const;

export type ExtraText = typeof extraText;
