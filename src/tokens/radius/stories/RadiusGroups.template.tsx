import { styled, useTheme } from 'styled-components';

import { typography, type BuiltTheme, type RadiusGroup } from '@admiral-ds/admiral3-tokens';

type RadiusGroupExample = {
  group: RadiusGroup;
  title: 'Small' | 'Medium' | 'Large';
};

const radiusGroupExamples: RadiusGroupExample[] = [
  { group: 'small', title: 'Small' },
  { group: 'medium', title: 'Medium' },
  { group: 'large', title: 'Large' },
];

const styledComponentsCode = `const theme = buildTheme('light', { cornerRadius: '8' });

const Card = styled.div\`
  border-radius: \${({ theme }) => theme.radius.medium};
\`;

<ThemeProvider theme={theme}>
  <Card />
</ThemeProvider>`;

const cssCode = `<html data-admiral-corner-radius="8">
  <article class="card" />
</html>

.card {
  border-radius: var(--admiral-radius-medium);
}`;

const StyledPage = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 24px 32px 64px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  background: var(--admiral-color-neutral-base-1-rest, ${({ theme }) => theme.color.neutral.base._1.rest});

  @media (max-width: 720px) {
    padding: 20px 16px 48px;
  }
`;

const StyledContent = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const StyledTitle = styled.h2`
  margin: 0 0 12px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  ${typography['Header/H5']}
`;

const StyledDescription = styled.p`
  margin: 0;
  color: var(--admiral-color-neutral-text-2-rest, ${({ theme }) => theme.color.neutral.text._2.rest});
  ${typography['Body/Body 1 Long']}
`;

const StyledSection = styled.section`
  margin-top: 40px;
`;

const StyledSectionTitle = styled.h3`
  margin: 0 0 12px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  ${typography['Header/H6']}
`;

const StyledFlow = styled.ol`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  padding: 0;
  margin: 20px 0 0;
  list-style: none;
  counter-reset: radius-step;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const StyledFlowItem = styled.li`
  min-width: 0;
  padding: 16px;
  color: var(--admiral-color-neutral-text-2-rest, ${({ theme }) => theme.color.neutral.text._2.rest});
  background: var(--admiral-color-neutral-base-2-rest, ${({ theme }) => theme.color.neutral.base._2.rest});
  border-radius: ${({ theme }) => theme.radius.medium};
  counter-increment: radius-step;
  ${typography['Body/Body 2 Long']}

  &::before {
    display: block;
    margin-bottom: 8px;
    color: var(--admiral-color-primary-text-1-rest, ${({ theme }) => theme.color.primary.text._1.rest});
    content: counter(radius-step);
    ${typography['Subtitle/Subtitle 2']}
  }
`;

const StyledCode = styled.pre`
  box-sizing: border-box;
  min-width: 0;
  padding: 16px;
  margin: 16px 0 0;
  overflow: auto;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  background: var(--admiral-color-neutral-base-2-rest, ${({ theme }) => theme.color.neutral.base._2.rest});
  border: 1px solid
    var(--admiral-color-neutral-stroke-subtle-rest, ${({ theme }) => theme.color.neutral.stroke.subtle.rest});
  border-radius: ${({ theme }) => theme.radius.medium};
  white-space: pre;
  ${typography['Monospace/Mono 2']}
`;

const StyledUsageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 20px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const StyledUsageCard = styled.article`
  min-width: 0;
  padding: 20px;
  background: var(--admiral-color-neutral-base-1-rest, ${({ theme }) => theme.color.neutral.base._1.rest});
  border: 1px solid var(--admiral-color-neutral-stroke-1-rest, ${({ theme }) => theme.color.neutral.stroke._1.rest});
  border-radius: ${({ theme }) => theme.radius.large};
`;

const StyledUsageTitle = styled.h4`
  margin: 0 0 8px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  ${typography['Subtitle/Subtitle 2']}
`;

const StyledThemeComponent = styled.div`
  padding: 20px;
  margin-top: 16px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  background: var(--admiral-color-neutral-base-2-rest, ${({ theme }) => theme.color.neutral.base._2.rest});
  border-radius: ${({ theme }) => theme.radius.medium};
  ${typography['Body/Body 2 Long']}
`;

