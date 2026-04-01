import { extraText } from './extra';
import { neutralText } from './neutral';
import { primaryText } from './primary';
import { statusText } from './status';

export { neutralText } from './neutral';
export type { NeutralText } from './neutral';
export { primaryText } from './primary';
export type { PrimaryText } from './primary';
export { statusText } from './status';
export type { StatusText } from './status';
export { extraText } from './extra';
export type { ExtraText } from './extra';

export const text = {
  neutral: neutralText,
  primary: primaryText,
  status: statusText,
  extra: extraText,
} as const;

export type Text = typeof text;
