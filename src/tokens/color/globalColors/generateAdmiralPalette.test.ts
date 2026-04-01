import { describe, expect, it } from 'vitest';

import {
  createGlobalColorCss,
  createGlobalColorCssVariables,
  createPrimaryCssVariables,
  generateAdmiralPalette,
} from './generateAdmiralPalette';

describe('generateAdmiralPalette', () => {
  it('generates the Admiral 17-step palette shape from one base color', () => {
    const palette = generateAdmiralPalette('#8B3DFF', 'primary');

    expect(Object.keys(palette)).toEqual([
      'primary10',
      'primary20',
      'primary30',
      'primary40',
      'primary50',
      'primary60',
      'primary70',
      'primary80',
      'primary90',
      'primary100',
      'primary110',
      'primary120',
      'primary130',
      'primary140',
      'primary150',
      'primary160',
      'primary170',
    ]);
    expect(palette.primary110).toMatch(/^#[0-9A-F]{6}$/);
    expect(palette.primary10).not.toBe(palette.primary170);
  });

  it('normalizes short hex colors', () => {
    expect(generateAdmiralPalette('#06F', 'primary').primary110).toMatch(/^#[0-9A-F]{6}$/);
  });

  it('maps generated primary colors to public CSS variable names', () => {
    const palette = generateAdmiralPalette('#8B3DFF', 'primary');
    const variables = createPrimaryCssVariables(palette);

    expect(variables['--admiral-color-global-primary-primary10']).toBe(palette.primary10);
    expect(variables['--admiral-color-global-primary-primary110']).toBe(palette.primary110);
    expect(variables['--admiral-color-global-primary-primary170']).toBe(palette.primary170);
  });

  it('maps multiple generated palettes to public CSS variable names', () => {
    const primary = generateAdmiralPalette('#8B3DFF', 'primary');
    const error = generateAdmiralPalette('#E0205A', 'error');
    const variables = createGlobalColorCssVariables({ primary, error });

    expect(variables['--admiral-color-global-primary-primary110']).toBe(primary.primary110);
    expect(variables['--admiral-color-global-error-error110']).toBe(error.error110);
  });

  it('renders generated palettes as a CSS selector block', () => {
    const primary = generateAdmiralPalette('#8B3DFF', 'primary');
    const error = generateAdmiralPalette('#E0205A', 'error');
    const css = createGlobalColorCss({ primary, error }, '.brand-theme');

    expect(css).toContain('.brand-theme {');
    expect(css).toContain(`  --admiral-color-global-primary-primary110: ${primary.primary110};`);
    expect(css).toContain(`  --admiral-color-global-error-error110: ${error.error110};`);
    expect(css).toContain('\n}');
  });
});
