import { styled } from 'styled-components';

import { typography } from '@admiral-ds/admiral3-tokens';

const StyledPage = styled.article`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 28px 30px 64px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  background: var(--admiral-color-base-neutral-base1-rest, ${({ theme }) => theme.color.base.neutral.base1.rest});

  @media (max-width: 720px) {
    padding: 24px 16px 48px;
  }
`;

const StyledContent = styled.div`
  max-width: 1120px;
`;

const StyledTitle = styled.h1`
  margin: 0 0 24px;
  ${typography['Header/H4']}
`;

const StyledSection = styled.section`
  margin-top: 36px;

  &:first-child {
    margin-top: 0;
  }
`;

const StyledSectionTitle = styled.h2`
  margin: 0 0 22px;
  ${typography['Header/H5']}
`;

const StyledText = styled.p`
  max-width: 1100px;
  margin: 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  ${typography['Body/Body 1 Long']}

  & + & {
    margin-top: 28px;
  }
`;

export const ThemeColorsTemplate = () => (
  <StyledPage>
    <StyledContent>
      <StyledSection>
        <StyledTitle>Theme Colors</StyledTitle>
        <StyledText>
          Из глобальных токенов строятся адресные переменные тем — Theme Colors. Эти переменные так же делятся на группы
          Neutral, Primary, Status и Extra, которые, в свою очередь, делятся на цвета относящиеся к поверхностям и фонам
          (Base), тексту и иконкам (Text), линиям и обводкам (Stroke).
        </StyledText>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Base</StyledSectionTitle>
        <StyledText>
          Это цвета страниц, подложек карточек, фоны кнопок, чипсов и тд. То есть — это все поверхности. Для краткости,
          отдельные цвета обозначаются не как primary или secondary, а цифрами 1, 2, 3. Для удобства почти каждый цвет
          имеет рядом стоящие состояния Rest, Hover, Press, Focus. Рассмотрим на примере одного цвета:
        </StyledText>
        <StyledText>
          Помимо основных цифровых обозначений, есть другие ассоциативные названия — Opacity, Static, Subtle, Inverted,
          Invisible и тд. Роли таких цветов описаны на странице Theme Colors этого документа.
        </StyledText>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Text</StyledSectionTitle>
        <StyledText>
          Это цвета для текстов и иконок, так как визуальный вес у них примерно одинаковый. Принципы семантики описанные
          для токенов Base, справедливы и для токенов Text.
        </StyledText>
        <StyledText>
          Тут есть небольшое исключение — для иконок основным цветом является Neutral Text / 2. Так как иконки
          традиционно обозначаются менее контрастным нейтральным цветом, чем текст.
        </StyledText>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Stroke</StyledSectionTitle>
        <StyledText>
          Цвета линий, разделителей, обводок и подчеркиваний. Семантика аналогична двум предыдущим группам.
        </StyledText>
      </StyledSection>
    </StyledContent>
  </StyledPage>
);
