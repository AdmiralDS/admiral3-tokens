import { useState } from 'react';

import { FontsVTBGroup } from '@admiral-ds/admiral3-tokens/fonts';
import '@admiral-ds/admiral3-tokens/css';

const themeOptions = ['light', 'dark', 'light-neutral', 'dark-neutral'] as const;

type ThemeOption = (typeof themeOptions)[number];

export const TokenCssExample = () => {
  const [theme, setTheme] = useState<ThemeOption>('light');

  return (
    <section className="token-demo" data-admiral-theme={theme}>
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
