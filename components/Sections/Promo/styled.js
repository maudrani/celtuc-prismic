import styled from 'styled-components';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import Img from '@/components/Base/Core/Img';

export const PromoContainer = styled(DynamicPanel)`
  text-align: center;
  margin: 0 auto;
  overflow: hidden;

  align-items: stretch;
`;

export const TextContainer = styled(DynamicPanel)``;

export const CustomImg = styled(Img)`
  height: fit-content !important;

  img {
    object-fit: contain;
  }
`;
