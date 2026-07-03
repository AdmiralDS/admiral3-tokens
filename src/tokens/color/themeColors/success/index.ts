import { successBase } from './base';
import { successStroke } from './stroke';
import { successText } from './text';

export const success = {
  base: successBase,
  text: successText,
  stroke: successStroke,
} as const;

export type Success = typeof success;
