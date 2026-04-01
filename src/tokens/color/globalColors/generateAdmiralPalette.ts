const paletteSteps = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170] as const;

const lightnessStops: Record<PaletteStep, number> = {
  10: 0.958,
  20: 0.932,
  30: 0.907,
  40: 0.874,
  50: 0.825,
  60: 0.773,
  70: 0.71,
  80: 0.669,
  90: 0.637,
  100: 0.595,
  110: 0.554,
  120: 0.476,
  130: 0.446,
  140: 0.393,
  150: 0.343,
  160: 0.305,
  170: 0.275,
};

const chromaRatios: Record<PaletteStep, number> = {
  10: 0.12,
  20: 0.19,
  30: 0.26,
  40: 0.36,
  50: 0.5,
  60: 0.65,
  70: 0.81,
  80: 0.87,
  90: 0.93,
  100: 0.98,
  110: 1,
  120: 0.89,
  130: 0.84,
  140: 0.74,
  150: 0.59,
  160: 0.5,
  170: 0.34,
};

export type PaletteStep = (typeof paletteSteps)[number];
export type GeneratedAdmiralPalette<Prefix extends string = string> = {
  readonly [Step in PaletteStep as `${Prefix}${Step}`]: string;
};
export type PrimaryCssVariables = {
  readonly [Key in keyof GeneratedAdmiralPalette<'primary'> as `--admiral-color-global-primary-${Key & string}`]: string;
};
export type GlobalColorPaletteOverrides = Record<string, Record<string, string>>;
export type GlobalColorCssVariables = Record<`--admiral-color-global-${string}-${string}`, string>;

type Rgb = {
  r: number;
  g: number;
  b: number;
};

type Oklch = {
  l: number;
  c: number;
  h: number;
};

const normalizeHex = (hex: string) => {
  const value = hex.trim();
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(value);

  if (!match) {
    throw new Error(`Expected a hex color, received "${hex}".`);
  }

  const normalized = match[1].length === 3 ? match[1].replace(/./g, (char) => char + char) : match[1];

  return `#${normalized.toUpperCase()}`;
};

const hexToRgb = (hex: string): Rgb => {
  const normalized = normalizeHex(hex);
  const value = Number.parseInt(normalized.slice(1), 16);

  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
};

const toLinearSrgb = (value: number) => {
  const normalized = value / 255;

  return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
};

const toEncodedSrgb = (value: number) => {
  const encoded = value <= 0.0031308 ? value * 12.92 : 1.055 * value ** (1 / 2.4) - 0.055;

  return Math.round(Math.min(Math.max(encoded, 0), 1) * 255);
};

const rgbToOklch = ({ r, g, b }: Rgb): Oklch => {
  const linearR = toLinearSrgb(r);
  const linearG = toLinearSrgb(g);
  const linearB = toLinearSrgb(b);

  const l = Math.cbrt(0.4122214708 * linearR + 0.5363325363 * linearG + 0.0514459929 * linearB);
  const m = Math.cbrt(0.2119034982 * linearR + 0.6806995451 * linearG + 0.1073969566 * linearB);
  const s = Math.cbrt(0.0883024619 * linearR + 0.2817188376 * linearG + 0.6299787005 * linearB);

  const labL = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
  const labA = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
  const labB = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  const hue = Math.atan2(labB, labA);

  return {
    l: labL,
    c: Math.hypot(labA, labB),
    h: Number.isNaN(hue) ? 0 : hue,
  };
};

const oklchToLinearRgb = ({ l, c, h }: Oklch) => {
  const labA = Math.cos(h) * c;
  const labB = Math.sin(h) * c;

  const lPrime = l + 0.3963377774 * labA + 0.2158037573 * labB;
  const mPrime = l - 0.1055613458 * labA - 0.0638541728 * labB;
  const sPrime = l - 0.0894841775 * labA - 1.291485548 * labB;

  const l3 = lPrime ** 3;
  const m3 = mPrime ** 3;
  const s3 = sPrime ** 3;

  return {
    r: 4.0767416621 * l3 - 3.3077115913 * m3 + 0.2309699292 * s3,
    g: -1.2684380046 * l3 + 2.6097574011 * m3 - 0.3413193965 * s3,
    b: -0.0041960863 * l3 - 0.7034186147 * m3 + 1.707614701 * s3,
  };
};

const isInSrgb = ({ r, g, b }: ReturnType<typeof oklchToLinearRgb>) =>
  r >= 0 && r <= 1 && g >= 0 && g <= 1 && b >= 0 && b <= 1;

const oklchToHex = (color: Oklch) => {
  let chroma = color.c;
  let rgb = oklchToLinearRgb(color);

  while (!isInSrgb(rgb) && chroma > 0.0001) {
    chroma *= 0.96;
    rgb = oklchToLinearRgb({ ...color, c: chroma });
  }

  return `#${[toEncodedSrgb(rgb.r), toEncodedSrgb(rgb.g), toEncodedSrgb(rgb.b)]
    .map((part) => part.toString(16).padStart(2, '0').toUpperCase())
    .join('')}`;
};

export const generateAdmiralPalette = <Prefix extends string>(
  baseColor: string,
  prefix: Prefix,
): GeneratedAdmiralPalette<Prefix> => {
  const base = rgbToOklch(hexToRgb(baseColor));

  return Object.fromEntries(
    paletteSteps.map((step) => [
      `${prefix}${step}`,
      oklchToHex({
        l: lightnessStops[step],
        c: base.c * chromaRatios[step],
        h: base.h,
      }),
    ]),
  ) as GeneratedAdmiralPalette<Prefix>;
};

export const createGlobalColorCssVariables = (palettes: GlobalColorPaletteOverrides): GlobalColorCssVariables =>
  Object.fromEntries(
    Object.entries(palettes).flatMap(([group, palette]) =>
      Object.entries(palette).map(([name, color]) => [`--admiral-color-global-${group}-${name}`, color]),
    ),
  ) as GlobalColorCssVariables;

export const createGlobalColorCss = (palettes: GlobalColorPaletteOverrides, selector = ':root') => {
  const variables = createGlobalColorCssVariables(palettes);
  const declarations = Object.entries(variables)
    .map(([name, color]) => `  ${name}: ${color};`)
    .join('\n');

  return `${selector} {\n${declarations}\n}`;
};

export const createPrimaryCssVariables = (palette: GeneratedAdmiralPalette<'primary'>): PrimaryCssVariables =>
  createGlobalColorCssVariables({ primary: palette }) as PrimaryCssVariables;
