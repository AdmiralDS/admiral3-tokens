export const neutralStroke = {
  light: {
    stroke1: {
      rest: 'neutral.grey14',
      hover: 'neutral.grey22',
      press: 'neutral.grey30',
    },
    stroke2: {
      rest: 'neutral.grey24',
      hover: 'neutral.grey32',
      press: 'neutral.grey40',
      focus: 'primary.primary110',
    },
    subtle: {
      rest: 'neutral.grey10',
    },
    hard: {
      rest: 'neutral.grey56',
    },
    hardest: {
      rest: 'neutral.grey88',
    },
    staticWhite: {
      '1': 'neutral.white',
      '2': 'opacityWhite.56',
      '3': 'opacityWhite.36',
      '4': 'opacityWhite.24',
    },
  },
  dark: {
    stroke1: {
      rest: 'neutral.grey78',
      hover: 'neutral.grey70',
      press: 'neutral.grey62',
    },
    stroke2: {
      rest: 'neutral.grey70',
      hover: 'neutral.grey62',
      press: 'neutral.grey54',
      focus: 'primary.primary80',
    },
    subtle: {
      rest: 'neutral.grey82',
    },
    hard: {
      rest: 'neutral.grey40',
    },
    hardest: {
      rest: 'neutral.grey10',
    },
    staticWhite: {
      '1': 'neutral.white',
      '2': 'opacityWhite.56',
      '3': 'opacityWhite.36',
      '4': 'opacityWhite.24',
    },
  },
  lightNeutral: {
    stroke1: {
      rest: 'neutral.grey14',
      hover: 'neutral.grey22',
      press: 'neutral.grey30',
    },
    stroke2: {
      rest: 'neutral.grey24',
      hover: 'neutral.grey32',
      press: 'neutral.grey40',
      focus: 'neutral.grey82',
    },
    subtle: {
      rest: 'neutral.grey10',
    },
    hard: {
      rest: 'neutral.grey56',
    },
    hardest: {
      rest: 'neutral.grey88',
    },
    staticWhite: {
      '1': 'neutral.white',
      '2': 'opacityWhite.56',
      '3': 'opacityWhite.36',
      '4': 'opacityWhite.24',
    },
  },
  darkNeutral: {
    stroke1: {
      rest: 'neutral.grey78',
      hover: 'neutral.grey70',
      press: 'neutral.grey62',
    },
    stroke2: {
      rest: 'neutral.grey70',
      hover: 'neutral.grey62',
      press: 'neutral.grey54',
      focus: 'neutral.grey08',
    },
    subtle: {
      rest: 'neutral.grey82',
    },
    hard: {
      rest: 'neutral.grey40',
    },
    hardest: {
      rest: 'neutral.grey10',
    },
    staticWhite: {
      '1': 'neutral.white',
      '2': 'opacityWhite.56',
      '3': 'opacityWhite.36',
      '4': 'opacityWhite.24',
    },
  },
} as const;

export type NeutralStroke = typeof neutralStroke;
