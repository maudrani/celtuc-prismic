import Animation from '@/components/Base/Animation';
import Img from '@/components/Base/Img';
import { TextBlockRaw } from '@/components/TextBlock';
import React, { useContext, useState } from 'react';
import { ImageBlockContext } from '../..';
import { getDataProps } from './adapters';
import {
  ImageWithInnerTextContainer,
  WidthLimiter,
  TextBlockDynamicPanel,
  ImageContainer,
  TextContainer,
  MainContainer,
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
    image_align_y,
    spacing,
    width,
    image_height,
    hasContent,
    image_animation,
    content_animation,
    image_has_anim,
  } = getDataProps(data);

  const [imageAnimEnd, setImageAnimEnd] = useState(!image_has_anim);
  const { setElementsData } = useContext(ImageBlockContext);
  const getImageHeight = (imgData) => {
    setElementsData((e) => {
      const initialHeight = e.images?.max_height || 0;

      return {
        ...e,
        images: {
          max_height:
            imgData.height > initialHeight ? imgData.height : initialHeight,
        },
      };
    });
  };

  return (
    <MainContainer data={{ align_y: image_align_y }}>
      <ImageWithInnerTextContainer height={image_height}>
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
            <Img src={image.url} getImgData={(data) => getImageHeight(data)} />
          </Animation>
        </ImageContainer>
      </ImageWithInnerTextContainer>
    </MainContainer>
  );
};

export default ImageWithInnerText;
