import { keyframes, styled, useTheme } from 'styled-components';

import { animation, typography, type BuiltTheme, type MotionEasingValue } from '@admiral-ds/admiral3-tokens';

const durationRows = Object.entries(animation.motion.duration).map(([name, value]) => ({
  token: `motion.duration.${name}`,
  value,
}));

const easingRows = [
  {
    token: 'motion.easing.linear',
    value: animation.motion.easing.linear,
    transitionType: 'Hover. Begin and start on screen.',
  },
  {
    token: 'motion.easing.accelerate.emphasized',
    value: animation.motion.easing.accelerate.emphasized,
    transitionType: 'Exit the screen. Big objects.',
  },
  {
    token: 'motion.easing.decelerate.emphasized',
    value: animation.motion.easing.decelerate.emphasized,
    transitionType: 'Enter the screen. Big objects.',
  },
  {
    token: 'motion.easing.accelerate.standard',
    value: animation.motion.easing.accelerate.standard,
    transitionType: 'Exit the screen',
  },
  {
    token: 'motion.easing.decelerate.standard',
    value: animation.motion.easing.decelerate.standard,
    transitionType: 'Enter the screen',
  },
] as const;

const easingExamples = [
  {
    title: 'motion.easing.linear',
    value: animation.motion.easing.linear,
    description:
      'motion.easing.linear – линейный график, одинаковая динамика на всем протяжении кривой. Используется для статичных объектов. Как правило это состояния Hover, Press или появление объекта на экране без движения.',
  },
  {
    title: 'motion.easing.accelerate.emphasized',
    value: animation.motion.easing.accelerate.emphasized,
    description:
      'Токен motion.easing.accelerate.emphasized – для больших объектов (например Drawer или Accordion), которые «уходят» с экрана или сворачиваются. Происходит ускорение по экспоненте, с максимальным ускорением в конце анимации.',
  },
  {
    title: 'motion.easing.decelerate.emphasized',
    value: animation.motion.easing.decelerate.emphasized,
    description:
      'Токен motion.easing.decelerate.emphasized – для больших объектов (например Drawer или Accordion), которые появляются/раскрываются на экране с движением. В начале анимации происходит ускорение, в конце – замедление.',
  },
  {
    title: 'motion.easing.accelerate.standard',
    value: animation.motion.easing.accelerate.standard,
    description:
      'Токен motion.easing.accelerate.standard – для объектов, которые «уходят» с экрана или сворачиваются. Происходит ускорение по экспоненте, с максимальным ускорением в конце анимации.',
  },
  {
    title: 'motion.easing.decelerate.standard',
    value: animation.motion.easing.decelerate.standard,
    description:
      'Токен motion.easing.decelerate.standard – для объектов, которые появляются/раскрываются на экране с движением. В начале анимации происходит ускорение, в конце – замедление.',
  },
] as const;

const previewAnimationDuration = animation.motion.duration.long_4 * 4;

const movePreviewBall = keyframes`
  0%,
  12% {
    transform: translateX(0);
  }

  44%,
  56% {
    transform: translateX(296px);
  }

  88%,
  100% {
    transform: translateX(0);
  }
`;

const StyledPage = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 32px 40px 56px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};
`;

const StyledContent = styled.div`
  max-width: 1020px;
`;

const StyledHeading = styled.h1`
  margin: 0 0 28px;
  ${typography['Header/H4']}
`;

const StyledSection = styled.section`
  margin-top: 36px;

  &:first-of-type {
    margin-top: 0;
  }
`;

const StyledSectionTitle = styled.h2`
  margin: 0 0 18px;
  ${typography['Header/H5']}
`;

const StyledExampleTitle = styled.h3`
  margin: 0 0 18px;
  ${typography['Subtitle/Subtitle 2']}
`;

const StyledText = styled.p`
  max-width: 880px;
  margin: 0 0 26px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  ${typography['Body/Body 1 Long']}
`;

const StyledTable = styled.table`
  width: 100%;
  margin-top: 28px;
  border-collapse: collapse;
  ${typography['Body/Body 1 Long']}
`;

const StyledHeaderCell = styled.th`
  padding: 18px 20px;
  color: ${({ theme }) => theme.color.text.neutral.text1.rest};
  text-align: left;
  background: ${({ theme }) => theme.color.base.neutral.base2.rest};
  border-right: 1px solid ${({ theme }) => theme.color.stroke.neutral.subtle.rest};
  ${typography['Subtitle/Subtitle 2']}

  &:last-child {
    border-right: 0;
  }
`;

const StyledCell = styled.td`
  padding: 18px 20px;
  border-top: 1px solid ${({ theme }) => theme.color.stroke.neutral.subtle.rest};
`;

const StyledExamples = styled.div`
  display: grid;
  gap: 44px;
  margin-top: 36px;
`;

const StyledExampleLayout = styled.div`
  display: grid;
  grid-template-columns: max-content minmax(360px, 1fr);
  gap: 72px;
  align-items: center;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const StyledCurveBlock = styled.div`
  width: max-content;
`;

const StyledCurve = styled.svg`
  display: block;
  width: 200px;
  height: 200px;
  background: ${({ theme }) => theme.color.base.neutral.base1.rest};
`;

const StyledValue = styled.div`
  margin-top: 14px;
  ${typography['Body/Body 1 Long']}
`;

