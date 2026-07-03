export const magentaText = {
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
} as const;

export type MagentaText = typeof magentaText;
