import type { ShadowsTemplateProps } from './Shadows.template';

export const shadowsTemplateArgs = {
  blocks: [{ themeName: 'light' }, { themeName: 'dark' }],
} satisfies ShadowsTemplateProps;
