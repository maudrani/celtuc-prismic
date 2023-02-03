import React from 'react';
import { parseDataProp } from './adapters';
import { DynamicPanelContainer } from './styled';

const DynamicPanel = (props) => {
  const {
    theme,
    width,
    size,
    align,
    height,
    background_type,
    content_direction,
    align_y,
    align_x,
  } = parseDataProp(props.data);

  return (
    <DynamicPanelContainer
      themeName={theme}
      width={width}
      height={height}
      size={size}
      align={align}
      background_type={background_type}
      content_direction={content_direction}
      align_y={align_y}
      align_x={align_x}
      {...props}
    >
      {props.children}
    </DynamicPanelContainer>
  );
};

export default DynamicPanel;
