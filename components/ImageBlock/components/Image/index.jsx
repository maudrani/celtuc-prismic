import Img from '@/components/Base/Img';
import React from 'react';
import { getDataProps } from './adapters';
import { CustomDynamicPanel, ImageContainer, WidthLimiter } from './styled';
import { TextBlockRaw } from '@/components/TextBlock';

const Image = ({ data }) => {
  const {
    image,
    content,
    theme,
    theme_background,
    size,
    text_align,
    align_x,
    align_y,
    position,
    spacing,
    width,
    gap,
    content_outside_image,
  } = getDataProps(data);

  return (
    <ImageContainer position={position} gap={gap} content_outside_image={content_outside_image} >
      <CustomDynamicPanel
        data={{ theme, size }}
        align_y={align_y}
        align_x={align_x}
        content_outside_image={content_outside_image}
        position={position}
        className="imageblock-textblock"
      >
        <WidthLimiter width={width}>
          <TextBlockRaw
            data={{
              items: [{ content }],
              data: { spacing, align: text_align },
            }}
          />
        </WidthLimiter>
      </CustomDynamicPanel>
      <div className="imageblock-image">
        <Img src={image.url} />
      </div>
    </ImageContainer>
  );
};

export default Image;
