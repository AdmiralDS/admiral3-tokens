import { primaryBase } from './base';
import { primaryStroke } from './stroke';
import { primaryText } from './text';

export const primary = {
  base: primaryBase,
  text: primaryText,
  stroke: primaryStroke,
} as const;

export type Primary = typeof primary;
