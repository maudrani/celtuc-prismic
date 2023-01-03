import React from 'react';
import RichText from '../Base/RichText';
import { getDataProps, getRepeatedContents } from './adapters';
import { CustomDynamicPanel, TextBlockContainer } from './styled';

const TextBlock = ({ data }) => {
  const { items, theme, align, size, width, gap, spacing } = getDataProps(data);

  return (
    <CustomDynamicPanel data={{ theme, size }}>
      <TextBlockContainer
        className={'uContainContent'}
        align={align}
        width={width}
        gap={gap}
        spacing={spacing}
      >
        {getRepeatedContents(items).map((text, idx) => (
          <RichText key={`rich-text-${idx}`} data={{ markdown: text }} />
        ))}
      </TextBlockContainer>
    </CustomDynamicPanel>
  );
};

export default TextBlock;
