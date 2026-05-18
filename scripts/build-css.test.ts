import { describe, expect, it } from 'vitest';

import {
  buildCssFiles,
  buildAnimationVariables,
  buildFlatVariables,
  buildShadowVariables,
  buildTypographyVariables,
  flatten,
  resolveGlobalColorReference,
  resolveTypographyPrimitiveReference,
  themeFileName,
  themeSelector,
  toKebab,
  toVarName,
} from './build-css';

describe('build-css helpers', () => {
  it('normalizes token path segments into CSS variable names', () => {
    expect(toKebab('lightNeutral')).toBe('light-neutral');
    expect(toVarName(['color', 'text', 'neutral', 'text1', 'rest'])).toBe('--admiral-color-text-neutral-text1-rest');
  });

  it('flattens nested token objects into path/value pairs', () => {
    expect(
      flatten({
        color: {
          primary: {
            rest: '#0062FF',
          },
        },
      }),
    ).toEqual([[['color', 'primary', 'rest'], '#0062FF']]);
  });

  it('turns global color references into CSS variable references with fallbacks', () => {
    expect(resolveGlobalColorReference('primary.primary110')).toBe(
      'var(--admiral-color-global-primary-primary110, #0062FF)',
    );
    expect(resolveGlobalColorReference('notAColor.reference')).toBe('notAColor.reference');
  });

  it('builds flat variables and optionally keeps color references overrideable', () => {
    expect(
      buildFlatVariables('color', { primary: { rest: 'primary.primary110' } }, { resolveColorReferences: true }),
    ).toEqual([['--admiral-color-primary-rest', 'var(--admiral-color-global-primary-primary110, #0062FF)']]);
  });

  it('turns typography text style values into primitive variable references with fallbacks', () => {
    expect(resolveTypographyPrimitiveReference(['header', 'h1', 'fontSize'], '40px')).toBe(
      'var(--admiral-typography-primitives-font-size-40, 40px)',
    );
    expect(resolveTypographyPrimitiveReference(['header', 'h1', 'fontWeight'], 550)).toBe(
      'var(--admiral-typography-primitives-font-weight-semibold, 550)',
    );
    expect(resolveTypographyPrimitiveReference(['header', 'h1', 'unknown'], '40px')).toBe('40px');
  });

  it('builds theme file names and selectors from theme modes', () => {
    expect(themeFileName('darkNeutral')).toBe('dark-neutral');
    expect(themeSelector('darkNeutral')).toBe('[data-admiral-theme="dark-neutral"]');
  });
});

