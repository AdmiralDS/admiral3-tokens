import { extraBase } from './extra';
import { neutralBase } from './neutral';
import { primaryBase } from './primary';
import { statusBase } from './status';

export { neutralBase } from './neutral';
export type { NeutralBase } from './neutral';
export { primaryBase } from './primary';
export type { PrimaryBase } from './primary';
export { statusBase } from './status';
export type { StatusBase } from './status';
export { extraBase } from './extra';
export type { ExtraBase } from './extra';

export const base = {
  neutral: neutralBase,
  primary: primaryBase,
  status: statusBase,
  extra: extraBase,
} as const;

export type Base = typeof base;
