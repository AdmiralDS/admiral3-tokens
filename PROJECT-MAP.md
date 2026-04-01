# PROJECT-MAP.md

Документ описывает структуру репозитория `@admiral-ds/admiral3-tokens` и назначение файлов, которые видит Git.

Перечень файлов ниже построен по команде:

```bash
git ls-files --cached --others --exclude-standard
```

Это значит, что в карту включены уже отслеживаемые файлы и новые неигнорируемые файлы, которые сейчас могут попасть в коммит. Локальные служебные файлы, build output, `node_modules`, отчеты тестов и другие игнорируемые артефакты здесь не описываются.

Template-файлы для Storybook и playground в этом документе учитываются как файлы-примеры. Их внутренняя разметка и демонстрационная логика не разбираются подробно, потому что они не являются source of truth для токенов или конфигурации пакета.

## Назначение проекта

Репозиторий содержит пакет дизайн-токенов для React-ориентированной дизайн-системы Admiral 3.0.

Пакет отвечает за:

- экспорт структурированных токенов и тем через TypeScript/JavaScript API;
- генерацию готовых CSS custom properties в `dist/css`;
- поставку plain theme objects для `styled-components`;
- экспорт типографики, цветов, радиусов, теней и helpers для кастомной primary palette;
- React entrypoint для подключения шрифтов VTB Group UI и Source Code Pro;
- type augmentation для `styled-components`;
- демонстрацию и ручную проверку токенов через Storybook и internal playground;
- unit/e2e проверки контракта токенов, CSS-генерации и token playground сценариев.

## Верхнеуровневая структура

```text
.
├── .github/workflows/        # GitHub Actions для проверок и npm publish
├── .storybook/               # Конфигурация Storybook и глобальные preview-настройки
├── playground/               # Internal playground для ручных и e2e проверок
├── scripts/                  # Node/TS скрипты сборки CSS и declaration bundles
├── src/                      # Исходный код публичного API, токенов, stories и тестовых настроек
│   ├── fonts/                # Fonts subpath entrypoint и React helper
│   ├── test/                 # Vitest setup
│   └── tokens/               # Основной source of truth токенов и тем
├── tests/                    # E2E-тесты Playwright и документация по тестам
├── package.json              # npm package manifest, exports, scripts, dependencies
├── vite.config.ts            # Vite library build
├── vite.playground.config.ts # Vite build/dev config для playground
├── vitest.config.ts          # Vitest config
├── playwright.config.ts      # Playwright config
└── tsconfig*.json            # TypeScript project references и scoped configs
```

## Ключевые потоки данных

### TypeScript API

`src/index.ts` является root entrypoint пакета. Он собирает публичные exports из `src/tokens/*`, `src/tokens/themes`, typography API и color helpers.

Основной поток:

```text
src/tokens/* source maps
  -> src/tokens/themes/buildTheme.ts
  -> src/tokens/themes/index.ts
  -> src/index.ts
  -> dist/index.js + dist/index.d.ts
```

### CSS API

CSS не хранится как source вручную. Он генерируется из структурированных токенов.

Основной поток:

```text
src/tokens/*
  -> src/css-data.ts
  -> scripts/build-css.ts
  -> dist/css/*.css
```

Публичные CSS subpath exports описаны в `package.json` и указывают на файлы из `dist/css`.

### Declaration bundles

Сначала `tsc -p tsconfig.lib.json` генерирует `.d.ts`, затем `scripts/build-dts.ts` сворачивает публичные declaration entrypoints:

```text
dist/index.d.ts
dist/fonts/index.d.ts
dist/styled-components.d.ts
```

Это позволяет публиковать компактный набор публичных типов без глубокого `dist/tokens/*` API.

### Storybook и playground

Storybook использует `src/**/*.stories.tsx`, а playground использует сценарии из `playground/scenarios`.
Порядок верхнеуровневых разделов Storybook задан в `.storybook/preview.tsx` через `parameters.options.storySort.order`.

Общее правило проекта: Storybook не нужно зеркалить в playground целиком. Playground-сценарии добавляются для тех примеров и edge cases, которые осмысленно покрывать через e2e или проверять как browser/runtime integration.
Демонстрационные templates и playground shell должны использовать token API, theme objects или generated CSS variables для цветов, типографики, радиусов и теней.
Код в Storybook Docs для token stories берётся из соответствующих `*.template.tsx` файлов через `?raw`, чтобы в документации показывался пример, а не служебный CSF wrapper.

