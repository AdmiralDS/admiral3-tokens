# @admiral-ds/admiral3-tokens

Токены дизайн-системы Admiral 3.0.

Пакет отдаёт темы как TypeScript-объекты и готовые CSS custom properties.

## Установка

```shell
npm install @admiral-ds/admiral3-tokens
```

`react` является обязательной peer-зависимостью пакета. `styled-components` нужен только для отдельного subpath.
Font assets поставляются через dependencies `@admiral-ds/fonts` и `@fontsource/source-code-pro`.

## Использование

```tsx
import { lightTheme, themes } from '@admiral-ds/admiral3-tokens';

export function Demo() {
  return <div style={{ color: lightTheme.color.text.neutral.text1.rest }}>Ready</div>;
}
```

Основной импорт `@admiral-ds/admiral3-tokens` отдаёт TypeScript/JavaScript API: объекты тем, агрегированные color/radius/shadow token maps, animation, breakpoints, zIndex, типографику, helpers и типы. CSS подключается через отдельные subpath.
Вложенные color-палитры доступны через агрегаты `globalColors` и `themeColors`; отдельные shorthand-экспорты вроде `primaryBase` или `neutralText` не входят в root API.
Typography API включает основные текстовые роли и monospace-стили `Monospace/Mono 1`, `Monospace/Mono 2`, `Monospace/Mono 3` для Source Code Pro.
Semantic theme colors доступны внутри theme objects в группах `color.base`, `color.text`, `color.stroke` и `color.shadow`.

## Public API

```text
@admiral-ds/admiral3-tokens
│
├─ "."
│  import { lightTheme, themes, globalColors, radius, shadow, typography, ... }
│  TypeScript/JavaScript API токенов.
│
├─ "./fonts"
│  import { FontsSourceCodePro, FontsVTBGroup }
│  React-helper для подключения VTB Group UI и Source Code Pro fonts.
│
├─ "./styled-components"
│  import '@admiral-ds/admiral3-tokens/styled-components'
│  Type augmentation для styled-components DefaultTheme.
│  Дополнительно требует: styled-components.
│
├─ "./css"
│  import '@admiral-ds/admiral3-tokens/css'
│  Все CSS custom properties одним файлом.
│
├─ "./css/animation"
│  import '@admiral-ds/admiral3-tokens/css/animation'
│  Animation duration и easing tokens.
│
├─ "./css/breakpoints"
│  import '@admiral-ds/admiral3-tokens/css/breakpoints'
│  Breakpoint tokens.
│
├─ "./css/global-colors"
│  import '@admiral-ds/admiral3-tokens/css/global-colors'
│  Глобальная палитра.
│
├─ "./css/themes"
│  import '@admiral-ds/admiral3-tokens/css/themes'
│  Все темы + переключение через data-admiral-theme.
│
├─ "./css/typography"
│  import '@admiral-ds/admiral3-tokens/css/typography'
│  Typography primitives и text styles, включая monospace.
│
├─ "./css/radius"
│  import '@admiral-ds/admiral3-tokens/css/radius'
│  Radius tokens.
│
├─ "./css/shadow"
│  import '@admiral-ds/admiral3-tokens/css/shadow'
│  Shadow tokens.
│
├─ "./css/z-index"
│  import '@admiral-ds/admiral3-tokens/css/z-index'
│  Z-index layer tokens.
│
├─ "./css/theme-light"
│  import '@admiral-ds/admiral3-tokens/css/theme-light'
│  Только light theme как :root.
│
├─ "./css/theme-dark"
│  import '@admiral-ds/admiral3-tokens/css/theme-dark'
│  Только dark theme как :root.
│
├─ "./css/theme-light-neutral"
│  import '@admiral-ds/admiral3-tokens/css/theme-light-neutral'
│  Только light-neutral theme как :root.
│
└─ "./css/theme-dark-neutral"
   import '@admiral-ds/admiral3-tokens/css/theme-dark-neutral'
   Только dark-neutral theme как :root.
```

CSS-токены можно подключать целиком:

```ts
import '@admiral-ds/admiral3-tokens/css';
```

Или отдельными объектами:

```ts
import '@admiral-ds/admiral3-tokens/css/global-colors';
import '@admiral-ds/admiral3-tokens/css/themes';
import '@admiral-ds/admiral3-tokens/css/typography';
import '@admiral-ds/admiral3-tokens/css/animation';
import '@admiral-ds/admiral3-tokens/css/breakpoints';
import '@admiral-ds/admiral3-tokens/css/radius';
import '@admiral-ds/admiral3-tokens/css/shadow';
import '@admiral-ds/admiral3-tokens/css/z-index';
```

Доступные CSS-файлы:

