import styled from 'styled-components';

export const ButtonWrapper = styled.button`
  letter-spacing: .011em;

  cursor: pointer;
  transition: filter 0.2s ease-out;

  &:hover {
    transition: filter 0.6s ease-out;
    filter: brightness(1.4);
  }
`;