## Файлы в корне

- `.env.example` - пример переменных окружения для локальных запусков. Сейчас используется как безопасный шаблон, который можно держать в Git, в отличие от реального `.env`.
- `.gitignore` - список локальных файлов, build outputs, зависимостей и отчетов, которые не должны попадать в Git.
- `.prettierignore` - исключения для Prettier, чтобы форматтер не обходил generated/build artifacts и другие нерелевантные директории.
- `.prettierrc` - конфигурация Prettier, задает единый формат кода и markdown.
- `CONTRIBUTING.md` - обязательные правила внесения изменений: commit style, проверки перед PR, release flow, accessibility, порядок добавления новых токенов, Storybook/playground parity.
- `LICENSE` - лицензионный файл пакета.
- `PROJECT-MAP.md` - текущая карта структуры проекта и назначений файлов.
- `README.md` - пользовательская документация пакета: установка, импорты, темы, CSS tokens, customization examples и публичный контракт.
- `eslint.config.js` - flat config ESLint. Подключает TypeScript, import rules, React hooks, React Refresh, Storybook, Prettier и задает правила сортировки импортов, запрет `any`, циклов и дублей импортов; для `*.stories.tsx` отключает `import/default`, чтобы ESLint не ломался на Vite raw-imports из templates.
- `package-lock.json` - lockfile npm. Фиксирует точные версии зависимостей и должен меняться только вместе с изменениями зависимостей или npm metadata.
- `package.json` - manifest npm-пакета. Описывает имя, версию, `exports`, публикуемые файлы, side effects, scripts, dependencies, peer/dev dependencies, repository metadata и publish config. Основные локальные потоки вынесены в `check:fix`, `check:full`, `storybook`, `playground` и `release`; служебные команды используют префиксы `build:*`, `storybook:*` и `playground:*`. Font asset packages лежат в обычных dependencies, чтобы `./fonts` helpers работали без дополнительных установок.
- `playwright.config.ts` - конфигурация e2e тестов Playwright. Указывает `tests/e2e`, базовый URL playground, браузерные проекты, timeout, reporter и webServer `npm run playground:serve`.
- `tsconfig.json` - корневой TypeScript build config с project references на scoped configs.
- `tsconfig.lib.json` - TypeScript config для библиотечных declaration outputs. Используется в `npm run build` для генерации `.d.ts`.
- `tsconfig.node.json` - TypeScript config для Node-side файлов: Vite/Vitest/Playwright configs и scripts.
- `tsconfig.playground.json` - TypeScript config для internal playground.
- `tsconfig.storybook.json` - TypeScript config для Storybook и story files.
- `tsconfig.test.json` - TypeScript config для unit/e2e тестового контура.
- `vite.config.ts` - Vite library build config. Собирает ES entrypoints `index`, `fonts`, `styled-components`, задает aliases и external dependencies, включая внешние deep imports font assets.
- `vite.playground.config.ts` - Vite config для playground. Задает root `playground`, React/SVGR plugins, aliases на source API и generated CSS, output `dist-playground`.
- `vitest.config.ts` - Vitest config. Настраивает React/SVGR plugins, aliases, `jsdom`, setup file, include/exclude patterns и coverage reporter.

## GitHub Actions

- `.github/workflows/build.yml` - CI workflow для pull request/main проверок на Node.js 24. Запускает `npm ci`, проектные checks/build сценарии и GitHub Pages actions с Node 24-compatible major versions.
- `.github/workflows/npm_release.yaml` - release workflow для публикации в npm после GitHub Release на Node.js 24. Повторно прогоняет проверки, build, `npm pack --dry-run` и публикует пакет при успешной верификации.

## Storybook

- `.storybook/DocsThemeContainer.tsx` - custom docs container. Синхронизирует тему docs со Storybook global `theme`, поддерживает `system`, `light`, `dark`, `lightNeutral`, `darkNeutral` и резолвит внешнюю тему Storybook docs в простой `light`/`dark`.
- `.storybook/main.ts` - основная конфигурация Storybook. Ищет `src/**/*.stories.*`, подключает docs/a11y addons, React Vite framework, react-docgen TypeScript и Vite aliases для root и fonts entrypoints.
- `.storybook/manager.ts` - manager-side настройки Storybook UI. Синхронизирует внешний manager theme с выбранной Admiral theme через простой `light`/`dark` shell.
- `.storybook/preview.css` - глобальные стили preview iframe: базовый фон, отступы, theme classes и визуальная оболочка stories/docs.
- `.storybook/preview.tsx` - preview config. Добавляет decorators, `ThemeProvider`, `FontsVTBGroup`, `FontsSourceCodePro`, переключатель темы, a11y strict mode, fullscreen layout, docs container и порядок верхнеуровневых разделов sidebar.
- `.storybook/storybookThemes.ts` - общий helper для Storybook theme toolbar: валидирует 4 Admiral theme modes и мапит `lightNeutral`/`darkNeutral` на простую внешнюю оболочку `light`/`dark`.

