## Общая информация

В проекте используются два контура тестирования:

1. `Vitest`

- используется для unit-тестов токенов, helpers, утилит и React helpers;
- unit-тесты должны лежать рядом с исходниками проверяемого кода.

2. `Playwright`

- используется для e2e и smoke-проверок через internal playground;
- e2e-тесты должны лежать в папке `tests/e2e`.

## Обязательная структура тестов

Для каждой проверяемой области должна существовать своя тестовая область.

Обязательные правила:

1. Unit-тесты должны лежать рядом с исходниками проверяемого кода.
2. E2E-тесты должны лежать в отдельной папке внутри `tests/e2e`, названной по проверяемой области.
3. Нельзя складывать e2e-спеки разных областей в корень `tests/e2e`.
4. Нельзя хранить тесты одной области в папке другой области.

Пример структуры:

```text
src/tokens/themes/buildTheme.test.ts
src/tokens/stories/TokenUsageExamples.stories.tsx
src/tokens/stories/TokenUsageExamples.template.tsx
playground/scenarios/token-usage-examples.tsx
tests/e2e/Tokens/tokens.spec.ts
```

## Обязательная структура Storybook stories

Если область покрывается через Storybook, stories должны быть организованы по следующему правилу:

1. В папке проверяемой области должна существовать папка `stories`.
2. В папке `stories` должен быть один входной CSF-файл `AreaName.stories.tsx`.
3. Входной `*.stories.tsx` файл должен оставаться тонким: в нем должен находиться `meta` и экспорт историй.
4. Переиспользуемые `render`, `args`, template-конфиги и вспомогательные части stories должны выноситься в отдельные файлы внутри той же папки `stories`.
5. Дополнительные template-файлы не должны называться `*.stories.tsx`, чтобы Storybook не индексировал их как отдельные entry points.

Пример:

```text
src/tokens/stories/TokenUsageExamples.stories.tsx
src/tokens/stories/TokenUsageExamples.template.tsx
```

`*.template.tsx` могут использоваться по-разному:

- публичные templates могут импортироваться в `*.stories.tsx` и попадать в Storybook;
- внутренние templates могут не импортироваться в `*.stories.tsx` и использоваться только в internal playground для e2e.

Общие вспомогательные сущности для e2e должны храниться в shared-файлах внутри `tests/e2e`.

- `utils.ts` - для общих helper-функций.

Если для e2e-тестов понадобятся новые общие helper-функции или константы, их нужно добавлять в shared-файлы внутри `tests/e2e`, а не дублировать по компонентным папкам. Не добавляйте shared-файлы "на будущее": они должны появляться только при реальном переиспользовании.

## Установка браузеров для Playwright

В проекте используется Playwright `1.60.0` или выше, чтобы установка браузеров не попадала в известную регрессию старых версий.

```shell
npx playwright install --with-deps
```

Дополнительная информация есть в официальной документации:
https://playwright.dev/docs/browsers

## Запуск тестов

### Playwright

```shell
npm run test:e2e
```

Запуск в UI-режиме:

```shell
npm run test:e2e-ui
```

### Vitest

Одноразовый прогон:

```shell
npm run test
```

Режим наблюдения:

```shell
npm run test:watch
```

Дополнительно доступна явная команда:

```shell
npm run test:run
```

## Workers

Количество workers для Playwright можно настроить через переменную `PW_WORKERS` в `.env` в корне проекта.

Пример:

```dotenv
PW_WORKERS='3'
```

По умолчанию используется `1`.

## Подход к e2e через internal playground

Для e2e используется отдельный internal playground:

1. Пакет собирается через `npm run build`, чтобы подготовить `dist` и generated CSS.
2. Playground собирается через `npm run playground:build`.
3. Готовая сборка поднимается статически через `npm run playground:serve`.
4. Playwright ходит в сценарии playground по query-параметру `scenario`.

Storybook при этом остаётся витриной компонентов, docs-слоем и местом для a11y-проверок, но не рантаймом для e2e.

E2E-проверки должны покрывать только browser/runtime контракты, которые плохо проверяются unit-тестами:

1. публичные CSS exports реально применяются после сборки пакета;
2. exported theme objects работают через `styled-components` `ThemeProvider`;
3. переключение тем меняет computed styles, а не только текст или атрибуты;
4. ключевые playground-сценарии монтируются без runtime errors;
5. React helpers публичных subpath exports, например fonts helpers, монтируются в браузере.

Не нужно проверять через Playwright все значения токенов, все строки таблиц или всю CSS-генерацию. Такие проверки должны оставаться в unit-тестах рядом с source of truth или build scripts.

### Как добавлять сценарии в playground

Структура сценариев в `playground/scenarios` разделена по областям токенов и связанным сценариям.
Playground не является полной копией Storybook: добавляйте сюда только те templates и сценарии, которые нужно покрывать через e2e или использовать для browser/runtime integration checks.

Текущий паттерн:

```text
playground/scenarios/
  token-usage-examples.tsx
  tokens-css.tsx
  index.ts
```

Правила:

1. Для каждой области или группы связанных e2e-сценариев нужно заводить отдельный файл в `playground/scenarios`.
2. `playground/scenarios/index.ts` должен оставаться реестром и только собирать общий массив `playgroundScenarios`.
3. В файл сценариев нужно импортировать нужные templates и описывать массив сценариев компонента.
4. `id` сценария должен быть уникальным и стабильным, потому что именно он используется в `?scenario=...` и в Playwright-тестах.
5. `title` сценария используется в левом меню playground.

Пример:

```tsx
export const tokenCssScenarios: PlaygroundScenario[] = [
  {
    id: 'tokens/css',
    title: 'Tokens CSS import',
    render: () => <TokenCssExample />,
  },
];
```

После добавления нового сценария нужно:

1. Подключить файл сценариев в `playground/scenarios/index.ts`.
2. Добавить или обновить e2e-спеку в `tests/e2e/...`, если сценарий должен покрываться Playwright.

Если новый Storybook template не требует e2e-покрытия, добавлять его в playground не нужно.

## Рекомендации

Каждый тест должен быть независимым:

1. Не зависеть от порядка выполнения.
2. Не делить состояние с другими тестами.
3. Самостоятельно подготавливать нужные данные.
4. Не опираться на побочные эффекты других сценариев.

Каждый тест должен проверять одну конкретную вещь:

1. Если тест падает, должно быть сразу понятно, что сломалось.
2. Не стоит объединять в один сценарий много разных проверок без необходимости.

## Вспомогательные функции

Общие helper-функции для e2e находятся в `tests/e2e/utils.ts`.

Описание назначения и правил использования helper-функций должно поддерживаться в документации прямо рядом с их реализацией, в самом файле `utils.ts`.
