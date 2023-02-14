import { SIZE_NAMES as _sm } from '@/constants/styles';
import theme from '@/styles/theme';
import { NormalizeValue } from 'utils/helpers/values';

const getDefaultWidthValue = (widthValue) => {
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

export const getDataProps = (dataObj) => ({
  wrapperProps: {
    width: 100,
    background_color: dataObj?.background_color,
    font_color: dataObj?.font_color,
    align_y: 'center',
    align_x: 'center',
  },
  parentProps: {
    max_width: getDefaultWidthValue(dataObj?.max_width),
    align_y: dataObj?.align_y || 'center',
    align_x: dataObj?.align_x || 'center',
  },
});
