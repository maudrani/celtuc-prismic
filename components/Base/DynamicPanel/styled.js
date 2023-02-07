import styled, { css } from 'styled-components';
import { GetSizeValue } from 'utils/adapters';
import {
  GetBackgroundByType,
  GetFontColorByType,
  xAlign,
  yAlign,
} from './adapters/styles';

const THEME_CSS = css`
  ${({
    theme,
    themeName,
    backgroundType,
    backgroundDirection,
    backgroundColor,
    backgroundOpacity,
  }) =>
    GetBackgroundByType({
      theme,
      themeName,
      type: backgroundType,
      direction: backgroundDirection,
      color: backgroundColor,
      opacity: backgroundOpacity,
    })};

  ${({ theme, themeName, fontColors, fontType, fontOpacity, fontDirection }) =>
    GetFontColorByType({
      theme,
      themeName,
      type: fontType,
      colors: fontColors,
      opacity: fontOpacity,
      direction: fontDirection
    })}
`;

const SIZE_CSS = css`
  font-size: ${({ size }) => GetSizeValue(size).font_size}px;
`;

const ALIGNMENT = css`
  ${({ align_y }) => yAlign(align_y)}
  ${({ align_x }) => xAlign(align_x)}
`;

export const DynamicPanelContainer = styled.div`
  width: 100%;
  max-width: ${({ width }) => width}%;

  min-height: ${({ height }) => height}vh;

  ${THEME_CSS}
  ${SIZE_CSS}
  ${ALIGNMENT}
`;
