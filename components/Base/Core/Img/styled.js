import styled from 'styled-components';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';

export const CustomDynamicPanel = styled(DynamicPanel)`
  position: relative;
  width: 100%;  
  height: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: ${({objectFit}) => objectFit};
  }
`;
