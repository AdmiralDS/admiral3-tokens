import { expect, test } from '@playwright/test';
import type { Locator } from '@playwright/test';

import { getPlaygroundScenarioPath } from '../utils';

const readStyle = async (locator: Locator, property: string) => {
  return locator.evaluate((element: Element, styleProperty) => {
    return window.getComputedStyle(element).getPropertyValue(styleProperty);
  }, property);
};

const isRuntimeConsoleError = (message: string) => {
  return !message.includes('downloadable font:');
};

const essentialScenarios = [
  {
    id: 'animation',
    visibleText: 'Токены анимации',
  },
  {
    id: 'global-colors/primary',
    visibleText: 'Primary-110',
  },
  {
    id: 'theme-colors/usage',
    visibleText: 'Theme Colors',
  },
  {
    id: 'typography',
    visibleText: 'Mono 1',
  },
  {
    id: 'radius/groups',
    visibleText: 'Группы скруглений',
  },
  {
    id: 'shadows',
    visibleText: 'Shadow 08',
  },
  {
    id: 'themes/component-scope',
    visibleText: 'Переключение тем в отдельных компонентах',
  },
  {
    id: 'tokens/usage-examples',
    visibleText: 'Token usage examples',
  },
] as const;

test.describe('Token playground integration checks', () => {
  test('applies package CSS variables and updates computed styles on theme switch', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('tokens/css'));

    await expect(page.getByRole('heading', { name: 'Semantic CSS tokens' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Primary action' })).toBeVisible();

    const demo = page.locator('.token-demo');
    const card = page.locator('.token-demo__card');
    const primaryButton = page.getByRole('button', { name: 'Primary action' });
    const lightCardBackground = await readStyle(card, 'background-color');
    const lightPrimaryBackground = await readStyle(primaryButton, 'background-color');

    await expect(demo).toHaveAttribute('data-admiral-theme', 'light');
    await expect(card).toHaveCSS('border-radius', '12px');
    await expect(primaryButton).toHaveCSS('border-radius', '4px');

    await page.getByRole('button', { name: 'dark-neutral' }).click();

    await expect(demo).toHaveAttribute('data-admiral-theme', 'dark-neutral');
    await expect
      .poll(async () => readStyle(card, 'background-color'), {
        message: 'card background should be recomputed from the selected CSS theme',
      })
      .not.toBe(lightCardBackground);
    await expect
      .poll(async () => readStyle(primaryButton, 'background-color'), {
        message: 'primary button background should be recomputed from the selected CSS theme',
      })
      .not.toBe(lightPrimaryBackground);
  });

  test('uses exported styled-components theme objects at runtime', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('tokens/styled-components'));

    await expect(page.getByRole('heading', { name: 'Styled-components tokens' })).toBeVisible();
    await expect(page.getByLabel('Styled-components token samples')).toBeVisible();

    const shell = page.getByRole('heading', { name: 'Styled-components tokens' }).locator('xpath=ancestor::section[1]');
    const primaryButton = page.getByRole('button', { name: 'Primary action' });
    const lightShellBackground = await readStyle(shell, 'background-color');
    const lightPrimaryBackground = await readStyle(primaryButton, 'background-color');

    await expect(shell).toHaveCSS('border-radius', '16px');
    await expect(primaryButton).toHaveCSS('border-radius', '4px');

    await page.getByRole('button', { name: 'darkNeutral' }).click();

    await expect(page.getByRole('button', { name: 'darkNeutral' })).toHaveAttribute('data-active', 'true');
    await expect
      .poll(async () => readStyle(shell, 'background-color'), {
        message: 'styled-components shell background should follow selected exported theme object',
      })
      .not.toBe(lightShellBackground);
    await expect
      .poll(async () => readStyle(primaryButton, 'background-color'), {
        message: 'styled-components primary button background should follow selected exported theme object',
      })
      .not.toBe(lightPrimaryBackground);
  });

  test('keeps global playground theme while switching scenarios', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('theme-colors/usage'));

    await page.getByLabel('Theme').selectOption('darkNeutral');
    await page.getByRole('link', { exact: true, name: 'Typography' }).click();

    await expect(page).toHaveURL(/\/\?scenario=typography$/);
    await expect(page.getByLabel('Theme')).toHaveValue('darkNeutral');
    await expect(page.locator('.playground-shell')).toHaveAttribute('data-admiral-theme', 'dark-neutral');
  });

  test('mounts essential token playground scenarios without runtime errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => {
      const text = message.text();

      if (message.type() === 'error' && isRuntimeConsoleError(text)) {
        errors.push(text);
      }
    });

    for (const scenario of essentialScenarios) {
      await page.goto(getPlaygroundScenarioPath(scenario.id));
      await expect(page.getByText(scenario.visibleText).first()).toBeVisible();
    }

    expect(errors).toEqual([]);
  });

  test('shows animation preview tracks with the expected movement area', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('animation'));

    const previewTracks = page.locator('[data-animation-preview-track]');

    await expect(previewTracks).toHaveCount(5);
    await expect(previewTracks.first()).toHaveCSS('width', '360px');
    await expect(previewTracks.first()).toHaveCSS('height', '100px');
  });

  test('mounts bundled font helpers in the playground runtime', async ({ page }) => {
    await page.goto(getPlaygroundScenarioPath('tokens/css'));

    const fontCssText = await page.locator('style').evaluateAll((styles) =>
      styles
        .map((style) => style.textContent ?? '')
        .filter((cssText) => cssText.includes('@font-face'))
        .join('\n'),
    );

    expect(fontCssText).toContain("font-family: 'VTB Group UI'");
    expect(fontCssText).toContain("font-family: 'Source Code Pro'");
  });
});
