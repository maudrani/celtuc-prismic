import React from 'react';

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
    grid_responsive_trigger,
    height,
  } = getDataProps(data);

  return (
    <CustomDynamicPanel
      spacing={spacing}
      height={height}
      data={{ theme, size }}
    >
      <div
        className={!isFullWidth ? 'uContainContent' : ''}
        style={{ height: '100%' }}
      >
        <WidthLimiter width={width}>
          <ImageBlockContainer
            gap={gap}
            data={{ theme, size }}
            grid_responsive_trigger={grid_responsive_trigger}
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