describe('build-css output', () => {
  it('generates all public CSS files', () => {
    expect(Object.keys(buildCssFiles()).sort()).toEqual([
      'animation.css',
      'breakpoints.css',
      'global-colors.css',
      'index.css',
      'radius.css',
      'shadow.css',
      'theme-dark-neutral.css',
      'theme-dark.css',
      'theme-light-neutral.css',
      'theme-light.css',
      'themes.css',
      'typography.css',
      'z-index.css',
    ]);
  });

  it('emits animation, breakpoints and z-index variables', () => {
    const files = buildCssFiles();
    const animationVariables = buildAnimationVariables();

    expect(animationVariables).toContainEqual(['--admiral-animation-motion-duration-short-1', '50ms']);
    expect(animationVariables).toContainEqual([
      '--admiral-animation-motion-easing-decelerate-standard',
      'cubic-bezier(0, 0, 0.2, 1)',
    ]);
    expect(files['animation.css']).toContain('--admiral-animation-motion-duration-long-4: 600ms;');
    expect(files['breakpoints.css']).toContain('--admiral-breakpoints-lg: 1024px;');
    expect(files['z-index.css']).toContain('--admiral-z-index-modal: 1400;');
    expect(files['index.css']).toContain('--admiral-animation-motion-easing-linear: cubic-bezier(0, 0, 1, 1);');
    expect(files['index.css']).toContain('--admiral-z-index-tooltip: 1600;');
  });

  it('emits typography variables for primitives and text styles', () => {
    const files = buildCssFiles();
    const typographyVariables = buildTypographyVariables();

    expect(typographyVariables).toContainEqual(['--admiral-typography-primitives-font-size-16', '16px']);
    expect(typographyVariables).toContainEqual([
      '--admiral-typography-text-styles-header-h1-font-size',
      'var(--admiral-typography-primitives-font-size-40, 40px)',
    ]);
    expect(files['typography.css']).toContain(
      "--admiral-typography-primitives-font-family-primary: 'VTB Group UI', Arial, sans-serif;",
    );
    expect(files['typography.css']).toContain(
      "--admiral-typography-primitives-font-family-monospace: 'Source Code Pro', 'Courier New', monospace;",
    );
    expect(files['typography.css']).toContain(
      '--admiral-typography-text-styles-caption-caption2-line-height: var(--admiral-typography-primitives-line-height-12, 12px);',
    );
    expect(files['typography.css']).toContain(
      "--admiral-typography-text-styles-monospace-mono1-font-family: var(--admiral-typography-primitives-font-family-monospace, 'Source Code Pro', 'Courier New', monospace);",
    );
    expect(files['typography.css']).toContain(
      '--admiral-typography-text-styles-monospace-mono1-font-weight: var(--admiral-typography-primitives-font-weight-book, 400);',
    );
    expect(files['typography.css']).toContain(
      '--admiral-typography-text-styles-monospace-mono2-font-weight: var(--admiral-typography-primitives-font-weight-book, 400);',
    );
    expect(files['typography.css']).toContain(
      '--admiral-typography-text-styles-monospace-mono3-font-weight: var(--admiral-typography-primitives-font-weight-book, 400);',
    );
    expect(files['index.css']).toContain(
      '--admiral-typography-text-styles-button-button1-font-weight: var(--admiral-typography-primitives-font-weight-medium, 500);',
    );
  });

  it('emits theme color references as global CSS variable references', () => {
    const files = buildCssFiles();

    expect(files['theme-light.css']).toContain(
      '--admiral-color-text-primary-text1-rest: var(--admiral-color-global-primary-primary110, #0062FF);',
    );
    expect(files['theme-light.css']).not.toContain('primary.primary110');
  });

  it('keeps shadow colors theme-dependent through CSS variable references', () => {
    const themeShadowVariables = buildShadowVariables();
    const standaloneShadowVariables = buildShadowVariables({ includeFallback: true });
    const files = buildCssFiles();

    expect(themeShadowVariables).toContainEqual([
      '--admiral-shadow-shadow02',
      '0px 0px 2px var(--admiral-color-shadow-outline-m), 0px 1px 2px var(--admiral-color-shadow-main-m)',
    ]);
    expect(standaloneShadowVariables).toContainEqual([
      '--admiral-shadow-shadow02',
      '0px 0px 2px var(--admiral-color-shadow-outline-m, var(--admiral-color-global-opacity-black-12, rgba(0, 0, 0, 0.12))), 0px 1px 2px var(--admiral-color-shadow-main-m, var(--admiral-color-global-opacity-black-14, rgba(0, 0, 0, 0.14)))',
    ]);
    expect(files['shadow.css']).toContain(
      'var(--admiral-color-shadow-outline-m, var(--admiral-color-global-opacity-black-12, rgba(0, 0, 0, 0.12)))',
    );
    expect(files['theme-light.css']).toContain('--admiral-shadow-shadow02:');
    expect(files['theme-light.css']).toContain('0px 0px 2px var(--admiral-color-shadow-outline-m)');
    expect(files['theme-light.css']).not.toContain(
      'var(--admiral-color-shadow-outline-m, var(--admiral-color-global-opacity-black-12',
    );
    expect(files['themes.css']).toContain('--admiral-shadow-shadow02:');
    expect(files['shadow.css']).not.toContain('[object Object]');
  });

  it('uses light as the default selector in the combined themes file', () => {
    expect(buildCssFiles()['themes.css']).toContain(':root,\n[data-admiral-theme="light"]');
  });
});
