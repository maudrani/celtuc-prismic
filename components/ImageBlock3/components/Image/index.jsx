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
} from './styled';
import DynamicPanel from '@/components/Base/DynamicPanel';

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
    image_align_y,
    image_align_x,
    spacing,
    width,
    hasContent,
    image_animation,
    content_animation,
    image_has_anim,
    position,
    image_height,
  } = getDataProps(data);

  const [imageAnimEnd, setImageAnimEnd] = useState(!image_has_anim);

  return (
    <ImageWithInnerTextContainer position={position}>
      {hasContent && (
        <TextBlockDynamicPanel
          data={{ theme, size, align_y, align_x }}
          className="imageblock-textblock"
          background_type={background_type}
          content_direction={align_y}
          data-id={'image-block_text-block-container'}
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
        <DynamicPanel
          data={{ theme, align_x: image_align_x, align_y: image_align_y }}
        >
          <HeightLimiter height={image_height}>
            <Img src={image.url} />
          </HeightLimiter>
        </DynamicPanel>
      </Animation>
    </ImageWithInnerTextContainer>
  );
};

export default ImageWithInnerText;
