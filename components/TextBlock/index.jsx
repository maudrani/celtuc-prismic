import React from 'react';
import RichText from '../Base/RichText';
import { getDataProps, getRepeatedContents } from './adapters';
import { CustomDynamicPanel, TextBlockContainer } from './styled';

export const TextBlockRaw = ({ data, }) => {
  const { items, align, width, gap, spacing } = getDataProps(data);

  return (
    <TextBlockContainer align={align} width={width} gap={gap} spacing={spacing}>
      {getRepeatedContents(items).map((text, idx) => (
        <RichText key={`rich-text-${idx}`} data={{ markdown: text }} />
      ))}
    </TextBlockContainer>
  );
};

const TextBlock = ({ data }) => {
  const { theme, size } = getDataProps(data);

  return (
    <CustomDynamicPanel data={{ theme, size }}>
      <div className={'uContainContent'}>
        <TextBlockRaw data={data} />
      </div>
    </CustomDynamicPanel>
  );
};

export default TextBlock;
