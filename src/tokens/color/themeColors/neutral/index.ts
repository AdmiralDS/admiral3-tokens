import { neutralBase } from './base';
import { neutralStroke } from './stroke';
import { neutralText } from './text';

export const neutral = {
  base: neutralBase,
  text: neutralText,
  stroke: neutralStroke,
} as const;

export type Neutral = typeof neutral;
