import React, { useEffect, useRef, useState } from 'react';
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
  } = getDataProps(data);

  const [elementsData, setElementsData] = useState({
    textBlock: {},
    container: {},
  });

  const imageBlockRef = useRef(null);
  const windowsWidth = useWindowSize();
  const use_container_height = windowsWidth.width > break_height_trigger;

  useEffect(() => {
    if (!imageBlockRef.current) return;

    const DOM_ELEMENTS = {
      container: imageBlockRef.current,
      get customDynamicPanel() {
        return this.container.children[0];
      },
    };

    const getSpacingSize = () => {
      const styles = window.getComputedStyle(DOM_ELEMENTS.customDynamicPanel);
      return Number(styles.paddingTop.replace('px', '')) * 2;
    };

    const getMinHeightByText = () => {
      const textsHeight = imageBlockRef.current.querySelectorAll(
        '[data-id="image-block_text-block-container"]'
      );

      let minHeight = 0;

      textsHeight.forEach((element) => {
        if (element.offsetHeight > minHeight) {
          minHeight = element.offsetHeight;
        }
      });

      return minHeight;
    };

    const getTotalContainerHeight = () => {
      return DOM_ELEMENTS.container?.offsetHeight;
    };

    const getUsableHeight = () => {
      return (
        use_container_height && getTotalContainerHeight() - getSpacingSize()
      );
    };

    const getPrismicHeight = () => {
      return window.innerHeight * (raw_height / 100);
    };

    setElementsData((e) => ({
      ...e,
      container: {
        spacing: getSpacingSize(),
        total_height: getTotalContainerHeight(),
        usable_height: getUsableHeight(),
        min_height: getMinHeightByText(),
        prismic_height: getPrismicHeight(),
      },
    }));
  }, [windowsWidth.width]);

  const minHeight = () => {
    const { min_height, prismic_height } = elementsData.container;

    if (!use_container_height) return '100%';

    return min_height > prismic_height ? min_height : prismic_height;
  };

  return (
    <div ref={imageBlockRef}>
      <CustomDynamicPanel
        spacing={spacing}
        height={!use_container_height ? '100%' : elementsData.total_height}
        data={{ theme, size, align_y, align_x }}
        elements_amount={items?.length}
        break_height_trigger={break_height_trigger}
      >
        <div
          className={!isFullWidth ? 'uContainContent' : ''}
          style={{ height: minHeight() }}
        >
          <WidthLimiter width={width}>
            <ImageBlockContainer
              gap={gap}
              data={{ theme, size, align_x, align_y }}
              grid_responsive_trigger={grid_responsive_trigger}
            >
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
