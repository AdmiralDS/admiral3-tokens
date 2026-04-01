import type { ThemeColorsSectionsTemplateConfig } from './ThemeColorsSections.template';

type ThemeColorSection = ThemeColorsSectionsTemplateConfig['themeSection'];
type ThemeColorTokenGroup = ThemeColorsSectionsTemplateConfig['tokenGroup'];

/**
 * Опции для создания конфига секции Theme Colors.
 *
 * Вызывающий код выбирает source map, целевую секцию темы и группу токенов, а
 * фабрика добавляет общие подписи, семантические палитры и описания групп.
 */
type CreateThemeColorsSectionsConfigOptions = {
  /** Source token references, которые используются для рендера секции. */
  readonly source: ThemeColorsSectionsTemplateConfig['source'];
  /** Режим source map: текущий theme mode или сокращенная light/dark-карта. */
  readonly sourceMode?: ThemeColorsSectionsTemplateConfig['sourceMode'];
  /** Секция theme colors, которую рендерит story: base, text или stroke. */
  readonly themeSection: ThemeColorSection;
  /** Группа токенов, которую рендерит story: neutral, primary, status или extra. */
  readonly tokenGroup: ThemeColorTokenGroup;
};

/** Семантические status-палитры, которые показываются отдельными подсекциями. */
const statusPalettes = [
  { key: 'error', title: 'Error' },
  { key: 'success', title: 'Success' },
  { key: 'warning', title: 'Warning' },
  { key: 'attention', title: 'Attention' },
] as const;

/** Дополнительные accent-палитры, которые показываются отдельными подсекциями. */
const extraPalettes = [
  { key: 'blue', title: 'Blue' },
  { key: 'purple', title: 'Purple' },
  { key: 'magenta', title: 'Magenta' },
  { key: 'teal', title: 'Teal' },
] as const;

/** Общие настройки отображения для групп токенов Theme Colors. */
const themeColorTokenGroups = {
  neutral: {
    titlePrefix: 'Neutral',
  },
  primary: {
    titlePrefix: 'Primary',
  },
  status: {
    titlePrefix: 'Status',
    palettes: statusPalettes,
  },
  extra: {
    titlePrefix: 'Extra',
    palettes: extraPalettes,
  },
} as const;

/** Описания групп, которые отображаются под заголовками секций в Theme Colors stories. */
const descriptions = {
  neutral: {
    base: {
      base1: 'Основной цвет фона страниц и форм',
      base2: 'Альтернативный цвет фона страниц и форм',
      base3: 'Третичный цвет фона',
      base4: 'Редкие сценарии',
      elevated: 'Цвет фона «приподнятых» относительно основного фона объектов – Dropdown Menu, Modal, Hint',
      invisible: 'Цвет фона элементов с полностью прозрачным активным фоном',
      invisibleStatic: 'Цвет фона элементов с полностью прозрачным активным фоном на темных поверхностях',
      opacity: 'Прозрачный цвет фона компонентов',
      opacitySubtle: 'Альтернативный прозрачный цвет фона компонентов',
      opacityStatic: 'Статичный прозрачный цвет фона элементов на темных поверхностях',
      inverted: 'Фон темных компонентов в светлой теме',
      darkStatic: 'Статичный фон темных поверхностей',
      overlay: 'Цвет затемнения экрана при всплывающих окнах, например модальных',
      scrollbar: 'Цвет скроллбара',
    },
    text: {
      text1: 'Основной цвет текста',
      text2: 'Вторичный цвет текста, основной цвет иконок',
      text3: 'Третичный цвет текста',
      disable: 'Disable цвет текста и иконок',
      staticWhite: 'Статичный белый цвет, остается белым в темной теме',
      staticBlack: 'Статичный черный цвет',
      inverted: 'Инвертированный цвет иконок и текста',
    },
    stroke: {
      stroke1: 'Основной цвет линий, разделителей',
      stroke2: 'Цвет обводки различных компонентов',
      subtle: 'Цвет линий и обводок с пониженным контрастом',
      hard: 'Цвет линий и обводок с повышенным контрастом',
      hardest: 'Цвет линий и обводок с максимальным контрастом',
      staticWhite: 'Статичный белый цвет, остается белым в темной теме',
    },
  },
  primary: {
    base: {
      base1: 'Основной интерактивный цвет фонов',
      base2: 'Вторичный цвет фонов',
      base3: 'Третичный интерактивный цвет фонов',
      inverted: 'Инвертированный интерактивный цвет фонов',
    },
    text: {
      text1: 'Основной интерактивный цвет текста и иконок',
      link: 'Основной интерактивный цвет текста и иконок',
      inverted: 'Инвертированный интерактивный цвет текста и иконок',
    },
    stroke: {
      stroke1: 'Основной цвет линий и обводок',
      stroke2: 'Вторичный цвет линий и обводок',
      stroke3: 'Третичный цвет линий и обводок',
      inverted: 'Инвертированный цвет линий и обводок',
    },
  },
  status: {
    base: {
      base1: 'Основной цвет',
      base2: 'Вторичный цвет',
      base3: 'Третичный цвет',
    },
    text: {
      text1: 'Основной цвет',
    },
    stroke: {
      stroke1: 'Основной цвет',
      stroke2: 'Вторичный цвет',
    },
  },
  extra: {
    base: {
      base1: 'Основной цвет',
      base2: 'Вторичный цвет',
      base3: 'Третичный цвет',
    },
    text: {
      text1: 'Основной цвет',
    },
    stroke: {
      stroke1: 'Основной цвет',
      stroke2: 'Вторичный цвет',
    },
  },
} as const;

/**
 * Создает нормализованный конфиг для source-driven Theme Colors templates.
 *
 * Neutral и primary группы рендерятся напрямую из выбранного source mode.
 * Status и extra группы дополнительно получают метаданные палитр, чтобы общий
 * template мог рендерить каждую семантическую палитру без захардкоженной
 * разметки story.
 */
export const createThemeColorsSectionsConfig = ({
  source,
  sourceMode = 'theme',
  themeSection,
  tokenGroup,
}: CreateThemeColorsSectionsConfigOptions): ThemeColorsSectionsTemplateConfig => {
  const tokenGroupConfig = themeColorTokenGroups[tokenGroup];

  return {
    source,
    sourceMode,
    themeSection,
    tokenGroup,
    titlePrefix: tokenGroupConfig.titlePrefix,
    palettes: 'palettes' in tokenGroupConfig ? tokenGroupConfig.palettes : undefined,
    descriptions: descriptions[tokenGroup][themeSection],
  };
};
