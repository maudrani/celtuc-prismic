import styled from 'styled-components';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';

export const TextOnImageContainer = styled(DynamicPanel)`
  position: relative;
  margin: 0 auto;
`;

export const TextContainer = styled(DynamicPanel)`
  z-index: 1;
  
  *{
    text-align: ${({textAlign}) => textAlign};
  }

  h5 {
    line-height: 1;
  }
`;

export const ImgContainer = styled(DynamicPanel)`
  position: absolute;
  z-index: 0;
`;
