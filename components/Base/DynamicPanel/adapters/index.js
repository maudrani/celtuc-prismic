import { ALIGN_NAMES, SIZE_NAMES, THEME_NAMES } from '@/constants/styles';
import { GetAlignByName, GetSizeByName, GetThemeByName } from 'utils/adapters';

const defaultData = {
  theme: THEME_NAMES.light,
  align: ALIGN_NAMES.left,
  size: SIZE_NAMES.md,
  width: 100,
  height: 1, //vh
  background_type: 'solid',
  content_direction: 'Top',
};

export const parseDataProp = (data = {}) => ({
  theme: GetThemeByName(data.theme, defaultData.theme),
  align: GetAlignByName(data.align, defaultData.align),
  size: GetSizeByName(data.size, defaultData.size),
  width: data.width || defaultData.width,
  height: data.height || defaultData.height,
  background_type: data.background_type || defaultData.background_type,
  content_direction: data.content_direction || defaultData.content_direction,
  align_y: data.align_y,
  align_x: data.align_x,
});
