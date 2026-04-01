import type { TypographyColorToken, TypographySection, TypographyTemplateProps } from './Typography.template';

const neutralColors = [
  { cssVariable: '--admiral-color-text-neutral-text1-rest', tokenName: 'Text/Neutral/Text 1/Rest' },
  { cssVariable: '--admiral-color-text-neutral-text2-rest', tokenName: 'Text/Neutral/Text 2/Rest' },
  { cssVariable: '--admiral-color-text-neutral-static-white-1', tokenName: 'Text/Neutral/Static White/1' },
] satisfies TypographyColorToken[];

const fullColors = [
  { cssVariable: '--admiral-color-text-neutral-text1-rest', tokenName: 'Text/Neutral/Text 1/Rest' },
  { cssVariable: '--admiral-color-text-neutral-text2-rest', tokenName: 'Text/Neutral/Text 2/Rest' },
  { cssVariable: '--admiral-color-text-neutral-text3-rest', tokenName: 'Text/Neutral/Text 3/Rest' },
  { cssVariable: '--admiral-color-text-neutral-disable-rest', tokenName: 'Text/Neutral/Disable/Rest' },
  { cssVariable: '--admiral-color-text-neutral-static-white-1', tokenName: 'Text/Neutral/Static White/1' },
  { cssVariable: '--admiral-color-text-primary-link-rest', tokenName: 'Text/Primary/Link/Rest' },
  { cssVariable: '--admiral-color-text-status-error-text1-rest', tokenName: 'Text/Status/Error/Text 1/Rest' },
  { cssVariable: '--admiral-color-text-status-success-text1-rest', tokenName: 'Text/Status/Success/Text 1/Rest' },
] satisfies TypographyColorToken[];

const headersTypographyArgs = {
  title: 'Headers',
  colorTokens: neutralColors,
  rows: [
    {
      name: 'HL1',
      styleName: 'Header/HL1',
      description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
    },
    {
      name: 'HL2',
      styleName: 'Header/HL2',
      description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
    },
    {
      name: 'HL3',
      styleName: 'Header/HL3',
      description: 'Большой заголовок для лендингов. Не применяется на мобильных устройствах.',
    },
    {
      name: 'H1',
      styleName: 'Header/H1',
      description:
        'Заголовок первого уровня. Используется в случаях, когда много пространства и используются компоненты размера XL',
    },
    {
      name: 'H2',
      styleName: 'Header/H2',
      description:
        'Заголовок второго уровня. Используется в случаях, когда много пространства и используются компоненты размера L',
    },
    {
      name: 'H3',
      styleName: 'Header/H3',
      description:
        'Заголовок третьего уровня. Как правило, самый большой размер для стандартных интерфейсов размера M и S',
    },
    {
      name: 'H4',
      styleName: 'Header/H4',
      description: 'Заголовок четвертого уровня. Рекомендуемый максимальный размер заголовка для мобильных устройств',
    },
    {
      name: 'H5',
      styleName: 'Header/H5',
      description: 'Заголовок пятого уровня',
    },
    {
      name: 'H6',
      styleName: 'Header/H6',
      description: 'Заголовок шестого уровня',
    },
  ],
} satisfies TypographySection;

const subtitlesTypographyArgs = {
  title: 'Subtitles',
  colorTokens: neutralColors,
  rows: [
    {
      name: 'Subtitle 1',
      styleName: 'Subtitle/Subtitle 1',
      description: 'Крупный шрифт параграфа, может использоваться как подзаголовок',
    },
    {
      name: 'Subtitle 2',
      styleName: 'Subtitle/Subtitle 2',
      description: 'Акцентированный текст, подзаголовок',
    },
    {
      name: 'Subtitle 3',
      styleName: 'Subtitle/Subtitle 3',
      description: 'Акцентированный текст, подзаголовок',
    },
    {
      name: 'Subtitle 4',
      styleName: 'Subtitle/Subtitle 4',
      description: 'Акцентированный текст',
    },
  ],
} satisfies TypographySection;

const bodyTypographyArgs = {
  title: 'Body',
  colorTokens: fullColors,
  rows: [
    {
      name: 'Body 1 Long',
      styleName: 'Body/Body 1 Long',
      description: 'Основной шрифт первого уровня для набора больших текстов',
    },
    {
      name: 'Body 1 Short',
      styleName: 'Body/Body 1 Short',
      description: 'Шрифт первого уровня для набора коротких текстов в 1-2 строки (не обязательный сценарий)',
    },
    {
      name: 'Body 2 Long',
      styleName: 'Body/Body 2 Long',
      description: 'Основной шрифт второго уровня для набора больших текстов',
    },
    {
      name: 'Body 2 Short',
      styleName: 'Body/Body 2 Short',
      description: 'Шрифт второго уровня для набора коротких текстов в 1-2 строки (не обязательный сценарий)',
    },
  ],
} satisfies TypographySection;

const buttonTypographyArgs = {
  title: 'Button',
  colorTokens: fullColors,
  rows: [
    {
      name: 'Button 1',
      styleName: 'Button/Button 1',
      description: 'Шрифт в кнопках первого уровня',
    },
    {
      name: 'Button 2',
      styleName: 'Button/Button 2',
      description: 'Шрифт в кнопках второго уровня',
    },
    {
      name: 'Button 3',
      styleName: 'Button/Button 3',
      description: 'Шрифт в кнопках третьего уровня',
    },
  ],
} satisfies TypographySection;

const captionTypographyArgs = {
  title: 'Caption',
  colorTokens: fullColors,
  rows: [
    {
      name: 'Caption 1',
      styleName: 'Caption/Caption 1',
      description:
        'Применяется в компонентах, сносках, примечаниях, счетчиках и тд. Не рекомендуется для набора больших текстов.',
    },
    {
      name: 'Caption 2',
      styleName: 'Caption/Caption 2',
      description:
        'Самый маленький шрифт системы. Не используется в компонентах системы, не рекомендуется для набора текстов. Использовать только в крайних случаях.',
    },
  ],
} satisfies TypographySection;

const monospaceTypographyArgs = {
  title: 'Monospace (Source Code Pro)',
  rows: [
    {
      name: 'Mono 1',
      styleName: 'Monospace/Mono 1',
      description: 'Маски, приложения для разработчиков',
    },
    {
      name: 'Mono 2',
      styleName: 'Monospace/Mono 2',
      description: 'Маски, приложения для разработчиков',
    },
    {
      name: 'Mono 3',
      styleName: 'Monospace/Mono 3',
      description: 'Маски, приложения для разработчиков',
    },
  ],
} satisfies TypographySection;

export const typographyArgs = {
  title: 'Typography',
  sections: [
    headersTypographyArgs,
    subtitlesTypographyArgs,
    bodyTypographyArgs,
    buttonTypographyArgs,
    captionTypographyArgs,
    monospaceTypographyArgs,
  ],
} satisfies TypographyTemplateProps;
