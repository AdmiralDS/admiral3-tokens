import type { BuiltTheme } from '@admiral-ds/admiral3-tokens';

declare module 'styled-components' {
  // Module augmentation for styled-components intentionally uses an empty
  // interface body so DefaultTheme inherits the package theme shape.
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends BuiltTheme {}
}
