import Img from '@/components/Base/Img';
import { TextBlockRaw } from '@/components/TextBlock';
import React from 'react';
import { getDataProps } from './adapters';
import { ImageWithInnerTextContainer, WidthLimiter } from './styled';

const ImageWithInnerText = ({ data }) => {
  const {
    image,
    content,
    theme,
    background_type,
    size,
    text_align,
    align_x,
    align_y,
    spacing,
    width,
    height,
  } = getDataProps(data);

  return (
    <ImageWithInnerTextContainer height={height}>
      <div>
        <WidthLimiter width={width}>
          <TextBlockRaw
            data={{
              items: [{ content }],
              data: { spacing, align: text_align },
            }}
          />
        </WidthLimiter>
      </div>
      <Img src={image.url} />
    </ImageWithInnerTextContainer>
  );
};

export default ImageWithInnerText;
