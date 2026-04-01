import { styled } from 'styled-components';

import { typography } from '@admiral-ds/admiral3-tokens';
import type { TypographyTextStyleName } from '@admiral-ds/admiral3-tokens';

type TypographyStyle = {
  fontFamily: string;
  fontWeight: number;
  fontSize: string;
  lineHeight: string;
};

type TypographyTagRow = {
  name: string;
  styleName: TypographyTextStyleName;
  tags: string[];
};

type TypographyTagSection = {
  title: string;
  rows: TypographyTagRow[];
};

const headerRows: TypographyTagRow[] = [
  { name: 'HL1', styleName: 'Header/HL1', tags: ['H1', 'H2', 'Span', 'Div'] },
  { name: 'HL2', styleName: 'Header/HL2', tags: ['H1', 'H2', 'Span', 'Div'] },
  { name: 'HL3', styleName: 'Header/HL3', tags: ['H1', 'H2', 'Span', 'Div'] },
  { name: 'H1', styleName: 'Header/H1', tags: ['H1', 'H2', 'Span', 'Div'] },
  { name: 'H2', styleName: 'Header/H2', tags: ['H1', 'H2', 'H3', 'Span', 'Div'] },
  { name: 'H3', styleName: 'Header/H3', tags: ['H1', 'H2', 'H3', 'H4', 'Span', 'Div'] },
  { name: 'H4', styleName: 'Header/H4', tags: ['H1', 'H2', 'H3', 'H4', 'Span', 'Div'] },
  { name: 'H5', styleName: 'Header/H5', tags: ['H2', 'H3', 'H4', 'H5', 'Span', 'Div'] },
  { name: 'H6', styleName: 'Header/H6', tags: ['H2', 'H3', 'H4', 'H5', 'Span', 'Div'] },
];

const sections: TypographyTagSection[] = [
  {
    title: 'Subtitle',
    rows: [
      {
        name: 'Subtitle 1',
        styleName: 'Subtitle/Subtitle 1',
        tags: ['H2', 'H3', 'H4', 'H5', 'P', 'Span', 'Div', 'Main', 'Footer', 'Article', 'Section'],
      },
      {
        name: 'Subtitle 2',
        styleName: 'Subtitle/Subtitle 2',
        tags: ['H2', 'H3', 'H4', 'H5', 'P', 'Span', 'Div', 'Main', 'Footer', 'Section'],
      },
      {
        name: 'Subtitle 3',
        styleName: 'Subtitle/Subtitle 3',
        tags: ['H2', 'H3', 'H4', 'H5', 'H6', 'P', 'Span', 'Div', 'Main', 'Footer', 'Section'],
      },
      {
        name: 'Subtitle 4',
        styleName: 'Subtitle/Subtitle 4',
        tags: ['H3', 'H4', 'H5', 'H6', 'P', 'Span', 'Div', 'Main', 'Footer', 'Section'],
      },
    ],
  },
  {
    title: 'Body',
    rows: [
      {
        name: 'Body 1 Long',
        styleName: 'Body/Body 1 Long',
        tags: [
          'H2',
          'H3',
          'H4',
          'H5',
          'P',
          'Span',
          'Div',
          'Main',
          'Footer',
          'Article',
          'Section',
          'Details',
          'Summary',
        ],
      },
      {
        name: 'Body 1 Short',
        styleName: 'Body/Body 1 Short',
        tags: [
          'H2',
          'H3',
          'H4',
          'H5',
          'P',
          'Span',
          'Div',
          'Main',
          'Footer',
          'Article',
          'Section',
          'Details',
          'Summary',
        ],
      },
      {
        name: 'Body 2 Long',
        styleName: 'Body/Body 2 Long',
        tags: [
          'H2',
          'H3',
          'H4',
          'H5',
          'H6',
          'P',
          'Span',
          'Div',
          'Main',
          'Footer',
          'Article',
          'Section',
          'Details',
          'Summary',
        ],
      },
      {
        name: 'Body 2 Short',
        styleName: 'Body/Body 2 Short',
        tags: [
          'H2',
          'H3',
          'H4',
          'H5',
          'H6',
          'P',
          'Span',
          'Div',
          'Main',
          'Footer',
          'Article',
          'Section',
          'Details',
          'Summary',
        ],
      },
    ],
  },
  {
    title: 'Button',
    rows: [
      { name: 'Button 1', styleName: 'Button/Button 1', tags: ['Button'] },
      { name: 'Button 2', styleName: 'Button/Button 2', tags: ['Button'] },
      { name: 'Button 3', styleName: 'Button/Button 3', tags: ['Button'] },
    ],
  },
  {
    title: 'Caption',
    rows: [
      {
        name: 'Caption 1',
        styleName: 'Caption/Caption 1',
        tags: ['Label', 'Span', 'Div', 'Footer', 'Section', 'Details', 'Summary'],
      },
      { name: 'Caption 2', styleName: 'Caption/Caption 2', tags: ['Label', 'Details', 'Summary'] },
    ],
  },
];

