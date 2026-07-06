import { errorBase } from './base';
import { errorStroke } from './stroke';
import { errorText } from './text';

export const error = {
  base: errorBase,
  text: errorText,
  stroke: errorStroke,
} as const;

export type Error = typeof error;
