import { css } from 'styled-components';
import { GetBackgroundColor } from './adapters';

export const BACKGROUND_COLOR = css`
  ${({
    theme,
    backgroundType,
    backgroundColors,
    backgroundOpacity,
    backgroundDirection,
  }) => {
    return GetBackgroundColor({
      theme,
      type: backgroundType,
      direction: backgroundDirection,
      colors: backgroundColors,
      opacity: backgroundOpacity,
    });
  }}
`;
