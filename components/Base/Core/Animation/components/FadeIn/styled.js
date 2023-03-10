import styled from 'styled-components';

export const FadeContainer = styled.section`
  opacity: 0;

  @keyframes visible {
    0% {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  &.is-visible {
    animation: visible 0.8s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
  }
`;


