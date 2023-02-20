import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import styled from 'styled-components';

export const TextContainer = styled(DynamicPanel)`
  * {
    text-align: ${({ textAlign }) => textAlign};
  }
`;
