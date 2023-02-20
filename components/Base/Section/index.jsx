import React from 'react';
import DynamicPanel from '../Core/DynamicPanel';
import { getDataProps } from './adapters';
import settings from './settings';
import { SectionWrapper } from './styled';

const Section = (props) => {
  const parsedData = { ...settings[props.type || 'section'], ...props.data };

  
  const { wrapperProps, parentProps } = getDataProps(parsedData);
  const no_data_props = { ...props, data: {} };

  return (
    <SectionWrapper {...no_data_props} {...wrapperProps}>
      <DynamicPanel data={{ ...parentProps }}>{props.children}</DynamicPanel>
    </SectionWrapper>
  );
};

export default Section;
