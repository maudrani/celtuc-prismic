import { ALIGN_NAMES, SIZE_NAMES, THEME_NAMES } from '@/constants/styles';
import { GetSizeByName, GetThemeByName } from 'utils/adapters';

const defaultData = {
  theme: THEME_NAMES.light,
  font_type: 'solid',
  font_opacity: 1,
  font_gradient_direction: 'left',
  background_type: 'solid',
  background_opacity: 1,
  size: SIZE_NAMES.md,
  width: 100,
  height: 1, //vh
  content_direction: 'top',
  align_y: ALIGN_NAMES.top,
  align_x: ALIGN_NAMES.left,
};

export const parseDataProp = (data = {}) => ({
  theme: GetThemeByName(data.theme, defaultData.theme),
  font_type: data.font_type || defaultData.font_type,
  font_color: data.font_color,
  font_opacity: data.font_opacity || defaultData.font_opacity,
  font_gradient_direction:
    data.font_gradient_direction || defaultData.font_gradient_direction,
  background_type: data.background_type || defaultData.background_type,
  background_color: data.background_color,
  background_opacity: data.background_opacity,
  size: GetSizeByName(data.size, defaultData.size),
  width: data.width || defaultData.width,
  height: data.height || defaultData.height,
  content_direction: data.content_direction || defaultData.content_direction,
  align_y: data.align_y,
  align_x: data.align_x,
});
