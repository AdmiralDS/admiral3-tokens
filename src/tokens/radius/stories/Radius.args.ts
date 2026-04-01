import { cornerRadiusOptions, radius } from '../radius';
import type { CornerRadiusBase, RadiusGroup } from '../radius';

export type RadiusRuleGroup = {
  name: 'Small' | 'Normal' | 'Large';
  group: RadiusGroup;
  components: string;
};

export type RadiusTable = {
  base: CornerRadiusBase;
  rows: {
    components: string;
    groupName: RadiusRuleGroup['name'];
    value: string;
  }[];
};

export const radiusRuleGroups: RadiusRuleGroup[] = [
  {
    name: 'Small',
    group: 'small',
    components: 'Checkbox, Pills, Tag, Tooltip',
  },
  {
    name: 'Normal',
    group: 'medium',
    components: 'Все остальные компоненты',
  },
  {
    name: 'Large',
    group: 'large',
    components: 'Modal',
  },
];

export const radiusTables: RadiusTable[] = cornerRadiusOptions.map((base) => ({
  base,
  rows: radiusRuleGroups.map(({ components, group, name }) => ({
    components,
    groupName: name,
    value: radius.byBase[base][group].replace('px', ''),
  })),
}));

export const radiusTemplateArgs = {
  tables: radiusTables,
};
