import { magentaBase } from './base';
import { magentaStroke } from './stroke';
import { magentaText } from './text';

export const magenta = {
  base: magentaBase,
  text: magentaText,
  stroke: magentaStroke,
} as const;

export type Magenta = typeof magenta;
