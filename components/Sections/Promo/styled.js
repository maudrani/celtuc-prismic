import styled from 'styled-components';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';

export const PromoContainer = styled(DynamicPanel)`
  text-align: center;
  margin: 0 auto;
  overflow: hidden;

  align-items: stretch;
`;

export const TextContainer = styled(DynamicPanel)`
  z-index: 1;

  * {
    text-align: ${({ textAlign }) => textAlign};
  }
`;

export const ImgContainer = styled(DynamicPanel)``;
