export const neutralStroke = {
  _1: {
    rest: {
      light: 'neutral.grey14',
      dark: 'neutral.grey78',
      lightNeutral: 'neutral.grey14',
      darkNeutral: 'neutral.grey78',
    },
    hover: {
      light: 'neutral.grey22',
      dark: 'neutral.grey70',
      lightNeutral: 'neutral.grey22',
      darkNeutral: 'neutral.grey70',
    },
    press: {
      light: 'neutral.grey30',
      dark: 'neutral.grey62',
      lightNeutral: 'neutral.grey30',
      darkNeutral: 'neutral.grey62',
    },
  },
  _2: {
    rest: {
      light: 'neutral.grey24',
      dark: 'neutral.grey70',
      lightNeutral: 'neutral.grey24',
      darkNeutral: 'neutral.grey70',
    },
    hover: {
      light: 'neutral.grey32',
      dark: 'neutral.grey62',
      lightNeutral: 'neutral.grey32',
      darkNeutral: 'neutral.grey62',
    },
    press: {
      light: 'neutral.grey40',
      dark: 'neutral.grey54',
      lightNeutral: 'neutral.grey40',
      darkNeutral: 'neutral.grey54',
    },
    focus: {
      light: 'primary.primary110',
      dark: 'primary.primary80',
      lightNeutral: 'neutral.grey82',
      darkNeutral: 'neutral.grey08',
    },
  },
  subtle: {
    rest: {
      light: 'neutral.grey10',
      dark: 'neutral.grey82',
      lightNeutral: 'neutral.grey10',
      darkNeutral: 'neutral.grey82',
    },
  },
  hard: {
    rest: {
      light: 'neutral.grey56',
      dark: 'neutral.grey40',
      lightNeutral: 'neutral.grey56',
      darkNeutral: 'neutral.grey40',
    },
  },
  hardest: {
    rest: {
      light: 'neutral.grey88',
      dark: 'neutral.grey10',
      lightNeutral: 'neutral.grey88',
      darkNeutral: 'neutral.grey10',
    },
  },
  staticWhite: {
    _1: {
      light: 'neutral.white',
      dark: 'neutral.white',
      lightNeutral: 'neutral.white',
      darkNeutral: 'neutral.white',
    },
    _2: {
      light: 'opacityWhite.56',
      dark: 'opacityWhite.56',
      lightNeutral: 'opacityWhite.56',
      darkNeutral: 'opacityWhite.56',
    },
    _3: {
      light: 'opacityWhite.36',
      dark: 'opacityWhite.36',
      lightNeutral: 'opacityWhite.36',
      darkNeutral: 'opacityWhite.36',
    },
    _4: {
      light: 'opacityWhite.24',
      dark: 'opacityWhite.24',
      lightNeutral: 'opacityWhite.24',
      darkNeutral: 'opacityWhite.24',
    },
  },
} as const;

export type NeutralStroke = typeof neutralStroke;
