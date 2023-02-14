import { breakpoints } from '@/styles/theme/data/breakpoints';
import styled, { css } from 'styled-components';
import { fluid } from 'utils/styles/fluid';
import {
  GetBackgroundColor,
  GetFontColor,
  xAlign,
  yAlign,
} from './adapters/styles';
import { NormalizeValue } from 'utils/helpers/values';

const GetValuewithResponsiveTree = (cssProp, values, converter) => {
  if (!values) return;

  const CSS_STRING = (value) => (cssProp ? `${cssProp}: ${value};` : value);

  if (typeof values !== 'object')
    return CSS_STRING(converter? converter(values) : values);

  let sortedValues = [];

  Object.keys(values).forEach((breakpoint) => {
    const breakPointParsed =
      breakpoints[breakpoint] || NormalizeValue(breakpoint);
    const valueParsed = converter
      ? converter(values[breakpoint])
      : values[breakpoint];

    sortedValues.push({ breakpoint: breakPointParsed, value: valueParsed });
  });

  sortedValues.sort((a, b) => {
    if (!a.breakpoint || !b.breakpoint) return;

    return a.breakpoint > b.breakpoint && -1;
  });

  return sortedValues.map((breakpointObj) => {
    const { breakpoint, value } = breakpointObj;

    if (breakpoint === 'main')
      return  CSS_STRING(value)


    return fluid(cssProp, '', [
      {
        [breakpoint]: value,
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

  ${({ align_x }) => GetValuewithResponsiveTree('', align_x, xAlign)}
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
