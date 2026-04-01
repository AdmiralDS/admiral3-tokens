export const primaryBase = {
  light: {
    base1: {
      rest: 'primary.primary110',
      hover: 'primary.primary120',
      press: 'primary.primary140',
      disable: 'primary.primary50',
    },
    base2: {
      rest: 'primary.primary30',
    },
    base3: {
      rest: 'primary.primary10',
      hover: 'primary.primary20',
      press: 'primary.primary30',
    },
    inverted: {
      rest: 'primary.primary100',
      hover: 'primary.primary90',
      press: 'primary.primary80',
    },
  },
  dark: {
    base1: {
      rest: 'primary.primary100',
      hover: 'primary.primary90',
      press: 'primary.primary80',
      disable: 'primary.primary150',
    },
    base2: {
      rest: 'primary.primary160',
    },
    base3: {
      rest: 'primary.primary170',
      hover: 'primary.primary160',
      press: 'primary.primary150',
    },
    inverted: {
      rest: 'primary.primary110',
      hover: 'primary.primary120',
      press: 'primary.primary140',
    },
  },
  lightNeutral: {
    base1: {
      rest: 'neutral.grey82',
      hover: 'neutral.grey78',
      press: 'neutral.grey72',
      disable: 'neutral.grey24',
    },
    base2: {
      rest: 'neutral.grey12',
    },
    base3: {
      rest: 'opacityBlack.04',
      hover: 'opacityBlack.10',
      press: 'opacityBlack.14',
    },
    inverted: {
      rest: 'neutral.grey08',
      hover: 'neutral.grey14',
      press: 'neutral.grey20',
    },
  },
  darkNeutral: {
    base1: {
      rest: 'neutral.grey08',
      hover: 'neutral.grey16',
      press: 'neutral.grey24',
      disable: 'neutral.grey80',
    },
    base2: {
      rest: 'neutral.grey82',
    },
    base3: {
      rest: 'opacityWhite.04',
      hover: 'opacityWhite.10',
      press: 'opacityWhite.14',
    },
    inverted: {
      rest: 'neutral.grey82',
      hover: 'neutral.grey78',
      press: 'neutral.grey72',
    },
  },
} as const;

export type PrimaryBase = typeof primaryBase;
