export const extraStroke = {
  blue: {
    light: {
      stroke1: {
        rest: 'blue.blue110',
        hover: 'blue.blue120',
        press: 'blue.blue140',
      },
      stroke2: {
        rest: 'blue.blue90',
      },
    },
    dark: {
      stroke1: {
        rest: 'blue.blue80',
        hover: 'blue.blue70',
        press: 'blue.blue60',
      },
      stroke2: {
        rest: 'blue.blue100',
      },
    },
  },
  teal: {
    light: {
      stroke1: {
        rest: 'teal.teal110',
        hover: 'teal.teal120',
        press: 'teal.teal140',
      },
      stroke2: {
        rest: 'teal.teal90',
      },
    },
    dark: {
      stroke1: {
        rest: 'teal.teal80',
        hover: 'teal.teal70',
        press: 'teal.teal60',
      },
      stroke2: {
        rest: 'teal.teal100',
      },
    },
  },
  magenta: {
    light: {
      stroke1: {
        rest: 'magenta.magenta110',
        hover: 'magenta.magenta120',
        press: 'magenta.magenta140',
      },
      stroke2: {
        rest: 'magenta.magenta90',
      },
    },
    dark: {
      stroke1: {
        rest: 'magenta.magenta80',
        hover: 'magenta.magenta70',
        press: 'magenta.magenta60',
      },
      stroke2: {
        rest: 'magenta.magenta100',
      },
    },
  },
  purple: {
    light: {
      stroke1: {
        rest: 'purple.purple110',
        hover: 'purple.purple120',
        press: 'purple.purple140',
      },
      stroke2: {
        rest: 'purple.purple90',
      },
    },
    dark: {
      stroke1: {
        rest: 'purple.purple80',
        hover: 'purple.purple70',
        press: 'purple.purple60',
      },
      stroke2: {
        rest: 'purple.purple100',
      },
    },
  },
} as const;

export type ExtraStroke = typeof extraStroke;