## Playground

- `playground/css-imports.d.ts` - TypeScript declarations для импортов CSS subpaths в playground.
- `playground/index.html` - HTML entrypoint Vite playground.
- `playground/main.tsx` - React entrypoint playground. Монтирует приложение, подключает CSS tokens, font helpers, сценарии, общий `ThemeProvider` и переключатель theme mode для ручных проверок; выбранная тема сохраняется между переходами по сценариям.
- `playground/styled-components.d.ts` - локальная type augmentation для `styled-components` внутри playground.
- `playground/styles.css` - глобальные стили playground: layout, navigation, карточки сценариев, демо-зоны и базовые визуальные состояния на generated CSS token variables.

### Playground scenarios

- `playground/scenarios/global-colors.tsx` - сценарий просмотра global color palettes и CSS variables.
- `playground/scenarios/index.ts` - агрегатор playground scenarios. Держит список сценариев в одном entrypoint для `playground/main.tsx`.
- `playground/scenarios/theme-colors.tsx` - сценарии просмотра Theme Colors: общий usage-раздел и детальные разделы Neutral, Primary, Status и Extra для Base / Text / Stroke через общие Storybook templates.
- `playground/scenarios/radius.tsx` - сценарий просмотра radius rules, групп компонентов и таблиц расчета скруглений.
- `playground/scenarios/shadows.tsx` - сценарий просмотра shadow tokens.
- `playground/scenarios/themes.tsx` - сценарии просмотра четырех theme modes и локального переключения темы для участка интерфейса.
- `playground/scenarios/token-usage-examples.tsx` - сценарий с примерами использования токенов и кастомной primary palette в playground.
- `playground/scenarios/tokens-css.component.tsx` - React-компоненты, используемые сценарием CSS token imports.
- `playground/scenarios/tokens-css.tsx` - сценарий проверки CSS subpath imports и применения generated CSS variables.
- `playground/scenarios/tokens-styled.component.tsx` - React/styled-components компоненты для проверки theme objects.
- `playground/scenarios/tokens-styled.tsx` - сценарий проверки использования токенов через `styled-components` theme.
- `playground/scenarios/typography.tsx` - сценарий просмотра typography primitives, text styles и HTML tag mappings.

## Scripts

- `scripts/build-css.test.ts` - unit tests для CSS build helpers. Проверяет состав generated files, headers, CSS variable references, fallback behavior и контракты генерации.
- `scripts/build-css.ts` - генератор публичных CSS assets. Превращает `src/css-data.ts` в `dist/css/*.css`, содержит pure helpers для flattening/rendering variables и CLI write step.
- `scripts/build-dts.ts` - post-build скрипт для declaration bundles. Через Rollup и `rollup-plugin-dts` сворачивает публичные `.d.ts` entrypoints и заменяет исходные файлы bundled версиями.

### npm scripts

- `check:fix` - автоисправление форматирования и ESLint.
- `check:full` - полный обязательный локальный прогон: format check, lint, typecheck, unit и e2e.
- `storybook` - запуск Storybook из исходников без предварительной сборки CSS.
- `playground` - генерация CSS-токенов и запуск Vite playground с hot reload.
- `release` - подготовка версии и changelog через `standard-version`.
- `build`, `build:css`, `storybook:build`, `playground:build`, `playground:serve`, `pack:check`, `test:*`, `lint:*`, `format:*`, `typecheck` - служебные команды для CI, e2e, разработки и составных потоков.

## Source root

