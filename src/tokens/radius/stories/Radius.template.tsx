import { styled } from 'styled-components';

import { radius, typography } from '@admiral-ds/admiral3-tokens';

import type { RadiusTable } from './Radius.args';

export type RadiusTemplateProps = {
  tables: RadiusTable[];
};

const StyledPage = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 24px 32px 64px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  background: var(--admiral-color-base-neutral-base1-rest, ${({ theme }) => theme.color.base.neutral.base1.rest});

  @media (max-width: 720px) {
    padding: 20px 16px 48px;
  }
`;

const StyledContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

const StyledSection = styled.section`
  &:not(:first-child) {
    margin-top: 72px;
  }
`;

const StyledSectionTitle = styled.h2`
  margin: 0 0 28px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  ${typography['Header/H5']}
`;

const StyledText = styled.p`
  max-width: 820px;
  margin: 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  ${typography['Body/Body 1 Long']}

  & + & {
    margin-top: 24px;
  }
`;

const StyledGroupList = styled.dl`
  display: grid;
  grid-template-columns: max-content minmax(0, 1fr);
  gap: 4px 8px;
  max-width: 860px;
  margin: 32px 0 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  ${typography['Body/Body 1 Long']}

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    gap: 2px;
  }
`;

const StyledGroupName = styled.dt`
  font-weight: ${typography.primitives.fontWeight.semibold};
`;

const StyledGroupDescription = styled.dd`
  min-width: 0;
  margin: 0;

  @media (max-width: 620px) {
    margin-bottom: 10px;
  }
`;

const StyledTables = styled.div`
  display: grid;
  gap: 22px;
  max-width: 960px;
  margin-top: 48px;
