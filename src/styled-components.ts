import type {} from 'styled-components';
import type { BuiltTheme } from './tokens/themes';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends BuiltTheme {}
}
