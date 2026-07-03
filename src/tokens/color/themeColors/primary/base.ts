export const primaryBase = {
  _1: {
    rest: {
      light: 'primary.primary110',
      dark: 'primary.primary100',
      lightNeutral: 'neutral.grey82',
      darkNeutral: 'neutral.grey08',
    },
    hover: {
      light: 'primary.primary120',
      dark: 'primary.primary90',
      lightNeutral: 'neutral.grey78',
      darkNeutral: 'neutral.grey16',
    },
    press: {
      light: 'primary.primary140',
      dark: 'primary.primary80',
      lightNeutral: 'neutral.grey72',
      darkNeutral: 'neutral.grey24',
    },
    disable: {
      light: 'primary.primary50',
      dark: 'primary.primary150',
      lightNeutral: 'neutral.grey24',
      darkNeutral: 'neutral.grey80',
    },
  },
  _2: {
    rest: {
      light: 'primary.primary30',
      dark: 'primary.primary160',
      lightNeutral: 'neutral.grey12',
      darkNeutral: 'neutral.grey82',
    },
  },
  _3: {
    rest: {
      light: 'primary.primary10',
      dark: 'primary.primary170',
      lightNeutral: 'opacityBlack.04',
      darkNeutral: 'opacityWhite.04',
    },
    hover: {
      light: 'primary.primary20',
      dark: 'primary.primary160',
      lightNeutral: 'opacityBlack.10',
      darkNeutral: 'opacityWhite.10',
    },
    press: {
      light: 'primary.primary30',
      dark: 'primary.primary150',
      lightNeutral: 'opacityBlack.14',
      darkNeutral: 'opacityWhite.14',
    },
  },
  inverted: {
    rest: {
      light: 'primary.primary100',
      dark: 'primary.primary110',
      lightNeutral: 'neutral.grey08',
      darkNeutral: 'neutral.grey82',
    },
    hover: {
      light: 'primary.primary90',
      dark: 'primary.primary120',
      lightNeutral: 'neutral.grey14',
      darkNeutral: 'neutral.grey78',
    },
    press: {
      light: 'primary.primary80',
      dark: 'primary.primary140',
      lightNeutral: 'neutral.grey20',
      darkNeutral: 'neutral.grey72',
    },
  },
} as const;

export type PrimaryBase = typeof primaryBase;
