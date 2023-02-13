import React from 'react';
import DynamicPanel from '@/components/Base/Core/DynamicPanel'
import { ButtonWrapper } from './styled';

const Button = (props) => {
  return (
    <ButtonWrapper {...props}>
      <DynamicPanel
        data={{
          background_color: 'accent-1',
          size: 'sm',
          font_color: 'white',
          p_t: 0.5,
          p_b: 0.5,
          p_r: 1,
          p_l: 1,
          border_radius: 'xxl',

          ...props.data
        }}
      >
        {props.children}
      </DynamicPanel>
    </ButtonWrapper>
  );
};

export default Button;
