import React from 'react';
import FadeInSection from '../Base/Animations/components/FadeIn';
import RichText from '../Base/RichText';
import { getDataProps, getRepeatedContents } from './adapters';
import { CustomDynamicPanel, TextBlockContainer } from './styled';

export const TextBlockRaw = (props) => {
  const { items, align, width, gap, spacing } = getDataProps(props.data);

  return (
    <TextBlockContainer
      align={align}
      width={width}
      gap={gap}
      spacing={spacing}
      {...props}
    >
      {getRepeatedContents(items).map((text, idx) => (
        <FadeInSection key={`rich-text-${idx}`}>
          <RichText data={{ markdown: text }} />
        </FadeInSection>
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
