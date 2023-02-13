import React from 'react';
import DynamicPanel from '../Core/DynamicPanel';
import { getDataProps } from './adapters';
import { SectionWrapper } from './styled';

const parent_preset = {
  width: 100,

  p_l: '5vw',
  p_r: '5vw',

  m_l: 'auto',
  m_r: 'auto',
};

const Section = (props) => {
  const {wrapperProps, parentProps } = getDataProps(props.data);
  const no_data_props = { ...props, data: '' };

  return (
    <SectionWrapper {...no_data_props}>
      <DynamicPanel data={wrapperProps}>
        <DynamicPanel data={{ ...parent_preset, ...props.data, ...parentProps }}>
          {props.children}
        </DynamicPanel>
      </DynamicPanel>
    </SectionWrapper>
  );
};

export default Section;