const StyledPreview = styled.div`
  display: grid;
  gap: 20px;
  width: 360px;
  color: ${({ theme }) => theme.color.text.neutral.text2.rest};
  ${typography['Body/Body 1 Long']}
`;

const StyledPreviewTrack = styled.div<{ $easing: string }>`
  display: flex;
  align-items: center;
  width: 360px;
  height: 100px;

  &::before {
    box-sizing: border-box;
    width: 64px;
    height: 64px;
    content: '';
    background: ${({ theme }) => theme.color.base.primary.base1.rest};
    border-radius: 50%;
    animation: ${movePreviewBall} ${previewAnimationDuration}ms ${({ $easing }) => $easing} infinite;
  }
`;

const formatEasingValue = (value: MotionEasingValue) => value.join(', ');

const formatEasingCss = (value: MotionEasingValue) => `cubic-bezier(${formatEasingValue(value)})`;

const getCurvePoint = (x: number, y: number) => `${32 + x * 136},${168 - y * 136}`;

const CurveDiagram = ({ value }: { value: MotionEasingValue }) => {
  const theme = useTheme() as BuiltTheme;
  const [x1, y1, x2, y2] = value;
  const start = getCurvePoint(0, 0);
  const control1 = getCurvePoint(x1, y1);
  const control2 = getCurvePoint(x2, y2);
  const end = getCurvePoint(1, 1);

  return (
    <StyledCurve aria-hidden="true" viewBox="0 0 200 200">
      <path
        d="M 32 32 H 168 V 168 H 32 Z"
        fill="none"
        stroke={theme.color.stroke.neutral.subtle.rest}
        strokeDasharray="6 6"
        strokeWidth="2"
      />
      <path d={`M ${start} L ${end}`} stroke={theme.color.stroke.neutral.subtle.rest} strokeWidth="2" />
      <path
        d={`M ${start} L ${control1} M ${control2} L ${end}`}
        stroke={theme.color.stroke.neutral.stroke2.rest}
        strokeWidth="2"
      />
      <path
        d={`M ${start} C ${control1} ${control2} ${end}`}
        fill="none"
        stroke={theme.color.text.neutral.text1.rest}
        strokeWidth="2"
      />
      {[start, control1, control2, end].map((point) => (
        <circle
          key={point}
          cx={point.split(',')[0]}
          cy={point.split(',')[1]}
          r="3"
          fill={theme.color.base.primary.base1.rest}
        />
      ))}
    </StyledCurve>
  );
};

export const AnimationTemplate = () => (
  <StyledPage>
    <StyledContent>
      <StyledHeading>Токены анимации</StyledHeading>

      <StyledSection>
        <StyledSectionTitle>Duration</StyledSectionTitle>
        <StyledText>
          Показывает время длительности анимации в миллисекундах. Как правило, чем больше объект, тем большее время
          анимации для него выбирается. Для подвижных объектов время появления на экране больше, чем время «ухода» с
          экрана.
        </StyledText>
        <StyledTable>
          <thead>
            <tr>
              <StyledHeaderCell>Token</StyledHeaderCell>
              <StyledHeaderCell>Duration (milliseconds)</StyledHeaderCell>
            </tr>
          </thead>
          <tbody>
            {durationRows.map((row) => (
              <tr key={row.token}>
                <StyledCell>{row.token}</StyledCell>
                <StyledCell>{row.value}</StyledCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Easing</StyledSectionTitle>
        <StyledText>
          Показывает как ведет себя элемент в процессе анимации. Первая цифра показывает положение первой точки кривой
          анимации по оси X, вторая цифра – положение первой точки по оси Y, третья цифра – положение второй точки по
          оси X, четвертая цифра – положение второй точки по оси Y. На основе этих значений выстраивается кривая Безье,
          отвечающая за динамику движения.
        </StyledText>
        <StyledTable>
          <thead>
            <tr>
              <StyledHeaderCell>Token</StyledHeaderCell>
              <StyledHeaderCell>Value</StyledHeaderCell>
              <StyledHeaderCell>Transition type</StyledHeaderCell>
            </tr>
          </thead>
          <tbody>
            {easingRows.map((row) => (
              <tr key={row.token}>
                <StyledCell>{row.token}</StyledCell>
                <StyledCell>{formatEasingValue(row.value)}</StyledCell>
                <StyledCell>{row.transitionType}</StyledCell>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledSection>

      <StyledSection>
        <StyledSectionTitle>Назначение кривых анимации. Примеры</StyledSectionTitle>
        <StyledExamples>
          {easingExamples.map((example) => (
            <article key={example.title}>
              <StyledExampleTitle>{example.title}</StyledExampleTitle>
              <StyledText>{example.description}</StyledText>
              <StyledExampleLayout>
                <StyledCurveBlock>
                  <CurveDiagram value={example.value} />
                  <StyledValue>{formatEasingValue(example.value)}</StyledValue>
                </StyledCurveBlock>
                <StyledPreview>
                  <StyledPreviewTrack
                    $easing={formatEasingCss(example.value)}
                    aria-hidden="true"
                    data-animation-preview-track
                  />
                  <span>Пример анимации</span>
                </StyledPreview>
              </StyledExampleLayout>
            </article>
          ))}
        </StyledExamples>
      </StyledSection>
    </StyledContent>
  </StyledPage>
);
