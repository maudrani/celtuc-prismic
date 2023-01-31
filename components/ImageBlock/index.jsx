import React from 'react';
import { getDataProps, getRepeatedContents } from './adapters';
import { CustomDynamicPanel, ImagesContainer, WidthLimiter } from './styled';
import Image from './components/Image';

const ImageBlock = ({ data }) => {
  const { items, theme, size, width, gap, spacing, content_outside_image, variant, height } =
    getDataProps(data);

  return (
    <CustomDynamicPanel data={{ theme, size, height }}>
      <div className={'uContainContent'}>
        <WidthLimiter width={width}>
          <ImagesContainer gap={gap} spacing={spacing}>
            {getRepeatedContents(items).map((item, idx) => (
              <Image key={`rich-text-${idx}`} data={{...item, content_outside_image, variant}} />
            ))}
          </ImagesContainer>
        </WidthLimiter>
      </div>
    </CustomDynamicPanel>
  );
};

export default ImageBlock;
