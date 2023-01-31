import React from 'react';
import { parseDataProp } from './adapters';
import { DynamicPanelContainer } from './styled';

const DynamicPanel = (props) => {
  const { theme, width, size, align, height } = parseDataProp(props.data);

  return (
    <DynamicPanelContainer
      themeName={theme}
      width={width}
      height={height}
      size={size}
      align={align}
      {...props}
    >
      {props.children}
    </DynamicPanelContainer>
  );
};

export default DynamicPanel;
