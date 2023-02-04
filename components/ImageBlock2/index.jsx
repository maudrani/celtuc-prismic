import React, { useEffect, useState } from 'react';
import useWindowSize from 'utils/hooks/useWindowsSize';

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
    align_y,
    align_x, // Deprecated
    break_height_trigger,
    grid_responsive_trigger,
    raw_height,
    prismic_min_height,
    same_images_height, // Not developed
  } = getDataProps(data);

  const [elementsData, setElementsData] = useState({
    textBlock: {},
    container: {},
  });

  const windowsWidth = useWindowSize();
  const use_container_height = windowsWidth.width > break_height_trigger;

  useEffect(() => {
    const getPrismicHeight = () => {
      return window.innerHeight * (raw_height / 100);
    };

    setElementsData((e) => ({
      ...e,
      container: {
        prismic_height: getPrismicHeight(),
      },
    }));
  }, [windowsWidth.width]);

  const minHeight = () => {
    const { prismic_height } = elementsData.container;

    if (!use_container_height && !prismic_min_height) return '100%';

    const min_height =
      prismic_min_height > prismic_height ? prismic_min_height : prismic_height;

    return `${min_height}px`;
  };

  return (
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
  );
};

export default ImageBlock2;
