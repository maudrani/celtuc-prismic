import React, { createContext, useEffect, useState } from 'react';
import useWindowSize from 'utils/hooks/useWindowsSize';

import { getDataProps, getRepeatedContents } from './adapters';
import ImageWithInnerText from './components/Image';
import {
  CustomDynamicPanel,
  ImageBlockContainer,
  WidthLimiter,
} from './styled';

export const ImageBlockContext = createContext({});

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
    align_y,
    align_x, // Not developed
    break_height_trigger,
    grid_responsive_trigger,
    raw_height,
    prismic_min_height,
    same_images_height, // Not developed
  } = getDataProps(data);

  const [elementsData, setElementsData] = useState({
    texts: {}, // to use on max height prop
    images: {},
    container: {},
  });
  const windowsWidth = useWindowSize();
  const use_container_height = windowsWidth.width > break_height_trigger;

  useEffect(() => {
    const getPrismicHeight = () => {
      return windowsWidth.height * (raw_height / 100);
    };

    setElementsData((e) => ({
      ...e,
      container: {
        prismic_height_px: getPrismicHeight(),
      },
    }));
  }, [windowsWidth.width, windowsWidth.height]);

  const minHeight = () => {
    const { prismic_height_px } = elementsData.container;
    const max_images_height = elementsData.images.max_height;

    if (!prismic_height_px && !prismic_min_height)
      return `${max_images_height}px`;

    if (!use_container_height && !prismic_min_height) return '100%';

    const min_height =
      prismic_min_height > prismic_height_px
        ? prismic_min_height
        : prismic_height_px;

    return `${min_height}px`;
  };

  return (
    <ImageBlockContext.Provider value={{ setElementsData }}>
      <CustomDynamicPanel
        spacing={spacing}
        height={minHeight()}
        data={{ theme, size, align_y, align_x }}
        elements_amount={items?.length}
        break_height_trigger={break_height_trigger}
      >
        <div
          className={!isFullWidth ? 'uContainContent' : ''}
          style={{ height: '100%' }}
        >
          <WidthLimiter width={width}>
            <ImageBlockContainer
              gap={gap}
              data={{ theme, size, align_x, align_y }}
              grid_responsive_trigger={grid_responsive_trigger}
              same_images_height={same_images_height}
            >
              {getRepeatedContents(items).map((item, idx) => (
                <ImageWithInnerText
                  key={`rich-text-${idx}`}
                  data={{
                    ...item,
                    variant,
                  }}
                />
              ))}
            </ImageBlockContainer>
          </WidthLimiter>
        </div>
      </CustomDynamicPanel>
    </ImageBlockContext.Provider>
  );
};

export default ImageBlock2;
