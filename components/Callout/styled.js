import styled from 'styled-components';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import Img from '../Base/Core/Img';

export const CalloutContainer = styled(DynamicPanel)`
  text-align: center;
  margin: 0 auto;
  overflow: hidden;

  align-items: stretch;
`;

export const CustomImg = styled(Img)`
  img {
    object-fit: contain;
  }
`
