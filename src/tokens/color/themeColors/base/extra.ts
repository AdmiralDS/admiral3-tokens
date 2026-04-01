export const extraBase = {
  blue: {
    light: {
      base1: {
        rest: 'blue.blue110',
        hover: 'blue.blue120',
        press: 'blue.blue140',
      },
      base2: {
        rest: 'blue.blue30',
      },
      base3: {
        rest: 'blue.blue10',
        hover: 'blue.blue20',
        press: 'blue.blue30',
      },
    },
    dark: {
      base1: {
        rest: 'blue.blue100',
        hover: 'blue.blue90',
        press: 'blue.blue80',
      },
      base2: {
        rest: 'blue.blue160',
      },
      base3: {
        rest: 'blue.blue170',
        hover: 'blue.blue160',
        press: 'blue.blue150',
      },
    },
  },
  teal: {
    light: {
      base1: {
        rest: 'teal.teal110',
        hover: 'teal.teal120',
        press: 'teal.teal140',
      },
      base2: {
        rest: 'teal.teal30',
      },
      base3: {
        rest: 'teal.teal10',
        hover: 'teal.teal20',
        press: 'teal.teal30',
      },
    },
    dark: {
      base1: {
        rest: 'teal.teal100',
        hover: 'teal.teal90',
        press: 'teal.teal80',
      },
      base2: {
        rest: 'teal.teal160',
      },
      base3: {
        rest: 'teal.teal170',
        hover: 'teal.teal160',
        press: 'teal.teal150',
      },
    },
  },
  magenta: {
    light: {
      base1: {
        rest: 'magenta.magenta110',
        hover: 'magenta.magenta120',
        press: 'magenta.magenta140',
      },
      base2: {
        rest: 'magenta.magenta30',
      },
      base3: {
        rest: 'magenta.magenta10',
        hover: 'magenta.magenta20',
        press: 'magenta.magenta30',
      },
    },
    dark: {
      base1: {
        rest: 'magenta.magenta110',
        hover: 'magenta.magenta100',
        press: 'magenta.magenta90',
      },
      base2: {
        rest: 'magenta.magenta160',
      },
      base3: {
        rest: 'magenta.magenta170',
        hover: 'magenta.magenta160',
        press: 'magenta.magenta150',
      },
    },
  },
  purple: {
    light: {
      base1: {
        rest: 'purple.purple110',
        hover: 'purple.purple120',
        press: 'purple.purple140',
      },
      base2: {
        rest: 'purple.purple30',
      },
      base3: {
        rest: 'purple.purple10',
        hover: 'purple.purple20',
        press: 'purple.purple30',
      },
    },
    dark: {
      base1: {
        rest: 'purple.purple110',
        hover: 'purple.purple100',
        press: 'purple.purple90',
      },
      base2: {
        rest: 'purple.purple160',
      },
      base3: {
        rest: 'purple.purple170',
        hover: 'purple.purple160',
        press: 'purple.purple150',
      },
    },
  },
} as const;

export type ExtraBase = typeof extraBase;
