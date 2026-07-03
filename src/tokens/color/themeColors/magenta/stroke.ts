export const magentaStroke = {
  _1: {
    rest: {
      light: 'magenta.magenta110',
      dark: 'magenta.magenta80',
    },
    hover: {
      light: 'magenta.magenta120',
      dark: 'magenta.magenta70',
    },
    press: {
      light: 'magenta.magenta140',
      dark: 'magenta.magenta60',
    },
  },
  _2: {
    rest: {
      light: 'magenta.magenta90',
      dark: 'magenta.magenta100',
    },
  },
} as const;

export type MagentaStroke = typeof magentaStroke;
