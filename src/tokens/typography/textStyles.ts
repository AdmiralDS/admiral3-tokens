import { typographyPrimitives } from './primitives';

const { fontFamily, fontSize, fontWeight, lineHeight } = typographyPrimitives;

export const textStyles = {
  header: {
    hl1: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[72],
      lineHeight: lineHeight[80],
    },
    hl2: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[56],
      lineHeight: lineHeight[64],
    },
    hl3: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[48],
      lineHeight: lineHeight[56],
    },
    h1: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[40],
      lineHeight: lineHeight[48],
    },
    h2: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[34],
      lineHeight: lineHeight[40],
    },
    h3: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[28],
      lineHeight: lineHeight[36],
    },
    h4: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[24],
      lineHeight: lineHeight[32],
    },
    h5: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[20],
      lineHeight: lineHeight[28],
    },
    h6: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[18],
      lineHeight: lineHeight[24],
    },
  },
  subtitle: {
    subtitle1: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.book,
      fontSize: fontSize[18],
      lineHeight: lineHeight[24],
    },
    subtitle2: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[16],
      lineHeight: lineHeight[24],
    },
    subtitle3: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[14],
      lineHeight: lineHeight[20],
    },
    subtitle4: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.semibold,
      fontSize: fontSize[12],
      lineHeight: lineHeight[16],
    },
  },
  body: {
    body1Long: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.book,
      fontSize: fontSize[16],
      lineHeight: lineHeight[24],
    },
    body1Short: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.book,
      fontSize: fontSize[16],
      lineHeight: lineHeight[20],
    },
    body2Long: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.book,
      fontSize: fontSize[14],
      lineHeight: lineHeight[20],
    },
    body2Short: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.book,
      fontSize: fontSize[14],
      lineHeight: lineHeight[16],
    },
  },
  button: {
    button1: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.medium,
      fontSize: fontSize[16],
      lineHeight: lineHeight[24],
    },
    button2: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.medium,
      fontSize: fontSize[14],
      lineHeight: lineHeight[20],
    },
    button3: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.medium,
      fontSize: fontSize[12],
      lineHeight: lineHeight[16],
    },
  },
  caption: {
    caption1: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.book,
      fontSize: fontSize[12],
      lineHeight: lineHeight[16],
    },
    caption2: {
      fontFamily: fontFamily.primary,
      fontWeight: fontWeight.book,
      fontSize: fontSize[10],
      lineHeight: lineHeight[12],
    },
  },
  monospace: {
    mono1: {
      fontFamily: fontFamily.monospace,
      fontWeight: fontWeight.book,
      fontSize: fontSize[16],
      lineHeight: lineHeight[24],
    },
    mono2: {
      fontFamily: fontFamily.monospace,
      fontWeight: fontWeight.book,
      fontSize: fontSize[14],
      lineHeight: lineHeight[20],
    },
    mono3: {
      fontFamily: fontFamily.monospace,
      fontWeight: fontWeight.book,
      fontSize: fontSize[12],
      lineHeight: lineHeight[16],
    },
  },
} as const;

export type TextStyles = typeof textStyles;
export type TypographyGroup = keyof TextStyles;
export type TypographyStyleName<T extends TypographyGroup = TypographyGroup> = keyof TextStyles[T];
