import styled from 'styled-components';

export const TypedSectionContainer = styled.section`
  width: 100%;

  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 0.2s;
`;
