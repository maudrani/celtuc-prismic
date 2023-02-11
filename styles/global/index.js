import CONFIG from '../config.js';
import { createGlobalStyle, css } from 'styled-components';
import CssReset from './css-reset';
import FontStyles from './fonts';
import Precomps from './precomps';
import Sizes from './sizes';
import ScrollbarStyles from './scrollbar';

const WireframeMode = css`
  body {
    * {
      opacity: 0.95;
      border: 1px solid rgba(200, 100, 190, 1);
      background-color: rgba(100, 255, 90, 0.2);
    }
  }
`;

export const GlobalStyles = createGlobalStyle`
  ${CssReset}
  ${ScrollbarStyles}
  ${FontStyles}
  ${Precomps}
  // ${Sizes}  
  // DISABLED UNTIL WE WORK IT BETTER
  ${CONFIG.wireframeMode && WireframeMode}

  body {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors['dark-font']};

    #__next {
      height: 100%;
    }
  }
`;
