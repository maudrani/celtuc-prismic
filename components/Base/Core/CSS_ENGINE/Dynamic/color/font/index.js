import { css } from 'styled-components';
import { GetFontColor } from './adapters';

export const FONT_COLOR = css`
  ${({ theme, fontType, fontColors, fontOpacity, fontDirection }) =>
    GetFontColor({
      theme,
      type: fontType,
      direction: fontDirection,
      colors: fontColors,
      opacity: fontOpacity,
    })}
`;
