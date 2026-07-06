export const magentaBase = {
  _1: {
    rest: {
      light: 'magenta.magenta110',
      dark: 'magenta.magenta110',
    },
    hover: {
      light: 'magenta.magenta120',
      dark: 'magenta.magenta100',
    },
    press: {
      light: 'magenta.magenta140',
      dark: 'magenta.magenta90',
    },
  },
  _2: {
    rest: {
      light: 'magenta.magenta30',
      dark: 'magenta.magenta160',
    },
  },
  _3: {
    rest: {
      light: 'magenta.magenta10',
      dark: 'magenta.magenta170',
    },
    hover: {
      light: 'magenta.magenta20',
      dark: 'magenta.magenta160',
    },
    press: {
      light: 'magenta.magenta30',
      dark: 'magenta.magenta150',
    },
  },
} as const;

export type MagentaBase = typeof magentaBase;
