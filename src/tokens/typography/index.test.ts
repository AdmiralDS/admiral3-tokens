import { describe, expect, it } from 'vitest';

import { textStyles, typographyPrimitives, typographyTextStyles } from './index';

describe('typographyTextStyles', () => {
  it('exposes each source text style once', () => {
    const sourceStyles = Object.values(textStyles).flatMap((group) => Object.values(group));
    const aliasedStyles = Object.values(typographyTextStyles);

    expect(aliasedStyles).toHaveLength(sourceStyles.length);
    expect(new Set(aliasedStyles)).toEqual(new Set(sourceStyles));
  });

  it('keeps all monospace styles regular weight', () => {
    expect(typographyTextStyles['Monospace/Mono 1'].fontWeight).toBe(typographyPrimitives.fontWeight.book);
    expect(typographyTextStyles['Monospace/Mono 2'].fontWeight).toBe(typographyPrimitives.fontWeight.book);
    expect(typographyTextStyles['Monospace/Mono 3'].fontWeight).toBe(typographyPrimitives.fontWeight.book);
  });
});
