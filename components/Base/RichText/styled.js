import styled from 'styled-components';
import { css } from 'styled-components';

// PRESETS
const SizePresets = {
  xs: css`
    p,
    li {
      line-height: 1.333;
      letter-spacing: normal;
      font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    }
  `,
  sm: css`
    p {
      line-height: 1.4705882353;
      letter-spacing: -0.022em;
      font-family: SF Pro Text,SF Pro Icons,Helvetica Neue,Helvetica,Arial,sans-serif;
    }
  `,
  md: css`
    p {
      line-height: 1.381002381;
      letter-spacing: 0.011em;
    }
  `,
  lg: css`
    p {
      line-height: 1.381002381;
      letter-spacing: 0.011em;
    }
  `,
  xl: css`
    p {
      line-height: 1.381002381;
      letter-spacing: 0.011em;
    }
  `,
  xxl: css`
    p {
      line-height: 1.381002381;
      letter-spacing: 0.011em;
    }
  `,
};

// PRESETS END

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
  * {
    word-break: break-word;
  }

  p,
  li {
    position: relative;

    font-size: 1em;
    font-weight: 400;
    line-height: 1.4705882353;
    letter-spacing: -0.022em;
  }

  ${({ size }) => SizePresets[size]}
`;

const PARAGRAPH = css`
  p {
    hyphens: auto;

    margin-bottom: 1.5em;
  }
`;

const BOLD_ITALIC = css`
  * {
    strong {
      font-weight: 600;
    }

    em {
      font-style: italic;
    }
  }
`;

const ANCHOR = css`
  a {
    color: ${({ theme }) => theme.colors['link-font']};
  }
`;

const LISTS = css`
  ul {
    list-style-position: inside;
    /* padding-left: 2em; */

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
    /* padding-left: 2em; */

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
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 300;
  }

  h1 {
    font-size: 3.5em;
  }
  h2 {
    font-size: 2.8em;
  }
  h3 {
    font-size: 2.2em;
  }
  h4 {
    font-size: 1.7em;
  }
  h5 {
    font-size: 1.3em;
  }
  h6 {
    font-size: 1em;
  }

  h1,
  h2 {
    margin-bottom: 0.25em;
    padding-bottom: 0.3em;
    line-height: 1.0834933333;
    letter-spacing: -0.003em;
  }

  h3,
  h4,
  h5,
  h6 {
    line-height: 1.4;
  }
`;

const QUOTES = css`
  blockquote {
    position: relative;

    left: 2em;
    padding: 1.5em 1em;
    margin: 1em 0;

    background-color: ${({ theme }) => theme.colors['mid-light']}00;
    border-left: 8px solid ${({ theme }) => theme.colors['black']}10;

    blockquote {
      margin-top: 1.5em;
      left: 1em;
      background-color: transparent;
      box-shadow: none;
    }
  }
`;

const CODE = css`
  pre,
  code {
    font-family: SF Pro Display;
  }

  pre {
    background-color: ${({ theme }) => theme.colors['mid-light']};
    font-size: 85%;
    line-height: 1.45;
    margin-bottom: 16px;
    margin-top: 0;
    overflow: auto;
    padding: 16px;
  }

  code {
    background-color: ${({ theme }) => theme.colors['mid-light']};
  }

  code,
  pre {
    border-radius: 3px;
    font-weight: inherit;
  }

  pre > code {
    background-position: 0 0;
    font-size: 100%;
    white-space: pre;
    word-break: normal;
  }

  pre,
  pre code {
    overflow-wrap: normal;
  }

  pre code {
    background-color: initial;
    border-style: initial;
    border-width: 0;
    display: inline;
    line-height: inherit;
    margin: 0;
    overflow: visible;
    padding: 0;
  }

  > :first-child {
    margin-top: 0 !important;
  }

  > :last-child {
    margin-bottom: 0 !important;
  }
`;

const TABLE = css`
  table {
    -webkit-border-horizontal-spacing: 0;
    -webkit-border-vertical-spacing: 0;
    border-collapse: collapse;
    display: block;
    margin-bottom: 16px;
    margin-top: 0;
    overflow: auto;
    width: 100%;
  }

  table th {
    font-weight: 600;
  }

  table td,
  table th {
    border: 1px solid ${({ theme }) => theme.colors['black']}20;
    padding: 6px 13px;
  }

  table tr {
    background-color: transparent;
    border-top: 1px solid ${({ theme }) => theme.colors['black']}20;
  }

  table tr:nth-child(2n) {
    background-color: ${({ theme }) => theme.colors['black']}20;
  }
`;

export const RichTextContainer = styled.div`
  ${PRINT}
  ${GENERAL}
  ${PARAGRAPH}
  ${BOLD_ITALIC}
  ${ANCHOR}
  ${LISTS}
  ${HEADINGS}
  ${QUOTES}
  ${CODE}
  ${TABLE}
`;
