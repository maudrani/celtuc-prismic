import { css } from 'styled-components';

const Precomps = css`
  .gradient {
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background: linear-gradient(
        0deg,
        ${({ theme }) => theme.colors.black} 0%,
        rgba(0, 212, 255, 0) 100%
      );
    }
  }

  .gradient-50 {
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background: linear-gradient(
        0deg,
        ${({ theme }) => theme.colors.black} 0%,
        rgba(0, 212, 255, 0) 30%
      );
    }
  }

  .gradient-left {
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background: linear-gradient(
        90deg,
        ${({ theme }) => theme.colors.black} 5%,
        rgba(0, 212, 255, 0) 100%
      );
    }
  }

  .gradient-circular {
    ::after {
      content: '';
      position: absolute;
      width: 100%;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      background: radial-gradient(
        circle,
        rgba(17, 24, 33, 0) 0%,
        rgba(17, 24, 33, 1) 100%
      );
    }
  }

  .uContainContent {
    width: 100%;
    padding: 0 20px;
    max-width: ${({ theme }) => theme.limits.pageWidth};
    margin: 0 auto;
  }
`;

export default Precomps;
