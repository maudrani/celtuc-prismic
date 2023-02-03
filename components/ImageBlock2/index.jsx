import React, { createContext, useEffect, useRef, useState } from 'react';
import useWindowsWidth from 'utils/hooks/useWindowsWidth';
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
    align_y,
    align_x, // Deprecated
    break_height_trigger,
    grid_responsive_trigger,
  } = getDataProps(data);

  const [elementsData, setElementsData] = useState({
    textBlock: {},
    container: {},
  });

  const imageBlockRef = useRef(null);
  const windowsWidth = useWindowsWidth();

  useEffect(() => {
    if (!imageBlockRef.current) return;

    const DOM_ELEMENTS = {
      container: imageBlockRef.current,
      get customDynamicPanel() {
        return this.container.children[0];
      },
    };

    const styles = window.getComputedStyle(DOM_ELEMENTS.customDynamicPanel);
    const ySpacing = Number(styles.paddingTop.replace('px', '')) * 2;

    setElementsData((e) => ({
      ...e,
      container: {
        spacing: ySpacing,
        total_height: DOM_ELEMENTS.container?.offsetHeight,
        usable_height: DOM_ELEMENTS.container?.offsetHeight - ySpacing,
      },
    }));
  }, [windowsWidth]);

  return (
    <div ref={imageBlockRef}>
      <CustomDynamicPanel
        spacing={spacing}
        height={height}
        data={{ theme, size, align_y, align_x }}
        elements_amount={items?.length}
        break_height_trigger={break_height_trigger}
      >
        <div className={!isFullWidth ? 'uContainContent' : ''}>
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
