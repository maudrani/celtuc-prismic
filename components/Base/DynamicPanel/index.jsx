import React from 'react';
import { parseDataProp } from './adapters';
import { DynamicPanelContainer } from './styled';

const DynamicPanel = (props) => {
  const {
    theme,
    background_type,
    background_color,
    background_opacity,
    font_type,
    font_color,
    font_gradient_direction,
    font_opacity,
    width,
    size,
    align,
    height,
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
      contentDirection={content_direction}
      align_y={align_y}
      align_x={align_x}
      fontType={font_type}
      fontColors={font_color}
      fontOpacity={font_opacity}
      fontDirection={font_gradient_direction}
      backgroundType={background_type}
      backgroundColor={background_color}
      backgroundOpacity={background_opacity}
      {...props}
    >
      {props.children}
    </DynamicPanelContainer>
  );
};

export default DynamicPanel;
