import { purpleBase } from './base';
import { purpleStroke } from './stroke';
import { purpleText } from './text';

export const purple = {
  base: purpleBase,
  text: purpleText,
  stroke: purpleStroke,
} as const;

export type Purple = typeof purple;
