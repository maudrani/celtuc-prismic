
import { ALIGN_NAMES, SIZE_NAMES, THEME_NAMES } from '@/constants/styles';
import { GetAlignByName, GetSizeByName, GetThemeByName } from 'utils/adapters';

const defaultData = {
  theme: THEME_NAMES.light,
  align: ALIGN_NAMES.left,
  size: SIZE_NAMES.md,
  width: 100,
};

export const parseDataProp = (data = {}) => ({
  theme: GetThemeByName(data.theme, defaultData.theme),
  align: GetAlignByName(data.align, defaultData.align),
  size: GetSizeByName(data.size, defaultData.size),
  width: data.width || defaultData.width,
});
