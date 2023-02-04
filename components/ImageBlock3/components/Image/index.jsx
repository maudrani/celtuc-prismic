import Animation from '@/components/Base/Animation';
import Img from '@/components/Base/Img';
import { TextBlockRaw } from '@/components/TextBlock';
import React, { useState } from 'react';
import { getDataProps } from './adapters';
import {
  ImageWithInnerTextContainer,
  WidthLimiter,
  TextBlockDynamicPanel,
  HeightLimiter,
  ImageDynamicPanel,
} from './styled';

const ImageWithInnerText = ({ data }) => {
  const {
    image,
    content,
    theme,
    background_type,
    size,
    text_align,
    content_align_x,
    content_align_y,
    image_align_y,
    spacing,
    width,
    hasContent,
    image_animation,
    content_animation,
    image_has_anim,
    position,
    image_height,
    gap,
  } = getDataProps(data);

  const [imageAnimEnd, setImageAnimEnd] = useState(!image_has_anim);

  return (
    <ImageWithInnerTextContainer position={position} gap={gap}>
      {hasContent && (
        <TextBlockDynamicPanel
          data={{ theme, size, align_y: content_align_y, align_x: content_align_x }}
          background_type={background_type}
          content_direction={content_align_y}
        >
          <WidthLimiter width={width}>
            {imageAnimEnd && (
              <TextBlockRaw
                data={{
                  items: [{ content, animation: content_animation }],
                  data: { spacing, align: text_align },
                }}
              />
            )}
          </WidthLimiter>
        </TextBlockDynamicPanel>
      )}

      <Animation
        data={{ type: image_animation }}
        onAnimEnd={(e) => setImageAnimEnd(e)}
      >
        <ImageDynamicPanel data={{ theme, align_y: image_align_y }}>
          <HeightLimiter height={image_height}>
            <Img src={image.url} />
          </HeightLimiter>
        </ImageDynamicPanel>
      </Animation>
    </ImageWithInnerTextContainer>
  );
};

export default ImageWithInnerText;
