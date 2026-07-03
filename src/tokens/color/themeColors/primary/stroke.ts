export const primaryStroke = {
  _1: {
    rest: {
      light: 'primary.primary110',
      dark: 'primary.primary80',
      lightNeutral: 'neutral.grey82',
      darkNeutral: 'neutral.grey08',
    },
    hover: {
      light: 'primary.primary120',
      dark: 'primary.primary70',
      lightNeutral: 'neutral.grey78',
      darkNeutral: 'neutral.grey16',
    },
    press: {
      light: 'primary.primary140',
      dark: 'primary.primary60',
      lightNeutral: 'neutral.grey72',
      darkNeutral: 'neutral.grey24',
    },
  },
  _2: {
    rest: {
      light: 'primary.primary90',
      dark: 'primary.primary100',
      lightNeutral: 'neutral.grey14',
      darkNeutral: 'neutral.grey78',
    },
  },
  _3: {
    rest: {
      light: 'primary.primary60',
      dark: 'primary.primary120',
      lightNeutral: 'neutral.grey10',
      darkNeutral: 'neutral.grey82',
    },
  },
  inverted: {
    rest: {
      light: 'primary.primary80',
      dark: 'primary.primary110',
      lightNeutral: 'neutral.grey08',
      darkNeutral: 'neutral.grey82',
    },
    hover: {
      light: 'primary.primary70',
      dark: 'primary.primary120',
      lightNeutral: 'neutral.grey16',
      darkNeutral: 'neutral.grey78',
    },
    press: {
      light: 'primary.primary60',
      dark: 'primary.primary140',
      lightNeutral: 'neutral.grey24',
      darkNeutral: 'neutral.grey72',
    },
  },
} as const;

export type PrimaryStroke = typeof primaryStroke;