- `css` - все CSS custom properties.
- `css/animation` - длительности и кривые анимации.
- `css/breakpoints` - брейкпоинты.
- `css/global-colors` - глобальная палитра.
- `css/themes` - все темы с селекторами `:root` и `[data-admiral-theme="..."]`.
- `css/typography` - типографика.
- `css/theme-light`, `css/theme-dark`, `css/theme-light-neutral`, `css/theme-dark-neutral` - отдельные темы.
- `css/radius` - радиусы.
- `css/shadow` - тени.
- `css/z-index` - слои z-index.

Для переключения темы используйте атрибут:

```html
<html data-admiral-theme="dark"></html>
```

Статические токены можно использовать напрямую из TypeScript API:

```ts
import { animation, breakpoints, zIndex } from '@admiral-ds/admiral3-tokens';

const drawerTransition = `${animation.motion.duration.medium_2}ms cubic-bezier(${animation.motion.easing.decelerate.standard.join(', ')})`;
const desktopMinWidth = breakpoints.lg;
const modalLayer = zIndex.modal;
```

## Темы

В пакете есть 4 темы:

- `light` - дефолтная светлая тема с цветным primary accent.
- `lightNeutral` - светлая тема, где primary accent становится нейтральным.
- `dark` - темная тема с цветным primary accent.
- `darkNeutral` - темная тема, где primary accent становится нейтральным.

Neutral-темы меняют только primary/neutral-dependent accent. Status и extra colors остаются семантическими: success,
error, warning и дополнительные палитры не становятся нейтральными.

Для `styled-components` используйте готовые theme objects:

```tsx
import { ThemeProvider } from 'styled-components';
import { themes } from '@admiral-ds/admiral3-tokens';

export function App() {
  return (
    <ThemeProvider theme={themes.lightNeutral}>
      <Demo />
    </ThemeProvider>
  );
}
```

Тему можно задавать локально для части интерфейса через вложенный `ThemeProvider`:

```tsx
<ThemeProvider theme={themes.light}>
  <CommonContent />

  <ThemeProvider theme={themes.darkNeutral}>
    <WidgetWithLocalTheme />
  </ThemeProvider>
</ThemeProvider>
```

Для типизации `DefaultTheme` в `styled-components` подключите отдельный type-only entrypoint:

```ts
import '@admiral-ds/admiral3-tokens/styled-components';
```

Внутренние deep imports не являются частью публичного API.

## Helpers

### Brand primary palette

`generateAdmiralPalette` строит Admiral-палитру из 17 шагов по одному base color. Для primary-палитры используйте
prefix `primary`, чтобы результат подходил для theme overrides и CSS helpers.

```ts
import {
  buildTheme,
  createGlobalColorCss,
  createPrimaryCssVariables,
  generateAdmiralPalette,
} from '@admiral-ds/admiral3-tokens';

const primary = generateAdmiralPalette('#8B3DFF', 'primary');

const theme = buildTheme('light', {
  globalColors: {
    primary,
  },
});

const primaryVariables = createPrimaryCssVariables(primary);
const primaryCss = createGlobalColorCss({ primary }, '.brand-theme');
```

`theme` можно передать в `styled-components` `ThemeProvider`, `primaryVariables` можно использовать для inline/style
интеграций, а `primaryCss` - вставить в CSS слой приложения, если нужно завести отдельный selector с brand-палитрой.

```tsx
import { ThemeProvider } from 'styled-components';
import { buildTheme, generateAdmiralPalette } from '@admiral-ds/admiral3-tokens';

const primary = generateAdmiralPalette('#8B3DFF', 'primary');
const theme = buildTheme('light', { globalColors: { primary } });

export function BrandedApp() {
  return <ThemeProvider theme={theme}>...</ThemeProvider>;
}
```

Для нескольких палитр используйте общий CSS helper:

```ts
import { createGlobalColorCss, generateAdmiralPalette } from '@admiral-ds/admiral3-tokens';

const primary = generateAdmiralPalette('#8B3DFF', 'primary');
const error = generateAdmiralPalette('#E0205A', 'error');

export const css = createGlobalColorCss({ primary, error }, '.brand-theme');
```

### Fonts

Шрифты подключаются через отдельный React entrypoint. Компоненты вставляют `@font-face` в `<style>` и используют font assets,
которые уже входят в dependencies пакета.

```tsx
import { FontsSourceCodePro, FontsVTBGroup } from '@admiral-ds/admiral3-tokens/fonts';

export function AppFonts() {
  return (
    <>
      <FontsVTBGroup />
      <FontsSourceCodePro />
    </>
  );
}
```

`FontsVTBGroup` подключает `VTB Group UI` для обычной интерфейсной типографики. `FontsSourceCodePro` подключает
`Source Code Pro` для monospace-стилей из typography tokens.

## Разработка

Для локальной разработки используйте Node.js 24, как в GitHub Actions. Зависимости устанавливаются обычным `npm ci`.

Правила разработки и workflow репозитория описаны отдельно:

- [Соглашения по внесению изменений](CONTRIBUTING.md)
- [Руководство по тестированию](tests/TESTING_README.md)

## Лицензия

См. [LICENSE](LICENSE).
