import { NormalizeValue } from 'utils/helpers/values';
import { SIZE_NAMES as _sm } from '@/constants/styles';

// PROPS ON DEFAULT VARIANT
const getDefaultWidthValue = (sizeName = _sm.md) =>
  ({
    [_sm.lg]: 100,
    [_sm.md]: 70,
    [_sm.sm]: 45,
  }[NormalizeValue(sizeName) || _sm.lg]);

const getDefaultGapValue = (sizeName) =>
  ({
    none: '0',
    [_sm.lg]: 5.5,
    [_sm.md]: 3.2,
    [_sm.sm]: 1.2,
  }[NormalizeValue(sizeName) || 'none']);

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

const getImageHeight = (prismicHeight) => {
  const default_height = 100;

  return `${prismicHeight || default_height}%`;
};

const getAnimation = (value) =>
  ({
    'Fade In': 'fade_in',
    Typed: 'typed_text',
    None: 'none',
  }[value || 'None']);

export const getDataProps = (dataObj = {}) => ({
  image: dataObj.image,
  content: dataObj.content,
  hasContent: !!dataObj.content.length && !!dataObj.content[0].text,
  theme: dataObj.theme,
  background_type: dataObj.background_type,
  size: dataObj.size,
  text_align: dataObj.text_align,
  content_align_x: dataObj.content_align_x,
  content_align_y: dataObj.content_align_y,
  image_align_y: dataObj.image_align_y,
  image_align_x: dataObj.image_align_x,
  spacing: dataObj.spacing || 'none',
  width: getTextBlockWidthValue(dataObj.width),
  image_height: getImageHeight(dataObj.image_height),
  containerHeight: dataObj.containerHeight,
  image_animation: getAnimation(dataObj.image_animation),
  content_animation: dataObj.content_animation,
  content_has_anim: dataObj.content_animation !== 'None',
  image_has_anim: dataObj.image_animation !== 'None',
  position: dataObj.position,
  gap: getTextBlockGapValue(dataObj.gap, dataObj.variant),
});
