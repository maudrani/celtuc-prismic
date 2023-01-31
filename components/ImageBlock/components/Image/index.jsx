import Img from '@/components/Base/Img';
import React, { useContext, useEffect, useRef } from 'react';
import { getDataProps } from './adapters';
import {
  CustomDynamicPanel,
  ImageBlockImage,
  ImageContainer,
  WidthLimiter,
} from './styled';
import { TextBlockRaw } from '@/components/TextBlock';
import { ImageBlockContext } from '../..';

const Image = ({ data }) => {
  const {
    image,
    content,
    theme,
    background_type,
    size,
    text_align,
    align_x,
    align_y,
    position,
    spacing,
    width,
    height,
    gap,
    content_outside_image,
  } = getDataProps(data);

  const { setElementsData, elementsData } = useContext(ImageBlockContext);

  const textBlockRef = useRef(null);

  useEffect(() => {
    setElementsData((e) => ({
      ...e,
      textBlock: {
        height: textBlockRef.current.offsetHeight + 40,
        width: textBlockRef.current.offsetWidth,
      },
    }));
  }, []);

  console.log(elementsData)

  return (
    <ImageContainer
      position={position}
      gap={gap}
      content_outside_image={content_outside_image}
      height={height}
      minHeight={elementsData.textBlock.height}
    >
      <CustomDynamicPanel
        data={{ theme, size }}
        align_y={align_y}
        align_x={align_x}
        content_outside_image={content_outside_image}
        position={position}
        className="imageblock-textblock"
        background_type={background_type}
        content_direction={position}
      >
        <div ref={textBlockRef}>
          <WidthLimiter width={width} minWidth={elementsData.textBlock.width}>
            <TextBlockRaw
              data={{
                items: [{ content }],
                data: { spacing, align: text_align },
              }}
            />
          </WidthLimiter>
        </div>
      </CustomDynamicPanel>
      <ImageBlockImage>
        <Img src={image.url} />
      </ImageBlockImage>
    </ImageContainer>
  );
};

export default Image;
