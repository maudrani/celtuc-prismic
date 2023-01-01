import styled from 'styled-components';
import { css } from 'styled-components';

const PRINT = css`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }
`;

const GENERAL = css`
  p,
  li {
    position: relative;

    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const PARAGRAPH = css`
  p {
    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
    white-space: pre-wrap;

    strong {
      font-weight: 700;
    }

    em {
      font-style: italic;
    }
  }
`;

const ANCHOR = css`
  a {
    color: ${({ theme }) => theme.colors.black}70;
    filter: saturate(7);
    border-bottom: 1px solid ${({ theme }) => theme.colors.black}10;
  }
`;

const LISTS = css`
  ul {
    list-style-position: inside;
    padding-left: 2em;

    li {
      position: relative;
      ::before {
        content: '•';
        font-size: 130%;
        line-height: 0;
        position: relative;
        margin-left: -0.3em;
        position: relative;
        left: -0.3em;
        color: ${({ theme }) => theme.colors.black}40;
      }
    }
  }

  ol {
    list-style: decimal;
    counter-reset: cupcake;
    padding-left: 2em;

    li {
      counter-increment: cupcake;
      ::marker {
        color: ${({ theme }) => theme.colors.black}70;
        font-weight: 300;
      }
    }
  }
`;

const HEADINGS = css`
  h1 h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  }

  h1 {
    font-size: 4em;
  }
  h2 {
    font-size: 3.4em;
  }
  h3 {
    font-size: 2.8em;
  }
  h4 {
    font-size: 2.2em;
  }
  h5 {
    font-size: 1.6em;
  }
  h6 {
    font-size: 1em;
  }
`;

export const RichTextContainer = styled.div`
  font-size: 20px; //FLUID CONTROL

  ${PRINT}
  ${GENERAL}
  ${PARAGRAPH}
  ${ANCHOR}
  ${LISTS}
  ${HEADINGS}

  blockquote {
    position: relative;

    left: 2em;
    padding: 1.5em 1em;
    margin: 1em 0;

    background-color: ${({theme}) => theme.colors['mid-light']}00;
    border-left: 8px solid ${({theme}) => theme.colors['black']}10;

    blockquote {
      margin-top: 1.5em;
      left: 1em;
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

const CSS = css`
  @media print {
    *,
    *:before,
    *:after {
      background: transparent !important;
      color: #000 !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }

    a,
    a:visited {
      text-decoration: underline;
    }

    a[href]:after {
      content: ' (' attr(href) ')';
    }

    abbr[title]:after {
      content: ' (' attr(title) ')';
    }

    a[href^='#']:after,
    a[href^='javascript:']:after {
      content: '';
    }

    pre,
    blockquote {
      border: 1px solid #999;
      page-break-inside: avoid;
    }

    thead {
      display: table-header-group;
    }

    tr,
    img {
      page-break-inside: avoid;
    }

    img {
      max-width: 100% !important;
    }

    p,
    h2,
    h3 {
      orphans: 3;
      widows: 3;
    }

    h2,
    h3 {
      page-break-after: avoid;
    }
  }

  pre,
  code {
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }

  pre {
    padding: 0.5rem;
    line-height: 1.25;
    overflow-x: scroll;
  }

  a,
  a:visited {
    color: #3498db;
  }

  a:hover,
  a:focus,
  a:active {
    color: #2980b9;
  }

  .modest-no-decoration {
    text-decoration: none;
  }

  html {
    font-size: 12px;
  }

  @media screen and (min-width: 32rem) and (max-width: 48rem) {
    html {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 48rem) {
    html {
      font-size: 16px;
    }
  }

  body {
    line-height: 1.85;
  }

  p,
  .modest-p {
    font-size: 1rem;
    margin-bottom: 1.3rem;
  }

  h1,
  .modest-h1,
  h2,
  .modest-h2,
  h3,
  .modest-h3,
  h4,
  .modest-h4 {
    margin: 1.414rem 0 0.5rem;
    font-weight: inherit;
    line-height: 1.42;
  }

  h1,
  .modest-h1 {
    margin-top: 0;
    font-size: 3.998rem;
  }

  h2,
  .modest-h2 {
    font-size: 2.827rem;
  }

  h3,
  .modest-h3 {
    font-size: 1.999rem;
  }

  h4,
  .modest-h4 {
    font-size: 1.414rem;
  }

  h5,
  .modest-h5 {
    font-size: 1.121rem;
  }

  h6,
  .modest-h6 {
    font-size: 0.88rem;
  }

  small,
  .modest-small {
    font-size: 0.707em;
  }

  /* https://github.com/mrmrs/fluidity */

  img,
  canvas,
  iframe,
  video,
  svg,
  select,
  textarea {
    max-width: 100%;
  }

  @import url(http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,300italic,700);

  @import url(http://fonts.googleapis.com/css?family=Arimo:700,700italic);

  html {
    font-size: 18px;
    max-width: 100%;
  }

  body {
    color: #444;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    margin: 0 auto;
    max-width: 48rem;
    line-height: 1.45;
    padding: 0.25rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Arimo, Helvetica, sans-serif;
  }

  h1,
  h2,
  h3 {
    border-bottom: 2px solid #fafafa;
    margin-bottom: 1.15rem;
    padding-bottom: 0.5rem;
    text-align: center;
  }

  blockquote {
    border-left: 8px solid #fafafa;
    padding: 1rem;
  }

  pre,
  code {
    background-color: #fafafa;
  }
`;
