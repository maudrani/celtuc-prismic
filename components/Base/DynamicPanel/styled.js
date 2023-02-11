import { breakpoints } from '@/styles/theme/data/breakpoints';
import styled, { css } from 'styled-components';
import { fluid } from 'utils/styles/fluid';
import {
  GetBackgroundColor,
  GetFontColor,
  xAlign,
  yAlign,
} from './adapters/styles';

const GetValuewithResponsiveTree = (cssProp, values) => {
  if (!values || !cssProp) return;

  if (typeof values !== 'object')
    return `
      ${cssProp}: ${values};
    `;

  return Object.keys(values).map((size_name) => {
    if (size_name === 'main')
      return `
        ${cssProp}: ${values[size_name]};
      `;

    return fluid(cssProp, '', [
      {
        [breakpoints[size_name]]: values[size_name],
      },
    ]);
  });
};

const WIDTH = css`
  ${({ minWidth, width, maxWidth }) => {
    if (width && minWidth && maxWidth) {
      return css`
        width: clamp(${minWidth}, ${width}, ${maxWidth});
      `;
    }

    return css`
      ${({ width }) => GetValuewithResponsiveTree('width', width)}
      ${({ minWidth }) => GetValuewithResponsiveTree('min-width', minWidth)}
      ${({ maxWidth }) => GetValuewithResponsiveTree('max-width', maxWidth)};
    `;
  }};
`;

const HEIGHT = css`
  ${({ minHeight, height, maxHeight }) => {
    if (height && minHeight && maxHeight) {
      return css`
        height: clamp(${minHeight}, ${height}, ${maxHeight});
      `;
    }

    return css`
      ${({ height }) => GetValuewithResponsiveTree('height', height)}
      ${({ minHeight }) => GetValuewithResponsiveTree('min-height', minHeight)}
      ${({ maxHeight }) => GetValuewithResponsiveTree('max-height', maxHeight)};
    `;
  }};
`;

const SIZE_CSS = css`
  ${({ size }) => GetValuewithResponsiveTree('font-size', size)}
`;

const ALIGNMENT = css`
  display: flex;
  ${({ direction }) => GetValuewithResponsiveTree('flex-direction', direction)};

  ${({ gap }) => GetValuewithResponsiveTree('gap', gap)};

  ${({ align_x }) => xAlign(align_x)}
  ${({ align_y }) => yAlign(align_y)}
`;

const PADDING = css`
  ${({ pT }) => GetValuewithResponsiveTree('padding-top', pT)};
  ${({ pR }) => GetValuewithResponsiveTree('padding-right', pR)};
  ${({ pB }) => GetValuewithResponsiveTree('padding-bottom', pB)};
  ${({ pL }) => GetValuewithResponsiveTree('padding-left', pL)};
`;

const MARGIN = css`
  ${({ mT }) => GetValuewithResponsiveTree('margin-top', mT)};
  ${({ mR }) => GetValuewithResponsiveTree('margin-right', mR)};
  ${({ mB }) => GetValuewithResponsiveTree('margin-bottom', mB)};
  ${({ mL }) => GetValuewithResponsiveTree('margin-left', mL)};
`;

const FONT_COLOR = css`
  ${({ theme, fontType, fontColors, fontOpacity, fontDirection }) =>
    GetFontColor({
      theme,
      type: fontType,
      direction: fontDirection,
      colors: fontColors,
      opacity: fontOpacity,
    })}
`;

const BACKGROUND_COLOR = css`
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

const BORDER = css`
  border-radius: ${({ borderRadius }) => borderRadius};
`;

export const DynamicPanelContainer = styled.div`
  ${SIZE_CSS}
  ${WIDTH}
  ${HEIGHT}
  ${ALIGNMENT}
  ${PADDING}
  ${MARGIN}
  ${BACKGROUND_COLOR}
  ${FONT_COLOR}
  ${BORDER}
`;
