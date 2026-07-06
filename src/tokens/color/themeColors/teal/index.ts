import { tealBase } from './base';
import { tealStroke } from './stroke';
import { tealText } from './text';

export const teal = {
  base: tealBase,
  text: tealText,
  stroke: tealStroke,
} as const;

export type Teal = typeof teal;
