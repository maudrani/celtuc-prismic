import { css } from "styled-components";

const ScrollbarStyles = css`
  html,
  body {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */

    /* width */
    ::-webkit-scrollbar {
      width: 0px;
      display: none;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background-color: transparent;
      width: 0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: transparent;
      width: 0;
    }
  }
`;

export default ScrollbarStyles;
