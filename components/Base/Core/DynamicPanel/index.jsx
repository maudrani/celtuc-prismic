import React from 'react';
import { parseDataProp } from './adapters';
import { DynamicPanelContainer } from './styled';

const DynamicPanel = (props) => {
  const {
    size,
    width,
    min_width,
    max_width,
    height,
    min_height,
    max_height,

    direction,
    align_y,
    align_x,
    gap,

    p_t,
    p_r,
    p_b,
    p_l,
    m_t,
    m_r,
    m_b,
    m_l,

    background_type,
    background_color,
    background_opacity,
    background_direction,
    font_type,
    font_color,
    font_gradient_direction,
    font_opacity,

    border_radius,
  } = parseDataProp(props.data);

  const no_data_props = { ...props, data: null };
  
  return (
    <DynamicPanelContainer
      size={size}
      width={width}
      minWidth={min_width}
      maxWidth={max_width}
      height={height}
      minHeight={min_height}
      maxHeight={max_height}
      direction={direction}
      align_y={align_y}
      align_x={align_x}
      gap={gap}
      pT={p_t}
      pR={p_r}
      pB={p_b}
      pL={p_l}
      mT={m_t}
      mR={m_r}
      mB={m_b}
      mL={m_l}
      fontType={font_type}
      fontColors={font_color}
      fontOpacity={font_opacity}
      fontDirection={font_gradient_direction}
      backgroundType={background_type}
      backgroundColors={background_color}
      backgroundOpacity={background_opacity}
      backgroundDirection={background_direction}
      borderRadius={border_radius}
      {...no_data_props}
    >
      {props.children}
    </DynamicPanelContainer>
  );
};

export default DynamicPanel;
