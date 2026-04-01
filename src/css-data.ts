export { globalColors } from './tokens/color/globalColors';
export { radius } from './tokens/radius';
export { shadow } from './tokens/shadow';
export { textStyles, typographyPrimitives } from './tokens/typography';
import { buildThemeColorReferences, themeModes } from './tokens/themes/buildTheme';

export { themeModes } from './tokens/themes/buildTheme';

export const themes = Object.fromEntries(
  themeModes.map((mode) => [
    mode,
    {
      color: buildThemeColorReferences(mode),
    },
  ]),
) as {
  [K in (typeof themeModes)[number]]: {
    color: ReturnType<typeof buildThemeColorReferences>;
  };
};
