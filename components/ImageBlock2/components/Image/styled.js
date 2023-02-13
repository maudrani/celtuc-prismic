import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import styled from 'styled-components';

export const TextBlockDynamicPanel = styled(DynamicPanel)`
  height: 100%;
  z-index: 2;
  position: relative;
  display: flex;
`;

export const TextContainer = styled(DynamicPanel)`
  display: flex;
`;

export const WidthLimiter = styled.div`
  display: flex;
  max-width: ${({ width }) => width} !important;
  padding: 1.2em;
`;

export const ImageWithInnerTextContainer = styled.div`
  position: relative;
  height: ${({ height }) => height};
`;

export const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  z-index: 1;
`;

export const MainContainer = styled(DynamicPanel)`
  height: 100%;
  display: grid;
`;