- `src/css-data.ts` - внутренний агрегатор данных для `scripts/build-css.ts`. Экспортирует global colors, radius, shadow, typography primitives, text styles и theme color references без публикации отдельного subpath.
- `src/index.ts` - root public API. Реэкспортирует themes, build helpers, агрегированные color/radius/shadow token maps, typography API и публичные типы пакета; внутренние color shorthand maps не выводятся отдельными root-экспортами.
- `src/styled-components.ts` - public `./styled-components` subpath. Расширяет `styled-components` `DefaultTheme` типом `BuiltTheme`.
- `src/vite-env.d.ts` - Vite ambient declarations для TypeScript.

## Fonts subpath

- `src/fonts/FontsSourceCodePro.tsx` - React component, который вставляет `@font-face` правила для Source Code Pro 400/500 latin и cyrillic subsets из `@fontsource/source-code-pro`.
- `src/fonts/FontsVTBGroup.tsx` - React component, который вставляет `@font-face` правила для VTB Group UI fonts.
- `src/fonts/font.d.ts` - ambient declarations для импортов font assets из `@admiral-ds/fonts` и `@fontsource/source-code-pro`.
- `src/fonts/index.ts` - public `./fonts` subpath entrypoint. Экспортирует `FontsSourceCodePro` и `FontsVTBGroup`.

## Test setup

- `src/test/setup.ts` - setup file для Vitest. Подключает `@testing-library/jest-dom` matchers и общие настройки тестовой среды.

## Tokens: colors

### Color entrypoints and helpers

- `src/tokens/color/index.ts` - public color barrel. Реэкспортирует global colors, theme colors, palette generator и CSS helper types/functions.
- `src/tokens/color/resolveGlobalColorReference.ts` - helpers для global color overrides и разрешения строковых ссылок вида `primary.primary110` в реальные значения.

### Global color source

- `src/tokens/color/globalColors/extra.ts` - source tokens для дополнительной global palette.
- `src/tokens/color/globalColors/generateAdmiralPalette.test.ts` - unit tests для генерации Admiral palette и CSS variable helpers.
- `src/tokens/color/globalColors/generateAdmiralPalette.ts` - generator branded palette на базе hex color через OKLCH, а также helpers для CSS variables/CSS block.
- `src/tokens/color/globalColors/index.ts` - агрегатор global palettes и связанных exports.
- `src/tokens/color/globalColors/neutral.ts` - source tokens для neutral global palette.
- `src/tokens/color/globalColors/opacity.ts` - source tokens для opacity global palette.
- `src/tokens/color/globalColors/primary.ts` - source tokens для primary global palette.
- `src/tokens/color/globalColors/status.ts` - source tokens для status global palette.

### Global color stories

- `src/tokens/color/globalColors/stories/GlobalColors.stories.tsx` - Storybook CSF файл для просмотра global colors.
- `src/tokens/color/globalColors/stories/GlobalColorsPalette.args.ts` - Storybook args/data для палитр global colors.
- `src/tokens/color/globalColors/stories/GlobalColorsPalette.template.tsx` - пример/template визуализации палитр global colors; подробно не разбирается.

### Theme colors

