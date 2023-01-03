import { DIRECTION_NAMES, THEME_NAMES as _th } from '@/constants/styles';
import { query } from '@/styles/theme/data/breakpoints';
import styled from 'styled-components';
import { fluid } from 'utils/styles/fluid';

const themeVariables = (theme, themeName) => ({
  backgroundColor: {
    [_th.dark]: theme.colors.black,
    [_th.light]: theme.colors.white,
    [_th['mid-light']]: theme.colors['mid-light'],
  }[themeName],
  fontColor: {
    [_th.dark]: theme.colors.white,
    [_th.light]: theme.colors.black,
    [_th['mid-light']]: theme.colors.black,
  }[themeName],
  fontWeight: {
    [_th.dark]: 300,
    [_th.light]: 400,
    [_th['mid-light']]: 400,
  }[themeName],
  borderColor: {
    [_th.dark]: theme.colors.borders.white,
    [_th.light]:  theme.colors.borders.black,
    [_th['mid-light']]:  theme.colors.borders.black,
  }[themeName],
});

const orientationVariables = (orientationName) => {
  const isRight = orientationName === DIRECTION_NAMES.right;

  return {
    imageGridCol: isRight ? 1 : 2,
    textGridCol: isRight ? 2 : 1,
  };
};

export const ImageWithTextContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: ${({ size }) => `${size}vh`};

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-flow: dense;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, themeName }) =>
    themeVariables(theme, themeName).backgroundColor};

  ${query.down('md')} {
    grid-template-columns: 1fr;
  }

  .image-container {
    width: 100%;
    height: 100%;
    position: relative;

    grid-column: ${({ orientation }) =>
      orientationVariables(orientation).imageGridCol};
    ${query.down('md')} {
      aspect-ratio: 1/1;
      grid-column: 1;
      grid-row: 2;
    }
  }

  .text-container {
    // Orientation
    grid-column: ${({ orientation }) =>
      orientationVariables(orientation).textGridCol};
    ${query.down('md')} {
      grid-row: 1;
      grid-column: 1;
    }
  }
`;

export const TextContainer = styled.div`
  height: 100%;
  min-height: 224px;

  padding: 60px;
  ${fluid('padding', '', [{ 1024: '60px 40px', 768: '34px 20px' }])}

  font-size: 16px; // Fluid sizes
  ${fluid('font-size', 'px', [{ 1200: 14, 768: 11 }])}

  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: center;
  gap: 42px;

  ${query.down('md')} {
    gap: 24px;
  }

  color: ${({ theme, themeName }) =>
    themeVariables(theme, themeName).fontColor};
  text-align: center;

  .main-texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h4 {
      font-size: 3em;
      line-height: 1.2;
      padding-bottom: 20px;
      border-bottom: 1px solid
        ${({ theme, themeName }) =>
          themeVariables(theme, themeName).borderColor};
      width: 100%;
    }
    p {
      font-size: 1.375em;
      opacity: 0.8;
      font-weight: ${({ theme, themeName }) =>
        themeVariables(theme, themeName).fontWeight};

      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    }

    ${query.down('md')} {
      gap: 24px;
      h4 {
        padding-bottom: 12px;
      }
    }
  }

  span {
    font-size: 0.75em;
    ${fluid('font-size', 'em', [{ 1200: 1 }])}
    line-height: 1.5;
    opacity: 0.8;

    &.top-text {
      font-weight: 600;
    }

    &.bottom-text {
      font-weight: 300;
    }
  }
`;
