import { NormalizeValue } from 'utils/helpers/values';
import { SIZE_NAMES as _sm } from '@/constants/styles';

// PROPS ON DEFAULT VARIANT
const getDefaultGapValue = (sizeName) =>
  ({
    none: '0',
    [_sm.lg]: 5.5,
    [_sm.md]: 3.2,
    [_sm.sm]: 1.2,
  }[NormalizeValue(sizeName) || 'none']);

const getDefaultWidthValue = (sizeName = _sm.md) =>
  ({
    [_sm.lg]: 100,
    [_sm.md]: 70,
    [_sm.sm]: 45,
  }[NormalizeValue(sizeName) || _sm.lg]);

//PROPS ON VARIANTS
const getTextBlockGapValue = (value, variant) => {
  if (variant === 'free-width') {
    return `${value * 0.3}em`;
  }

  return `${getDefaultGapValue(value)}em`;
};

const getTextBlockWidthValue = (value) => {
  return `${getDefaultWidthValue(value)}%`;
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
  position: dataObj.position,
  spacing: dataObj.spacing || 'none',
  content_outside_image: dataObj.content_outside_image,
  gap: getTextBlockGapValue(dataObj.gap, dataObj.variant),
  width: getTextBlockWidthValue(dataObj.width),
  height: dataObj.height || 100,
});
