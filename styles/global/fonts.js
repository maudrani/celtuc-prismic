import { css } from 'styled-components';

const FontStyles = css`
  /* SF PRO DISPLAY */
@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Ultralight.otf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Thin.otf');
  font-weight: 200;
  font-style: normal;
}

@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Light.otf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Regular.otf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Medium.otf');
  font-weight: 500;
  font-style: normal;
}

@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Semibold.otf');
  font-weight: 600;
  font-style: normal;
}

@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Bold.otf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Heavy.otf');
  font-weight: 800;
  font-style: normal;
}

@font-face {
  font-family: SF Pro Display;
  src: url('fonts/SF-Pro-Display/SF-Pro-Black.otf');
  font-weight: 900;
  font-style: normal;
}

/* SF PRO TEXT */

@font-face {
  font-family: SF Pro Text;
  src: url('fonts/SF-Pro-Text/SF-Pro-Text-Regular.otf');
  font-weight: 400;
  font-style: normal;
}


  body {
    font-family: SF Pro Display,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    background-color: #fff;
  }

  p {
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1;
    /* letter-spacing: -0.7pt; */
    /* word-spacing: 0.1em; */
  }
`;

export default FontStyles;
