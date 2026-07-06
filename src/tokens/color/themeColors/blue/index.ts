import { blueBase } from './base';
import { blueStroke } from './stroke';
import { blueText } from './text';

export const blue = {
  base: blueBase,
  text: blueText,
  stroke: blueStroke,
} as const;

export type Blue = typeof blue;
