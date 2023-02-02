import React, { useEffect, useRef, useState } from 'react';
import { getDataProps, getRepeatedContents } from './adapters';
import ImageWithInnerText from './components/Image';
import {
  CustomDynamicPanel,
  ImageBlockContainer,
  WidthLimiter,
} from './styled';

const ImageBlock2 = ({ data }) => {
  const {
    items,
    theme,
    size,
    width,
    isFullWidth,
    gap,
    spacing,
    variant,
    height,
  } = getDataProps(data);

  const [elementsData, setElementsData] = useState({
    textBlock: {},
    container: {},
  });

  const imageBlokRef = useRef(null);

  useEffect(() => {
    if (!imageBlokRef.current) return;

    const container = imageBlokRef.current;
    const styles = window.getComputedStyle(container.children[0]);
    const ySpacing = Number(styles.paddingTop.replace('px', '')) * 2;

    setElementsData((e) => ({
      ...e,
      container: {
        spacing: ySpacing,
        total_height: container?.offsetHeight,
        usable_height: container?.offsetHeight - ySpacing,
      },
    }));
  }, []);

  return (
    <div ref={imageBlokRef}>
      <CustomDynamicPanel data={{ theme, size }} spacing={spacing} height={height}>
        <div className={!isFullWidth ? 'uContainContent' : ''} style={{height: '100%'}}>
          <WidthLimiter width={width}>
            <ImageBlockContainer gap={gap}>
              {getRepeatedContents(items).map((item, idx) => (
                <ImageWithInnerText
                  key={`rich-text-${idx}`}
                  data={{
                    ...item,
                    variant,
                    containerHeight: elementsData.container.usable_height,
                  }}
                />
              ))}
            </ImageBlockContainer>
          </WidthLimiter>
        </div>
      </CustomDynamicPanel>
    </div>
  );
};

export default ImageBlock2;
