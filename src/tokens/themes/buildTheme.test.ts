import { describe, expect, it } from 'vitest';

import { generateAdmiralPalette } from '../color';
import { radius } from '../radius';
import { buildTheme, buildThemes, darkTheme, lightTheme } from './index';

describe('buildTheme', () => {
  it('includes shared radius tokens in every theme object', () => {
    expect(lightTheme.radius).toBe(radius);
    expect(darkTheme.radius).toBe(radius);
  });

  it('builds ready-to-use theme-dependent box-shadow strings', () => {
    expect(lightTheme.shadow.shadow02).toBe('0px 0px 2px rgba(0, 0, 0, 0.12), 0px 1px 2px rgba(0, 0, 0, 0.14)');
    expect(darkTheme.shadow.shadow02).toBe('0px 0px 2px rgba(0, 0, 0, 0.2), 0px 1px 2px rgba(0, 0, 0, 0.28)');
  });

  it('adds typography-like string aliases for radius tokens and theme shadows', () => {
    expect(lightTheme.radius['By Base/8/Large']).toBe('16px');
    expect(lightTheme.shadow['Shadow 02']).toBe(lightTheme.shadow.shadow02);
  });

  it('resolves semantic color references for styled-components consumption', () => {
    expect(buildTheme('light').color.primary.text._1.rest).toBe('#0062FF');
  });

  it('adds typography-like string aliases for theme color tokens', () => {
    const color = buildTheme('light').color;

    expect(color['Primary/Text/1/Rest']).toBe('#0062FF');
    expect(color['Neutral/Base/1/Rest']).toBe('#FFFFFF');
  });

  it('uses global color overrides when resolving styled-components theme colors', () => {
    const primary = generateAdmiralPalette('#8B3DFF', 'primary');
    const theme = buildTheme('light', {
      globalColors: {
        primary,
      },
    });

    expect(theme.color.primary.base._1.rest).toBe(primary.primary110);
    expect(theme.color.primary.base._1.hover).toBe(primary.primary120);
    expect(theme.color['Primary/Text/1/Rest']).toBe(primary.primary110);
  });

  it('builds all theme modes with the same global color overrides', () => {
    const primary = generateAdmiralPalette('#8B3DFF', 'primary');
    const themes = buildThemes({
      globalColors: {
        primary,
      },
    });

    expect(themes.light.color.primary.base._1.rest).toBe(primary.primary110);
    expect(themes.dark.color.primary.base._1.rest).toBe(primary.primary100);
    expect(themes.lightNeutral.color.primary.base._1.rest).toBe('#2D2E31');
    expect(themes.darkNeutral.color.primary.base._1.rest).toBe('#EBEBEC');
  });

  it('uses several global palette overrides at once', () => {
    const primary = generateAdmiralPalette('#8B3DFF', 'primary');
    const error = generateAdmiralPalette('#E0205A', 'error');
    const theme = buildTheme('light', {
      globalColors: {
        primary,
        error,
      },
    });

    expect(theme.color.primary.base._1.rest).toBe(primary.primary110);
    expect(theme.color.error.base._1.rest).toBe(error.error110);
    expect(theme.color.error.text._1.rest).toBe(error.error110);
  });
});
