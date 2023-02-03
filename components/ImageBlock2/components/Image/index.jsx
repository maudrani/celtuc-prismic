import FadeInSection from '@/components/Base/Animations/components/FadeIn';
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
  } = getDataProps(data);

  const [minImageHeight, setMinImageHeight] = useState(0);
  const imageBlockRef = useRef(null);

  useEffect(() => {
    if (!document || !imageBlockRef.current) return;

    const initialImageHeight = Number(image_height.replace('px', ''));

    const textHeight = hasContent
      ? imageBlockRef.current.querySelector(
          '[data-id="image-block_text-block-container"]'
        ).offsetHeight
      : 0;

    if (textHeight > initialImageHeight) {
      setMinImageHeight(`${textHeight}px`);
    } else {
      setMinImageHeight(image_height);
    }
  }, [image_height]);

  return (
    <FadeInSection>
      <div ref={imageBlockRef} style={{ height: '100%' }}>
        <ImageWithInnerTextContainer height={minImageHeight}>
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
                <TextBlockRaw
                  data={{
                    items: [{ content }],
                    data: { spacing, align: text_align },
                  }}
                />
              </WidthLimiter>
            </TextBlockDynamicPanel>
          )}
          <Img src={image.url} />
        </ImageWithInnerTextContainer>
      </div>
    </FadeInSection>
  );
};

export default ImageWithInnerText;