const defaultTagRows = [
  ['<div>', 'body 1 long'],
  ['<span>', 'body 1 long'],
  ['<header>', 'H4'],
  ['<main>', 'body 1 long'],
  ['<footer>', 'body 1 long'],
  ['<article>', 'body 1 long'],
  ['<section>', 'body 1 long'],
  ['<details>', 'caption 1'],
  ['<summary>', 'caption 1'],
];

const monospaceRows = [
  { name: 'Mono 1', styleName: 'Monospace/Mono 1' },
  { name: 'Mono 2', styleName: 'Monospace/Mono 2' },
  { name: 'Mono 3', styleName: 'Monospace/Mono 3' },
] satisfies Pick<TypographyTagRow, 'name' | 'styleName'>[];

const formatSize = ({ fontSize, lineHeight }: TypographyStyle) => {
  return `${fontSize.replace('px', '')}/${lineHeight.replace('px', '')}`;
};

const StyledPage = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  padding: 28px 24px 72px;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  background: var(--admiral-color-base-neutral-base1-rest, ${(p) => p.theme.color['Base/Neutral/Base 1/Rest']});
`;

const StyledTitle = styled.h1`
  max-width: 1024px;
  margin: 0 auto 10px;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${typography['Header/H4']}
`;

const StyledContent = styled.div`
  display: grid;
  gap: 24px;
  max-width: 1120px;
  padding-top: 24px;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: minmax(360px, 420px) minmax(0, 1fr);
  column-gap: 72px;
  row-gap: 38px;
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: minmax(260px, 360px) minmax(0, 1fr);
    column-gap: 40px;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSectionTitle = styled.h2`
  margin: 0;
  ${typography['Header/H6']}
`;

const StyledTagsTitle = styled.h2`
  margin: 0;
  ${typography['Header/H6']}
`;

const StyledSectionHeader = styled.div`
  display: contents;
`;

const StyledHeaderPreview = styled.div<{ $styleName: TypographyTextStyleName }>`
  display: flex;
  gap: 28px;
  align-items: baseline;
  min-width: 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${({ $styleName }) => typography[$styleName]}
`;

const StyledHeaderSize = styled.span`
  color: var(--admiral-color-text-neutral-text2-rest, ${(p) => p.theme.color['Text/Neutral/Text 2/Rest']});
`;

const StyledCompactPreview = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 16px;
  align-items: baseline;
`;

const StyledCompactName = styled.span<{ $styleName: TypographyTextStyleName }>`
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${({ $styleName }) => typography[$styleName]}
`;

const StyledCompactSize = styled.span<{ $styleName: TypographyTextStyleName }>`
  color: var(--admiral-color-text-neutral-text2-rest, ${(p) => p.theme.color['Text/Neutral/Text 2/Rest']});
  ${({ $styleName }) => typography[$styleName]}
`;

const StyledRow = styled.div`
  display: contents;
`;

const StyledRowCell = styled.div`
  min-width: 0;
`;

const StyledTagRows = styled.div`
  display: contents;
`;

const StyledTagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 22px;
  min-width: 0;
`;

const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 22px;
  padding: 2px 9px;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  background: var(--admiral-color-base-neutral-base2-rest, ${(p) => p.theme.color['Base/Neutral/Base 2/Rest']});
  border-radius: var(--admiral-radius-by-base-4-medium, ${(p) => p.theme.radius['By Base/4/Medium']});
  ${typography['Caption/Caption 1']}
`;

const StyledDefaultStyles = styled.section`
  display: grid;
  gap: 28px;
  max-width: 700px;
  padding-left: 12px;
`;

const StyledDefaultTitle = styled.h2`
  margin: 0;
  ${typography['Header/H4']}
`;

const StyledMonospaceTitle = styled.h2`
  margin: 0;
  ${typography['Header/H4']}
`;

const StyledMonospaceText = styled.p`
  max-width: 620px;
  margin: 0;
  ${typography['Body/Body 1 Long']}
`;

const StyledTable = styled.table`
  width: min(520px, 100%);
  border-collapse: collapse;
  ${typography['Body/Body 2 Long']}
`;

const StyledTableHead = styled.thead`
  background: var(--admiral-color-base-neutral-base2-rest, ${(p) => p.theme.color['Base/Neutral/Base 2/Rest']});
`;

const StyledCell = styled.th`
  width: 50%;
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid
    var(--admiral-color-stroke-neutral-subtle-rest, ${(p) => p.theme.color['Stroke/Neutral/Subtle/Rest']});
