export const typographyPrimitives = {
  fontFamily: {
    primary: "'VTB Group UI', Arial, sans-serif",
    monospace: "'Source Code Pro', 'Courier New', monospace",
  },
  fontWeight: {
    book: 400,
    medium: 500,
    semibold: 550,
  },
  fontSize: {
    '10': '10px',
    '12': '12px',
    '14': '14px',
    '16': '16px',
    '18': '18px',
    '20': '20px',
    '24': '24px',
    '28': '28px',
    '34': '34px',
    '40': '40px',
    '48': '48px',
    '56': '56px',
    '72': '72px',
  },
  lineHeight: {
    '12': '12px',
    '16': '16px',
    '20': '20px',
    '24': '24px',
    '28': '28px',
    '32': '32px',
    '36': '36px',
    '40': '40px',
    '48': '48px',
    '56': '56px',
    '64': '64px',
    '80': '80px',
  },
} as const;

export type TypographyPrimitives = typeof typographyPrimitives;
export type FontFamily = keyof typeof typographyPrimitives.fontFamily;
export type FontWeight = keyof typeof typographyPrimitives.fontWeight;
export type FontSize = keyof typeof typographyPrimitives.fontSize;
export type LineHeight = keyof typeof typographyPrimitives.lineHeight;
