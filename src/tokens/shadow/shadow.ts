export const shadowColorKeys = {
  outlineM: 'outlineM',
  mainM: 'mainM',
  outlineL: 'outlineL',
  mainL: 'mainL',
} as const;

export const shadow = {
  shadow02: [
    { x: '0px', y: '0px', blur: '2px', color: shadowColorKeys.outlineM },
    { x: '0px', y: '1px', blur: '2px', color: shadowColorKeys.mainM },
  ],
  shadow04: [
    { x: '0px', y: '0px', blur: '2px', color: shadowColorKeys.outlineM },
    { x: '0px', y: '2px', blur: '4px', color: shadowColorKeys.mainM },
  ],
  shadow08: [
    { x: '0px', y: '0px', blur: '2px', color: shadowColorKeys.outlineM },
    { x: '0px', y: '4px', blur: '8px', color: shadowColorKeys.mainM },
  ],
  shadow12: [
    { x: '0px', y: '0px', blur: '2px', color: shadowColorKeys.outlineM },
    { x: '0px', y: '6px', blur: '12px', color: shadowColorKeys.mainM },
  ],
  shadow16: [
    { x: '0px', y: '0px', blur: '2px', color: shadowColorKeys.outlineM },
    { x: '0px', y: '8px', blur: '16px', color: shadowColorKeys.mainM },
  ],
  shadow28: [
    { x: '0px', y: '0px', blur: '8px', color: shadowColorKeys.outlineL },
    { x: '0px', y: '14px', blur: '28px', color: shadowColorKeys.mainL },
  ],
} as const;

export type ShadowColorKeys = typeof shadowColorKeys;
export type Shadow = typeof shadow;
