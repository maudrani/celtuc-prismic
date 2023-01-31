import React, { createContext, useEffect, useRef, useState } from 'react';
import { getDataProps, getRepeatedContents } from './adapters';
import { CustomDynamicPanel, ImagesContainer, WidthLimiter } from './styled';
import Image from './components/Image';

export const ImageBlockContext = createContext({});

const ImageBlock = ({ data }) => {
  const {
    items,
    theme,
    size,
    width,
    isFullWidth,
    gap,
    spacing,
    content_outside_image,
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

    setElementsData((e) => ({ ...e, container: { spacing: ySpacing } }));
  }, []);

  return (
    <div ref={imageBlokRef}>
      <ImageBlockContext.Provider value={{ setElementsData, elementsData }}>
        <CustomDynamicPanel
          data={{ theme, size }}
          height={height}
          minHeight={elementsData.container.spacing + elementsData.textBlock.height}
          spacing={spacing}
          id={'imageBlockContainer'}
        >
          <div
            className={!isFullWidth ? 'uContainContent' : ''}
            style={{ height: '100%' }}
          >
            <WidthLimiter width={width}>
              <ImagesContainer gap={gap}>
                {getRepeatedContents(items).map((item, idx) => (
                  <Image
                    key={`rich-text-${idx}`}
                    data={{ ...item, content_outside_image, variant }}
                  />
                ))}
              </ImagesContainer>
            </WidthLimiter>
          </div>
        </CustomDynamicPanel>
      </ImageBlockContext.Provider>
    </div>
  );
};

export default ImageBlock;
