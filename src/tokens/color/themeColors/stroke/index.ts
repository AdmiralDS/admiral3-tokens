import { extraStroke } from './extra';
import { neutralStroke } from './neutral';
import { primaryStroke } from './primary';
import { statusStroke } from './status';

export { neutralStroke } from './neutral';
export type { NeutralStroke } from './neutral';
export { primaryStroke } from './primary';
export type { PrimaryStroke } from './primary';
export { statusStroke } from './status';
export type { StatusStroke } from './status';
export { extraStroke } from './extra';
export type { ExtraStroke } from './extra';

export const stroke = {
  neutral: neutralStroke,
  primary: primaryStroke,
  status: statusStroke,
  extra: extraStroke,
} as const;

export type Stroke = typeof stroke;
