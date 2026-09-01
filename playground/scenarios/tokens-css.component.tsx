import { useState } from 'react';

import { cornerRadiusOptions, type CornerRadiusBase } from '@admiral-ds/admiral3-tokens';

import { FontsVTBGroup } from '@admiral-ds/admiral3-tokens/fonts';
import '@admiral-ds/admiral3-tokens/css';

const themeOptions = ['light', 'dark', 'light-neutral', 'dark-neutral'] as const;

type ThemeOption = (typeof themeOptions)[number];

export const TokenCssExample = () => {
  const [cornerRadius, setCornerRadius] = useState<CornerRadiusBase>('4');
  const [theme, setTheme] = useState<ThemeOption>('light');

  return (
    <section className="token-demo" data-admiral-corner-radius={cornerRadius} data-admiral-theme={theme}>
      <FontsVTBGroup />
      <header className="token-demo__toolbar">
        {themeOptions.map((item) => (
          <button
            key={item}
            className="token-demo__tab"
            data-active={item === theme ? 'true' : undefined}
            onClick={() => setTheme(item)}
            type="button"
          >
            {item}
          </button>
        ))}
        <label className="token-demo__radius-control">
          Corner radius
          <select
            aria-label="Corner radius"
            className="token-demo__radius-select"
            onChange={(event) => setCornerRadius(event.target.value as CornerRadiusBase)}
            value={cornerRadius}
          >
            {cornerRadiusOptions.map((base) => (
              <option key={base} value={base}>
                {base}
              </option>
            ))}
          </select>
        </label>
      </header>

      <div className="token-demo__surface">
        <div className="token-demo__card">
          <span className="token-demo__eyebrow">CSS import</span>
          <h2 className="token-demo__title">Semantic CSS tokens</h2>
          <p className="token-demo__text">This panel uses package CSS variables for color, radius and shadow.</p>
          <div className="token-demo__actions">
            <button className="token-demo__button" type="button">
              Primary action
            </button>
            <button className="token-demo__button token-demo__button_secondary" type="button">
              Secondary
            </button>
          </div>
        </div>

        <div className="token-demo__swatches" aria-label="CSS token samples">
          <span className="token-demo__swatch token-demo__swatch_primary" />
          <span className="token-demo__swatch token-demo__swatch_success" />
          <span className="token-demo__swatch token-demo__swatch_warning" />
          <span className="token-demo__swatch token-demo__swatch_error" />
        </div>
      </div>
    </section>
  );
};
