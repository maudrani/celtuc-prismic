import { SIZE_NAMES as _sm } from '@/constants/styles';
import theme from '@/styles/theme';
import { NormalizeValue } from 'utils/helpers/values';
import { GetResponsiveValues } from '../Core/CSS_ENGINE/utils/responsive';

const default_values = {
  size: '1em',

  width: '100%',
  background_type: 'solid',
  font_type: 'solid',
  align_y: 'center',
  align_x: 'center',
  m_l: 'auto',
  m_r: 'auto',
  pL: { main: '15px', md: '10px' },
  pR: { main: '15px', md: '10px' },
};

const getMaxWidthValue = (widthValue) => {
  const widths = {
    full: '100%',
    [_sm.lg]: theme.limits.pageWidth_int,
    [_sm.md]: '1270',
    [_sm.sm]: '970',
    [_sm.xs]: '630',
  };

  if (!widthValue) return widths[_sm.lg];

  const preset_width = widths[NormalizeValue(widthValue)];
  if (preset_width) return preset_width;

  return widthValue;
};

const getSpacingWidthValue = (widthValue) => {
  const margins = {
    [_sm.lg]: { main: 4.5, md: 3.2 },
    [_sm.md]: { main: 3.2, md: 2.1 },
    [_sm.sm]: { main: 2.1, md: 1 },
    [_sm.xs]: { main: 1, md: 0.7 },
  };

  if (!widthValue) return;

  const preset_width = margins[NormalizeValue(widthValue)];
  if (preset_width) return preset_width;

  return widthValue;
};

const getPaddingWidthValue = (widthValue) => {
  const margins = {
    [_sm.xl]: { main: 7.5, md: 5 },
    [_sm.lg]: { main: 4.5, md: 3.2 },
    [_sm.md]: { main: 3.2, md: 2.1 },
    [_sm.sm]: { main: 2.1, md: 1 },
    [_sm.xs]: { main: 1, md: 0.7 },
  };

  if (!widthValue) return;

  const preset_width = margins[NormalizeValue(widthValue)];
  if (preset_width) return preset_width;

  return widthValue;
};

export const getDataProps = (dataObj) => ({
  wrapperProps: {
    size: GetResponsiveValues(dataObj?.size  || default_values.size, 'size'),
    width: dataObj?.width || default_values.width,
    backgroundType: dataObj?.background_type || default_values.background_type,
    backgroundColors: dataObj?.background_color,
    fontType: dataObj?.font_type || default_values.font_type,
    fontColors: dataObj?.font_color,
    align_y: dataObj?.align_y || default_values.align_y,
    align_x: dataObj?.align_x || default_values.align_x,
    mL: dataObj?.m_l || default_values.m_l,
    mR: dataObj?.m_r || default_values.m_r,
    mB: GetResponsiveValues(
      getSpacingWidthValue(dataObj?.spacing_b || dataObj.spacing),
      'em'
    ),
    mT: GetResponsiveValues(
      getSpacingWidthValue(dataObj?.spacing_t || dataObj.spacing),
      'em'
    ),
    pB: GetResponsiveValues(
      getPaddingWidthValue(dataObj?.padding_b || dataObj.padding),
      'em'
    ),
    pT: GetResponsiveValues(
      getPaddingWidthValue(dataObj?.padding_t || dataObj.padding),
      'em'
    ),
    pL: GetResponsiveValues(dataObj?.p_l, 'em'),
    pR: GetResponsiveValues(dataObj?.p_r, 'em'),
  },
  parentProps: {
    width: 100,
    max_width: getMaxWidthValue(dataObj?.max_width),
  },
});
