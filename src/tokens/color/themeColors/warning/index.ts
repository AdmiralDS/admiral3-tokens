import { warningBase } from './base';
import { warningStroke } from './stroke';
import { warningText } from './text';

export const warning = {
  base: warningBase,
  text: warningText,
  stroke: warningStroke,
} as const;

export type Warning = typeof warning;