- `src/tokens/color/themeColors/index.ts` - агрегатор semantic theme colors: base, text, stroke, shadow.
- `src/tokens/color/themeColors/stories/ThemeColors.stories.tsx` - Storybook CSF файл для сценариев Theme Colors.
- `src/tokens/color/themeColors/stories/ThemeColors.template.tsx` - пример/template общей информации по Theme Colors; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsSections.template.tsx` - общий source-driven renderer для Theme Colors разделов Neutral / Primary / Status / Extra; строит группы и states из token source.
- `src/tokens/color/themeColors/stories/ThemeColorsSections.config.ts` - общие настройки Theme Colors renderer: палитры Status/Extra, подписи разделов и описания групп.
- `src/tokens/color/themeColors/stories/ThemeColorsNeutralBase.template.tsx` - пример/template раздела Neutral / Base с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsNeutralText.template.tsx` - пример/template раздела Neutral / Text с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsNeutralStroke.template.tsx` - пример/template раздела Neutral / Stroke с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsPrimaryBase.template.tsx` - пример/template раздела Primary / Base с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsPrimaryText.template.tsx` - пример/template раздела Primary / Text с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsPrimaryStroke.template.tsx` - пример/template раздела Primary / Stroke с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsStatusBase.template.tsx` - пример/template раздела Status / Base с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsStatusText.template.tsx` - пример/template раздела Status / Text с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsStatusStroke.template.tsx` - пример/template раздела Status / Stroke с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsExtraBase.template.tsx` - пример/template раздела Extra / Base с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsExtraText.template.tsx` - пример/template раздела Extra / Text с актуальными значениями выбранной темы; подробно не разбирается.
- `src/tokens/color/themeColors/stories/ThemeColorsExtraStroke.template.tsx` - пример/template раздела Extra / Stroke с актуальными значениями выбранной темы; подробно не разбирается.

#### Base semantic colors

- `src/tokens/color/themeColors/base/extra.ts` - base/extra semantic color references по theme modes.
- `src/tokens/color/themeColors/base/index.ts` - агрегатор base semantic color groups.
- `src/tokens/color/themeColors/base/neutral.ts` - base/neutral semantic color references по theme modes.
- `src/tokens/color/themeColors/base/primary.ts` - base/primary semantic color references по theme modes.
- `src/tokens/color/themeColors/base/status.ts` - base/status semantic color references по theme modes.

#### Shadow semantic colors

- `src/tokens/color/themeColors/shadow/index.ts` - агрегатор shadow semantic colors.
- `src/tokens/color/themeColors/shadow/shadow.ts` - theme-dependent color references для слоев shadows.

#### Stroke semantic colors

- `src/tokens/color/themeColors/stroke/extra.ts` - stroke/extra semantic color references по theme modes.
- `src/tokens/color/themeColors/stroke/index.ts` - агрегатор stroke semantic color groups.
- `src/tokens/color/themeColors/stroke/neutral.ts` - stroke/neutral semantic color references по theme modes.
- `src/tokens/color/themeColors/stroke/primary.ts` - stroke/primary semantic color references по theme modes.
- `src/tokens/color/themeColors/stroke/status.ts` - stroke/status semantic color references по theme modes.

#### Text semantic colors

- `src/tokens/color/themeColors/text/extra.ts` - text/extra semantic color references по theme modes.
- `src/tokens/color/themeColors/text/index.ts` - агрегатор text semantic color groups.
- `src/tokens/color/themeColors/text/neutral.ts` - text/neutral semantic color references по theme modes.
- `src/tokens/color/themeColors/text/primary.ts` - text/primary semantic color references по theme modes.
- `src/tokens/color/themeColors/text/status.ts` - text/status semantic color references по theme modes.

## Tokens: radius

- `src/tokens/radius/index.ts` - public radius barrel. Экспортирует radius token map и типы.
- `src/tokens/radius/radius.ts` - source of truth для radius tokens и строковых алиасов.
- `src/tokens/radius/stories/Radius.args.ts` - данные/args для Storybook radius.
- `src/tokens/radius/stories/Radius.stories.tsx` - Storybook CSF файл для radius.
- `src/tokens/radius/stories/Radius.template.tsx` - пример/template визуализации radius rules; подробно не разбирается.
- `src/tokens/radius/stories/RadiusGroups.template.tsx` - отдельный интерактивный пример групп скруглений small/medium/large.

## Tokens: shadow

- `src/tokens/shadow/index.ts` - public shadow barrel. Экспортирует shadow token map и типы.
- `src/tokens/shadow/shadow.ts` - source of truth для shadow geometry: offsets, blur и references на theme shadow colors.
- `src/tokens/shadow/stories/Shadows.args.ts` - данные/args для Storybook shadows.
- `src/tokens/shadow/stories/Shadows.stories.tsx` - Storybook CSF файл для shadows.
- `src/tokens/shadow/stories/Shadows.template.tsx` - пример/template визуализации shadow tokens; подробно не разбирается.

## Tokens: shared stories

- `src/tokens/stories/TokenUsageExamples.stories.tsx` - Storybook CSF файл с примерами использования токенов, включая custom primary palette.
- `src/tokens/stories/CustomPrimaryPalette.template.tsx` - пример/template для custom primary palette.
- `src/tokens/stories/HelpersAndFonts.template.tsx` - пример/template использования public helpers для палитр, CSS variables, theme overrides и font helpers; подробно не разбирается.
- `src/tokens/stories/TokenUsageExamples.template.tsx` - пример/template использования CSS tokens, styled theme и typography; подробно не разбирается.

## Tokens: themes

- `src/tokens/themes/buildTheme.test.ts` - unit tests для `buildTheme`, `buildThemes`, theme modes, aliases, overrides и resolved values.
- `src/tokens/themes/buildTheme.ts` - core theme builder. Собирает theme objects из semantic color references, global color overrides, radius и shadows; добавляет строковые aliases.
- `src/tokens/themes/dark.ts` - готовый `darkTheme`, построенный через `buildTheme('dark')`.
- `src/tokens/themes/darkNeutral.ts` - готовый `darkNeutralTheme`, построенный через `buildTheme('darkNeutral')`.
- `src/tokens/themes/index.ts` - public themes barrel. Экспортирует готовые темы, builders, modes и public theme types.
- `src/tokens/themes/light.ts` - готовый `lightTheme`, построенный через `buildTheme('light')`.
- `src/tokens/themes/lightNeutral.ts` - готовый `lightNeutralTheme`, построенный через `buildTheme('lightNeutral')`.
- `src/tokens/themes/stories/Themes.stories.tsx` - Storybook CSF файл для theme modes и локального theme scope.
- `src/tokens/themes/stories/ThemesOverview.template.tsx` - пример/template с описанием `light`, `lightNeutral`, `dark`, `darkNeutral`.
- `src/tokens/themes/stories/ComponentThemeScope.template.tsx` - пример/template локального переключения темы через вложенный `ThemeProvider`.

## Tokens: typography

- `src/tokens/typography/index.test.ts` - unit tests для typography aliases и public typography shape.
- `src/tokens/typography/index.ts` - public typography barrel. Экспортирует primitives, text styles, explicit string aliases и public types.
- `src/tokens/typography/primitives.ts` - source of truth для font families, weights, sizes и line heights.
- `src/tokens/typography/textStyles.ts` - source of truth для semantic text styles: header, subtitle, body, button, caption, monospace.
- `src/tokens/typography/stories/Typography.args.ts` - данные/args для Storybook typography.
- `src/tokens/typography/stories/Typography.stories.tsx` - Storybook CSF файл для typography.
- `src/tokens/typography/stories/Typography.template.tsx` - пример/template визуализации typography text styles; подробно не разбирается.
- `src/tokens/typography/stories/TypographyTags.template.tsx` - пример/template проверки typography styles на HTML tags; подробно не разбирается.

## Tests

- `tests/TESTING_README.md` - правила организации unit/e2e tests, Storybook stories и playground scenarios.
- `tests/e2e/utils.ts` - shared Playwright helpers для навигации по playground.
- `tests/e2e/Tokens/tokens.spec.ts` - e2e integration checks для CSS exports, styled-components theme objects, playground navigation, ключевых token scenarios и fonts helpers.

## Публичные entrypoints пакета

`package.json` объявляет следующие публичные entrypoints:

- `@admiral-ds/admiral3-tokens` - root JS/TS API из `src/index.ts`.
- `@admiral-ds/admiral3-tokens/fonts` - React fonts helpers из `src/fonts/index.ts`.
- `@admiral-ds/admiral3-tokens/styled-components` - type augmentation из `src/styled-components.ts`.
- `@admiral-ds/admiral3-tokens/css` - полный CSS bundle `dist/css/index.css`.
- `@admiral-ds/admiral3-tokens/css/global-colors` - generated global colors CSS.
- `@admiral-ds/admiral3-tokens/css/themes` - generated combined theme CSS.
- `@admiral-ds/admiral3-tokens/css/typography` - generated typography CSS.
- `@admiral-ds/admiral3-tokens/css/radius` - generated radius CSS.
- `@admiral-ds/admiral3-tokens/css/shadow` - generated shadow CSS.
- `@admiral-ds/admiral3-tokens/css/theme-light` - generated standalone light theme CSS.
- `@admiral-ds/admiral3-tokens/css/theme-dark` - generated standalone dark theme CSS.
- `@admiral-ds/admiral3-tokens/css/theme-light-neutral` - generated standalone light neutral theme CSS.
- `@admiral-ds/admiral3-tokens/css/theme-dark-neutral` - generated standalone dark neutral theme CSS.

## Что не должно попадать в Git

Эти директории и файлы могут существовать локально, но не являются source files проекта:

- `node_modules/` - установленные зависимости.
- `dist/` - build output пакета.
- `dist-playground/` - build output internal playground.
- `storybook-static/` - build output Storybook.
- `playwright-report/` - HTML отчет Playwright.
- `test-results/` - служебные результаты Playwright.
- `.env` - локальные переменные окружения.
- `.DS_Store` - системный файл macOS.

Если один из таких файлов появляется в `git status`, сначала нужно проверить `.gitignore` и понять, не является ли это ошибкой конфигурации.
