import { useState } from 'react';

import { styled } from 'styled-components';

import {
  cornerRadiusOptions,
  radius,
  typography,
  type CornerRadiusBase,
  type RadiusGroup,
} from '@admiral-ds/admiral3-tokens';

type RadiusGroupExample = {
  group: RadiusGroup;
  title: 'Small' | 'Medium' | 'Large';
};

const radiusGroupExamples: RadiusGroupExample[] = [
  { group: 'small', title: 'Small' },
  { group: 'medium', title: 'Medium' },
  { group: 'large', title: 'Large' },
];

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
  max-width: 960px;
  margin: 0 auto;
`;

const StyledTitle = styled.h2`
  margin: 0 0 24px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  ${typography['Header/H5']}
`;

const StyledControls = styled.fieldset`
  min-width: 0;
  padding: 0;
  margin: 0 0 32px;
  border: 0;
`;

const StyledLegend = styled.legend`
  padding: 0;
  margin: 0 0 12px;
  color: var(--admiral-color-text-neutral-text2-rest, ${({ theme }) => theme.color.text.neutral.text2.rest});
  ${typography['Subtitle/Subtitle 2']}
`;

const StyledOptions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const StyledOption = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  min-height: 36px;
  padding: 0 14px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  background: var(--admiral-color-base-neutral-base1-rest, ${({ theme }) => theme.color.base.neutral.base1.rest});
  border: 1px solid
    var(--admiral-color-stroke-neutral-stroke1-rest, ${({ theme }) => theme.color.stroke.neutral.stroke1.rest});
  border-radius: ${({ theme }) => theme.radius.byBase['4'].medium};
  cursor: pointer;
  ${typography['Button/Button 2']}

  &:has(input:checked) {
    color: var(--admiral-color-text-neutral-inverted-rest, ${({ theme }) => theme.color.text.neutral.inverted.rest});
    background: var(--admiral-color-base-primary-base1-rest, ${({ theme }) => theme.color.base.primary.base1.rest});
    border-color: var(
      --admiral-color-stroke-primary-stroke1-rest,
      ${({ theme }) => theme.color.stroke.primary.stroke1.rest}
    );
  }

  &:has(input:focus-visible) {
    outline: 2px solid
      var(--admiral-color-stroke-primary-stroke1-rest, ${({ theme }) => theme.color.stroke.primary.stroke1.rest});
    outline-offset: 2px;
  }
`;

const StyledRadio = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
`;

const StyledPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const StyledRectangle = styled.article<{ $radius: string }>`
  min-width: 0;
  min-height: 156px;
  padding: 20px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  background: var(--admiral-color-base-neutral-base2-rest, ${({ theme }) => theme.color.base.neutral.base2.rest});
  border: 1px solid
    var(--admiral-color-stroke-neutral-stroke1-rest, ${({ theme }) => theme.color.stroke.neutral.stroke1.rest});
  border-radius: ${({ $radius }) => $radius};
`;

const StyledRectangleTitle = styled.h3`
  margin: 0 0 12px;
  color: var(--admiral-color-text-neutral-text1-rest, ${({ theme }) => theme.color.text.neutral.text1.rest});
  ${typography['Subtitle/Subtitle 1']}
`;

const StyledValue = styled.div`
  color: var(--admiral-color-text-neutral-text2-rest, ${({ theme }) => theme.color.text.neutral.text2.rest});
  ${typography['Body/Body 1 Long']}
`;

export const RadiusGroupsTemplate = () => {
  const [selectedBase, setSelectedBase] = useState<CornerRadiusBase>(radius.default);

  return (
    <StyledPage>
      <StyledContent>
        <StyledTitle>Группы скруглений</StyledTitle>
        <StyledControls>
          <StyledLegend>Corner Radius</StyledLegend>
          <StyledOptions>
            {cornerRadiusOptions.map((base) => (
              <StyledOption key={base}>
                <StyledRadio
                  checked={selectedBase === base}
                  name="corner-radius-base"
                  onChange={() => setSelectedBase(base)}
                  type="radio"
                  value={base}
                />
                {base}
              </StyledOption>
            ))}
          </StyledOptions>
        </StyledControls>
        <StyledPreview aria-label="Radius group examples">
          {radiusGroupExamples.map(({ group, title }) => {
            const value = radius.byBase[selectedBase][group];

            return (
              <StyledRectangle key={group} $radius={value}>
                <StyledRectangleTitle>{title}</StyledRectangleTitle>
                <StyledValue>{value}</StyledValue>
              </StyledRectangle>
            );
          })}
        </StyledPreview>
      </StyledContent>
    </StyledPage>
  );
};