`;

const StyledBodyCell = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid
    var(--admiral-color-stroke-neutral-subtle-rest, ${(p) => p.theme.color['Stroke/Neutral/Subtle/Rest']});
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background: var(--admiral-color-base-neutral-base2-rest, ${(p) => p.theme.color['Base/Neutral/Base 2/Rest']});
  }
`;

const StyledMonospaceSection = styled.section`
  display: grid;
  gap: 28px;
  margin-top: 28px;
`;

const StyledMonospaceList = styled.div`
  display: grid;
  gap: 48px;
`;

const StyledMonospacePreview = styled.div<{ $styleName: TypographyTextStyleName }>`
  display: flex;
  gap: 24px;
  align-items: baseline;
  min-width: 0;
  color: var(--admiral-color-text-neutral-text1-rest, ${(p) => p.theme.color['Text/Neutral/Text 1/Rest']});
  ${({ $styleName }) => typography[$styleName]}
`;

const StyledMonospaceSize = styled.span`
  color: var(--admiral-color-text-neutral-text2-rest, ${(p) => p.theme.color['Text/Neutral/Text 2/Rest']});
`;

const renderTags = (tags: string[]) => (
  <StyledTagList>
    {tags.map((tag) => (
      <StyledTag key={tag}>{tag}</StyledTag>
    ))}
  </StyledTagList>
);

const renderSection = ({ title, rows }: TypographyTagSection) => (
  <StyledSection key={title}>
    <StyledSectionHeader>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <StyledTagsTitle>Тэги</StyledTagsTitle>
    </StyledSectionHeader>

    <StyledTagRows>
      {rows.map(({ name, styleName, tags }) => {
        const style = typography[styleName] as TypographyStyle;

        return (
          <StyledRow key={name}>
            <StyledRowCell>
              <StyledCompactPreview>
                <StyledCompactName $styleName={styleName}>{name}</StyledCompactName>
                <StyledCompactSize $styleName={styleName}>{formatSize(style)}</StyledCompactSize>
              </StyledCompactPreview>
            </StyledRowCell>
            <StyledRowCell>{renderTags(tags)}</StyledRowCell>
          </StyledRow>
        );
      })}
    </StyledTagRows>
  </StyledSection>
);

export const TypographyTagsTemplate = () => (
  <StyledPage>
    <StyledTitle>Стили и тэги</StyledTitle>

    <StyledContent>
      <StyledSection>
        <StyledSectionHeader>
          <StyledSectionTitle>Header</StyledSectionTitle>
          <StyledTagsTitle>Тэги</StyledTagsTitle>
        </StyledSectionHeader>

        <StyledTagRows>
          {headerRows.map(({ name, styleName, tags }) => {
            const style = typography[styleName] as TypographyStyle;

            return (
              <StyledRow key={name}>
                <StyledRowCell>
                  <StyledHeaderPreview $styleName={styleName}>
                    <span>{name}</span>
                    <StyledHeaderSize>{formatSize(style)}</StyledHeaderSize>
                  </StyledHeaderPreview>
                </StyledRowCell>
                <StyledRowCell>{renderTags(tags)}</StyledRowCell>
              </StyledRow>
            );
          })}
        </StyledTagRows>
      </StyledSection>

      {sections.map(renderSection)}

      <StyledDefaultStyles>
        <StyledDefaultTitle>Дефолтные стили текста для основных тэгов</StyledDefaultTitle>
        <StyledTable>
          <StyledTableHead>
            <tr>
              <StyledCell>Tag</StyledCell>
              <StyledCell>Text style</StyledCell>
            </tr>
          </StyledTableHead>
          <tbody>
            {defaultTagRows.map(([tag, style]) => (
              <StyledTableRow key={tag}>
                <StyledBodyCell>{tag}</StyledBodyCell>
                <StyledBodyCell>{style}</StyledBodyCell>
              </StyledTableRow>
            ))}
          </tbody>
        </StyledTable>

        <StyledMonospaceSection>
          <StyledMonospaceTitle>Моноширинный шрифт</StyledMonospaceTitle>
          <StyledMonospaceText>В библиотеке есть набор стилей моноширинного шрифта Source Code Pro</StyledMonospaceText>
          <StyledMonospaceList>
            {monospaceRows.map(({ name, styleName }) => {
              const style = typography[styleName] as TypographyStyle;

              return (
                <StyledMonospacePreview key={name} $styleName={styleName}>
                  <span>{name}</span>
                  <StyledMonospaceSize>{formatSize(style)}</StyledMonospaceSize>
                </StyledMonospacePreview>
              );
            })}
          </StyledMonospaceList>
        </StyledMonospaceSection>
      </StyledDefaultStyles>
    </StyledContent>
  </StyledPage>
);
