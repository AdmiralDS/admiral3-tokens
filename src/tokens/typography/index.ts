import { typographyPrimitives } from './primitives';
import { textStyles } from './textStyles';

export { typographyPrimitives } from './primitives';
export type { FontFamily, FontSize, FontWeight, LineHeight, TypographyPrimitives } from './primitives';
export { textStyles } from './textStyles';
export type { TextStyles, TypographyGroup, TypographyStyleName } from './textStyles';

// Keep aliases explicit here: this small map is easier to read and review than name-generation helpers.
export const typographyTextStyles = {
  'Header/HL1': textStyles.header.hl1,
  'Header/HL2': textStyles.header.hl2,
  'Header/HL3': textStyles.header.hl3,
  'Header/H1': textStyles.header.h1,
  'Header/H2': textStyles.header.h2,
  'Header/H3': textStyles.header.h3,
  'Header/H4': textStyles.header.h4,
  'Header/H5': textStyles.header.h5,
  'Header/H6': textStyles.header.h6,
  'Subtitle/Subtitle 1': textStyles.subtitle.subtitle1,
  'Subtitle/Subtitle 2': textStyles.subtitle.subtitle2,
  'Subtitle/Subtitle 3': textStyles.subtitle.subtitle3,
  'Subtitle/Subtitle 4': textStyles.subtitle.subtitle4,
  'Body/Body 1 Long': textStyles.body.body1Long,
  'Body/Body 1 Short': textStyles.body.body1Short,
  'Body/Body 2 Long': textStyles.body.body2Long,
  'Body/Body 2 Short': textStyles.body.body2Short,
  'Button/Button 1': textStyles.button.button1,
  'Button/Button 2': textStyles.button.button2,
  'Button/Button 3': textStyles.button.button3,
  'Caption/Caption 1': textStyles.caption.caption1,
  'Caption/Caption 2': textStyles.caption.caption2,
  'Monospace/Mono 1': textStyles.monospace.mono1,
  'Monospace/Mono 2': textStyles.monospace.mono2,
  'Monospace/Mono 3': textStyles.monospace.mono3,
} as const;

export const typography = {
  ...typographyTextStyles,
  primitives: typographyPrimitives,
  textStyles,
} as const;

export type Typography = typeof typography;
export type TypographyTextStyleName = keyof typeof typographyTextStyles;
