import { NormalizeValue } from 'utils/helpers/values';
import { SIZE_NAMES as _sm } from '@/constants/styles';

// PROPS ON DEFAULT VARIANT
const getDefaultWidthValue = (sizeName = _sm.md) =>
  ({
    [_sm.lg]: 100,
    [_sm.md]: 70,
    [_sm.sm]: 45,
  }[NormalizeValue(sizeName) || _sm.lg]);

//PROPS ON VARIANTS
const getTextBlockWidthValue = (value) => {
  return `${getDefaultWidthValue(value)}%`;
};

const getImageHeight = (prismicHeight, containerHeight) => {
  if (prismicHeight) return `${prismicHeight}%`;
  if (containerHeight) return `${containerHeight}px`;

  return '100%';
};

export const getDataProps = (dataObj = {}) => ({
  image: dataObj.image,
  content: dataObj.content,
  theme: dataObj.theme,
  background_type: dataObj.background_type,
  size: dataObj.size,
  text_align: dataObj.text_align,
  align_x: dataObj.align_x,
  align_y: dataObj.align_y,
  spacing: dataObj.spacing || 'none',
  width: getTextBlockWidthValue(dataObj.width),
  height: getImageHeight(dataObj.height, dataObj.containerHeight),
});
