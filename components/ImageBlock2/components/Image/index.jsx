import Animation from '@/components/Base/Animation';
import Img from '@/components/Base/Img';
import { TextBlockRaw } from '@/components/TextBlock';
import React, { useState } from 'react';
import { getDataProps } from './adapters';
import {
  ImageWithInnerTextContainer,
  WidthLimiter,
  TextBlockDynamicPanel,
  ImageContainer,
  TextContainer,
} from './styled';

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
    hasContent,
    image_animation,
    content_animation,
    image_has_anim,
  } = getDataProps(data);

  const [imageAnimEnd, setImageAnimEnd] = useState(!image_has_anim);

  return (
    <div style={{ height: '100%' }}>
      <ImageWithInnerTextContainer height={'100%'}>
        {hasContent && (
          <TextBlockDynamicPanel
            data={{ theme, size }}
            align_y={align_y}
            align_x={align_x}
            className="imageblock-textblock"
            background_type={'none'}
          >
            <TextContainer
              width={width}
              data={{ theme, size, background_type, align_y, align_x }}
              content_direction={align_y}
            >
              <WidthLimiter>
                {imageAnimEnd && (
                  <TextBlockRaw
                    data={{
                      items: [{ content, animation: content_animation }],
                      data: { spacing, align: text_align },
                    }}
                  />
                )}
              </WidthLimiter>
            </TextContainer>
          </TextBlockDynamicPanel>
        )}

        <ImageContainer>
          <Animation
            data={{ type: image_animation }}
            onAnimEnd={(e) => setImageAnimEnd(e)}
          >
            <Img src={image.url} />
          </Animation>
        </ImageContainer>
      </ImageWithInnerTextContainer>
    </div>
  );
};

export default ImageWithInnerText;
