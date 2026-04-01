export const primaryStroke = {
  light: {
    stroke1: {
      rest: 'primary.primary110',
      hover: 'primary.primary120',
      press: 'primary.primary140',
    },
    stroke2: {
      rest: 'primary.primary90',
    },
    stroke3: {
      rest: 'primary.primary60',
    },
    inverted: {
      rest: 'primary.primary80',
      hover: 'primary.primary70',
      press: 'primary.primary60',
    },
  },
  dark: {
    stroke1: {
      rest: 'primary.primary80',
      hover: 'primary.primary70',
      press: 'primary.primary60',
    },
    stroke2: {
      rest: 'primary.primary100',
    },
    stroke3: {
      rest: 'primary.primary120',
    },
    inverted: {
      rest: 'primary.primary110',
      hover: 'primary.primary120',
      press: 'primary.primary140',
    },
  },
  lightNeutral: {
    stroke1: {
      rest: 'neutral.grey82',
      hover: 'neutral.grey78',
      press: 'neutral.grey72',
    },
    stroke2: {
      rest: 'neutral.grey14',
    },
    stroke3: {
      rest: 'neutral.grey10',
    },
    inverted: {
      rest: 'neutral.grey08',
      hover: 'neutral.grey16',
      press: 'neutral.grey24',
    },
  },
  darkNeutral: {
    stroke1: {
      rest: 'neutral.grey08',
      hover: 'neutral.grey16',
      press: 'neutral.grey24',
    },
    stroke2: {
      rest: 'neutral.grey78',
    },
    stroke3: {
      rest: 'neutral.grey82',
    },
    inverted: {
      rest: 'neutral.grey82',
      hover: 'neutral.grey78',
      press: 'neutral.grey72',
    },
  },
} as const;

export type PrimaryStroke = typeof primaryStroke;