const StyledCssComponent = styled.div`
  padding: 20px;
  margin-top: 16px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  background: var(--admiral-color-neutral-base-2-rest, ${({ theme }) => theme.color.neutral.base._2.rest});
  border-radius: var(--admiral-radius-medium);
  ${typography['Body/Body 2 Long']}
`;

const StyledPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const StyledRectangle = styled.article<{ $group: RadiusGroup }>`
  min-width: 0;
  min-height: 156px;
  padding: 20px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  background: var(--admiral-color-neutral-base-2-rest, ${({ theme }) => theme.color.neutral.base._2.rest});
  border: 1px solid var(--admiral-color-neutral-stroke-1-rest, ${({ theme }) => theme.color.neutral.stroke._1.rest});
  border-radius: ${({ $group, theme }) => theme.radius[$group]};
`;

const StyledRectangleTitle = styled.h3`
  margin: 0 0 12px;
  color: var(--admiral-color-neutral-text-1-rest, ${({ theme }) => theme.color.neutral.text._1.rest});
  ${typography['Subtitle/Subtitle 1']}
`;

const StyledValue = styled.div`
  color: var(--admiral-color-neutral-text-2-rest, ${({ theme }) => theme.color.neutral.text._2.rest});
  ${typography['Body/Body 1 Long']}
`;

const RadiusGroupCard = ({ group, title }: RadiusGroupExample) => {
  const theme = useTheme() as BuiltTheme;

  return (
    <StyledRectangle $group={group}>
      <StyledRectangleTitle>{title}</StyledRectangleTitle>
      <StyledValue>
        theme.radius.{group} = {theme.radius[group]}
      </StyledValue>
    </StyledRectangle>
  );
};

export const RadiusGroupsTemplate = () => {
  const theme = useTheme() as BuiltTheme;

  return (
    <StyledPage>
      <StyledContent>
        <StyledTitle>Семантические группы скруглений</StyledTitle>
        <StyledDescription>
          Компонент выбирает только семантическую группу small, medium или large. Конкретное значение определяется
          выбранной базой. Смените Corner radius в Storybook toolbar, чтобы увидеть пересчёт обоих способов потребления.
        </StyledDescription>

        <StyledSection>
          <StyledSectionTitle>Как выбирается значение</StyledSectionTitle>
          <StyledDescription>Сейчас выбрана база {theme.radius.default}.</StyledDescription>
          <StyledFlow>
            <StyledFlowItem>Приложение или Storybook выбирает corner-radius base.</StyledFlowItem>
            <StyledFlowItem>Тема или CSS selector связывает базу с small, medium и large.</StyledFlowItem>
            <StyledFlowItem>Компонент читает только нужную семантическую группу.</StyledFlowItem>
          </StyledFlow>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Текущие значения групп</StyledSectionTitle>
          <StyledPreview>
            {radiusGroupExamples.map((example) => (
              <RadiusGroupCard key={example.group} {...example} />
            ))}
          </StyledPreview>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Два способа использования</StyledSectionTitle>
          <StyledUsageGrid>
            <StyledUsageCard>
              <StyledUsageTitle>styled-components</StyledUsageTitle>
              <StyledDescription>
                Передайте cornerRadius в buildTheme. Компонент получает итоговое значение из ThemeProvider через
                theme.radius.medium.
              </StyledDescription>
              <StyledThemeComponent>theme.radius.medium = {theme.radius.medium}</StyledThemeComponent>
              <StyledCode tabIndex={0}>
                <code>{styledComponentsCode}</code>
              </StyledCode>
            </StyledUsageCard>

            <StyledUsageCard>
              <StyledUsageTitle>Обычный CSS</StyledUsageTitle>
              <StyledDescription>
                Подключите css или css/radius, задайте data-admiral-corner-radius и используйте семантическую CSS
                variable. Без атрибута применяется база 4.
              </StyledDescription>
              <StyledCssComponent>var(--admiral-radius-medium) = {theme.radius.medium}</StyledCssComponent>
              <StyledCode tabIndex={0}>
                <code>{cssCode}</code>
              </StyledCode>
            </StyledUsageCard>
          </StyledUsageGrid>
        </StyledSection>
      </StyledContent>
    </StyledPage>
  );
};
