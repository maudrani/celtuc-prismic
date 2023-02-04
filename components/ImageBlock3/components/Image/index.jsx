import Animation from '@/components/Base/Animation';
import Img from '@/components/Base/Img';
import { TextBlockRaw } from '@/components/TextBlock';
import React, { useEffect, useRef, useState } from 'react';
import { getDataProps } from './adapters';
import {
  ImageWithInnerTextContainer,
  WidthLimiter,
  TextBlockDynamicPanel,
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
    image_height,
    hasContent,
    image_animation,
    content_animation,
    image_has_anim,
    position
  } = getDataProps(data);

  const [minImageHeight, setMinImageHeight] = useState(0);
  const imageBlockRef = useRef(null);

  const [imageAnimEnd, setImageAnimEnd] = useState(!image_has_anim);

  useEffect(() => {
    if (!document || !imageBlockRef.current) return;

    const initialImageHeight = Number(image_height.replace('px', ''));

    const textHeight = hasContent
      ? imageBlockRef.current.querySelector(
          '[data-id="image-block_text-block-container"]'
        ).children[0].offsetHeight
      : 0;
      
    if (textHeight > initialImageHeight) {
      setMinImageHeight(`${textHeight}px`);
    } else {
      setMinImageHeight(image_height);
    }
  }, [image_height]);

  return (
    <div ref={imageBlockRef} style={{ height: '100%' }}>
      <ImageWithInnerTextContainer height={minImageHeight} position={position}>
        {hasContent && (
          <TextBlockDynamicPanel
            data={{ theme, size }}
            align_y={align_y}
            align_x={align_x}
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
          <Img src={image.url} />
        </Animation>
      </ImageWithInnerTextContainer>
    </div>
  );
};

export default ImageWithInnerText;
