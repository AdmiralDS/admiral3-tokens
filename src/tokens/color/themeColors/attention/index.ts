import { attentionBase } from './base';
import { attentionStroke } from './stroke';
import { attentionText } from './text';

export const attention = {
  base: attentionBase,
  text: attentionText,
  stroke: attentionStroke,
} as const;

export type Attention = typeof attention;
