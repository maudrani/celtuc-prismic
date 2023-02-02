import styled from 'styled-components';

export const WidthLimiter = styled.div`
  margin: 0 auto;
  width: 100%;

  // min-width: ${({ minWidth }) => minWidth}px;  MAKES IT USELESS
  max-width: ${({ width }) => width} !important;
`;

export const ImageWithInnerTextContainer = styled.div`
  height: ${({ height }) => height};
`;
