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
  const prismicHeight_to_percentage = prismicHeight / 100;
  const default_height = '100%';

  const return_height = {
    prismicHeight_and_containerHeight:
      `${prismicHeight_to_percentage * containerHeight}px` || default_height,
    containerHeight: `${containerHeight}px` || default_height,
  };

  if (prismicHeight > 100) return return_height.containerHeight;

  if (prismicHeight && containerHeight)
    return return_height.prismicHeight_and_containerHeight;

  if (containerHeight) return return_height.containerHeight;

  return default_height;
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
  align_x: dataObj.align_x,
  align_y: dataObj.align_y,
  spacing: dataObj.spacing || 'none',
  width: getTextBlockWidthValue(dataObj.width),
  image_height: getImageHeight(dataObj.image_height, dataObj.containerHeight),
  containerHeight: dataObj.containerHeight,
  image_animation: getAnimation(dataObj.image_animation),
  content_animation: dataObj.content_animation,
  content_has_anim: dataObj.content_animation !== 'None',
  image_has_anim: dataObj.image_animation !== 'None'
});