`;

const StyledTableShell = styled.article`
  min-width: 0;
  padding: 24px;
  overflow-x: auto;
  background: var(--admiral-color-base-neutral-base2-rest, ${({ theme }) => theme.color.base.neutral.base2.rest});
  border-radius: ${({ theme }) => theme.radius.byBase['8'].small};

  @media (max-width: 720px) {
    padding: 16px;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  min-width: 680px;
  border-collapse: collapse;
  background: var(--admiral-color-base-neutral-base1-rest, ${({ theme }) => theme.color.base.neutral.base1.rest});
  ${typography['Body/Body 1 Long']}
`;

const StyledHeaderCell = styled.th`
  padding: 14px 18px;
  text-align: left;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  border-bottom: 1px solid
    var(--admiral-color-stroke-neutral-subtle-rest, ${({ theme }) => theme.color.stroke.neutral.subtle.rest});
  ${typography['Subtitle/Subtitle 2']}
`;

const StyledCell = styled.td`
  padding: 14px 18px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  border-top: 1px solid
    var(--admiral-color-stroke-neutral-subtle-rest, ${({ theme }) => theme.color.stroke.neutral.subtle.rest});
`;

const StyledFirstColumnHeader = styled(StyledHeaderCell)`
  width: 58%;
`;

const StyledDemo = styled.div`
  display: grid;
  gap: 16px;
  width: min(100%, 360px);
  margin-top: 28px;
`;

const StyledField = styled.div<{ $radius: string }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 8px;
  width: 275px;
  max-width: 100%;
  height: 36px;
  padding: 0 12px;
  color: var(--admiral-color-text-neutral-text3-rest, ${({ theme }) => theme.color.text.neutral.text3.rest});
  background: var(--admiral-color-base-neutral-base1-rest, ${({ theme }) => theme.color.base.neutral.base1.rest});
  border: 1px solid
    var(--admiral-color-stroke-neutral-stroke1-rest, ${({ theme }) => theme.color.stroke.neutral.stroke1.rest});
  border-radius: ${({ $radius }) => $radius};
  ${typography['Body/Body 2 Long']}
`;

const StyledIcon = styled.span<{ $tone: 'recommended' | 'warning' }>`
  display: inline-grid;
  place-items: center;
  width: 16px;
  height: 16px;
  color: currentColor;
  border: 1px solid currentColor;
  border-radius: ${({ theme }) => theme.radius.byBase['8'].large};
  ${typography['Caption/Caption 2']}

  &::before {
    content: '${({ $tone }) => ($tone === 'recommended' ? '+' : '!')}';
  }
`;

const StyledButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
`;

const StyledButton = styled.button<{ $radius: string }>`
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 14px;
  color: var(--admiral-color-text-neutral-inverted-rest, ${({ theme }) => theme.color.text.neutral.inverted.rest});
  background: var(--admiral-color-base-neutral-inverted-rest, ${({ theme }) => theme.color.base.neutral.inverted.rest});
  border: 0;
  border-radius: ${({ $radius }) => $radius};
  ${typography['Button/Button 2']}
`;

const StyledNote = styled.p`
  max-width: 820px;
  margin: 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  ${typography['Body/Body 1 Long']}
`;

export const RadiusTemplate = ({ tables }: RadiusTemplateProps) => (
  <StyledPage>
    <StyledContent>
      <StyledSection>
        <StyledSectionTitle>Скругления форм компонентов</StyledSectionTitle>
        <StyledText>
          В дизайн-системе можно изменять форму компонентов задавая величину скругления углов в определенном диапазоне
          значений.
        </StyledText>
        <StyledText>
          Не все компоненты могут менять скругления углов больше определенного значения, так как, в этом случае, они
          теряют свою функциональную идентификацию. Например, стандартный компонент Checkbox при скруглении 8 px
          превращается в круг и уже не считывается как Checkbox.
        </StyledText>
        <StyledText>
          По этой причине компоненты разделены на условные группы - по уровню допустимого максимального скругления:
        </StyledText>
        <StyledGroupList>
          <StyledGroupName>Small Components</StyledGroupName>
          <StyledGroupDescription>компоненты, которые нельзя скруглять больше значения 4px</StyledGroupDescription>
          <StyledGroupName>Medium Components</StyledGroupName>
          <StyledGroupDescription>компоненты с базовым для темы скруглением</StyledGroupDescription>
          <StyledGroupName>Large Components</StyledGroupName>
          <StyledGroupDescription>компоненты с удвоенным относительно базового скруглением</StyledGroupDescription>
        </StyledGroupList>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Алгоритм</StyledSectionTitle>
        <StyledText>
          Задается значение глобальной переменной Corner Radius, которое может быть равно 0, 2, 4, 6, 8. Эта переменная
          влияет на величину скругления углов всех компонентов имеющих соответствующую форму. Но, в зависимости от
          принадлежности компонента к той или иной группе, изменение происходит нелинейно, по алгоритму показанному в
          таблице ниже:
        </StyledText>
        <StyledText>
          Для всего проекта должно быть выбрано одно значение Corner Radius. Присваивать разные значения отдельным
          фреймам, сценариям или компонентам нельзя.
        </StyledText>

        <StyledTables>
          {tables.map(({ base, rows }) => (
            <StyledTableShell key={base}>
              <StyledTable>
                <thead>
                  <tr>
                    <StyledFirstColumnHeader>Corner radius {base}</StyledFirstColumnHeader>
                    <StyledHeaderCell>Group</StyledHeaderCell>
                    <StyledHeaderCell>Rounding Value</StyledHeaderCell>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(({ components, groupName, value }) => (
                    <tr key={`${base}-${groupName}`}>
                      <StyledCell>{components}</StyledCell>
                      <StyledCell>{groupName}</StyledCell>
                      <StyledCell>{value}</StyledCell>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </StyledTableShell>
          ))}
        </StyledTables>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Рекомендации</StyledSectionTitle>
        <StyledNote>
          Не рекомендуется использовать скругление 8 для XS размера основных компонентов (кнопок, полей ввода и тд). Так
          как компонент принимает неопределенную форму - и не круглую и не прямоугольную
        </StyledNote>
        <StyledDemo>
          <StyledField $radius={radius.byBase['4'].medium}>
            <StyledIcon $tone="recommended" aria-hidden="true" />
            Radius 4
          </StyledField>
          <StyledField $radius={radius.byBase['8'].medium}>
            <StyledIcon $tone="warning" aria-hidden="true" />
            Radius 8
          </StyledField>
          <StyledButtons>
            <StyledButton $radius={radius.byBase['4'].medium} type="button">
              <StyledIcon $tone="recommended" aria-hidden="true" />
              Radius 4
            </StyledButton>
            <StyledButton $radius={radius.byBase['8'].medium} type="button">
              <StyledIcon $tone="warning" aria-hidden="true" />
              Radius 8
            </StyledButton>
          </StyledButtons>
        </StyledDemo>
      </StyledSection>
    </StyledContent>
  </StyledPage>
);
