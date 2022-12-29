import { query } from '@/styles/theme/data/breakpoints';
import styled from 'styled-components';
import css from 'styled-jsx/css';
import { fluid } from 'utils/styles/fluid';
import { ORIENTATION_NAMES as _dir, THEME_NAMES as _th } from 'constants/styles';

const themeVariables = (theme, themeName) => ({
  backgroundColor: {
    [_th.dark]: theme.colors.black,
    [_th.light]: theme.colors.white,
    [_th['mid-dark']]: theme.colors['main-light'],
    [_th['mid-light']]: theme.colors['mid-light'],
  }[themeName],
  fontColor: {
    [_th.dark]: theme.colors.white,
    [_th.light]: theme.colors.black,
    [_th['mid-dark']]: theme.colors.white,
    [_th['mid-light']]: theme.colors.black,
  }[themeName],
  borderColor: {
    [_th.dark]: 'rgba(255, 255, 255, 0.3)',
    [_th.light]: 'rgba(0, 0, 0, 0.3)',
    [_th['mid-dark']]: 'rgba(255, 255, 255, 0.3)',
    [_th['mid-light']]: 'rgba(0, 0, 0, 0.3)',
  }[themeName],
});

const directionVariables = (directionnName) => ({
  imageGridCol: {
    [_dir.right]: 1,
    [_dir.left]: 2,
    [_dir.top]: css`
      grid-column: 2 !important;
      grid-row: 1 !important;
    `,
    [_dir.bottom]: css`
      grid-column: 1 !important;
      grid-row: 2 !important;
    `,
  }[directionnName],
  textGridCol: {
    [_dir.right]: 2,
    [_dir.left]: 1,
    [_dir.top]: css`
      grid-column: 1 !important;
      grid-row: 2 !important;
    `,
    [_dir.bottom]: css`
      grid-column: 2 !important;
      grid-row: 1 !important;
    `,
  }[directionnName],
  content: {
    [_dir.top]: css`
      grid-template-columns: 1fr;
      gap: 60px;

      ${query.down('xl')} {
        flex-direction: column !important;
      }
    `,
    [_dir.bottom]: css`
      grid-template-columns: 1fr;
      gap: 60px;
    `,
  }[directionnName],
});

export const VideoWithDescriptionContainer = styled.div`
  position: relative;
  width: 100%;

  background-color: ${({ theme, themeName }) =>
    themeVariables(theme, themeName).backgroundColor};

  .content {
    min-height: ${({ size }) => `${size}vh`};
    width: 100%;
    padding: 80px 20px;
    ${fluid('padding', '', [{ 1024: '60px 20px', 768: '34px 20px' }])}

    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
    justify-content: center;
    align-items: flex-start;

    ${({direction}) => directionVariables(direction).content};

    ${query.down('xl')} {
      display: flex;
      flex-direction: column-reverse;
      gap: 0;
    }
  }

  .video-container {
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    
    filter: drop-shadow(-15px 15px 15px rgba(0, 0, 0, 0.1));

    grid-column: ${({direction}) =>
      directionVariables(direction).imageGridCol};
    ${query.down('md')} {
      grid-column: 1;
      grid-row: 2;
    }

    ${query.down('xl')} {
      height: fit-content;
      justify-content: flex-start;
    }

    .video-transcript {
      color: ${({ theme, themeName }) =>
        themeVariables(theme, themeName).fontColor};
    }
  }

  .text-container {
    // Orientation
    grid-column: ${({direction}) =>
      directionVariables(direction).textGridCol};
    ${query.down('md')} {
      grid-row: 1;
      grid-column: 1;
    }
  }
`;

export const TextContainer = styled.div`
  min-height: 224px;

  font-size: 16px; // Fluid sizes
  ${fluid('font-size', 'px', [{ 1200: 14, 768: 11 }])}

  padding: 0px 60px;
  ${query.down('xl')} {
    padding: 50px 0px;
    padding-right: 20px;
  }
  ${query.down('md')} {
    padding: 20px 0px;
  }

  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: start;
  gap: 42px;

  ${query.down('md')} {
    gap: 24px;
  }

  color: ${({ theme, themeName }) =>
    themeVariables(theme, themeName).fontColor};
  text-align: left;

  .main-texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h4 {
      font-size: 3.5em;
      line-height: 1.2;
      width: 100%;
    }
    p {
      font-size: 1.35em;
      opacity: 1;
      font-weight: 400;
      position: relative;

      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;

      text-indent: 12%;

      :before {
        content: '';
        display: block;
        width: 9%;
        height: 0.5px;
        background: ${({ theme, themeName }) =>
          themeVariables(theme, themeName).fontColor};
        left: 0;
        top: 0.5em;
        position: absolute;
      }
    }

    ${query.down('md')} {
      gap: 20px;
    }
  }
`;
