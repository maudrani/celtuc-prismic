import { SIZE_NAMES as _sm } from '@/constants/styles';
import theme from '@/styles/theme';
import { GetRichTextContent } from 'utils/adapters';
import { NormalizeValue } from 'utils/helpers/values';

// PROPS ON DEFAULT VARIANT
const getDefaultWidthValue = (sizeName = _sm.md) =>
  ({
    [_sm.lg]: theme.limits.pageWidth_int,
    [_sm.md]: 970,
    [_sm.sm]: 540,
  }[NormalizeValue(sizeName) || _sm.md]);

const getDefaultGapValue = (sizeName = _sm.lg) =>
  ({
    none: '0',
    [_sm.lg]: 5.5,
    [_sm.md]: 3.2,
    [_sm.sm]: 1.2,
  }[NormalizeValue(sizeName) || _sm.lg]);

const getDefaultPaddingValue = (sizeName = _sm.md) =>
  ({
    none: '0',
    [_sm.lg]: 5.5,
    [_sm.md]: 3.2,
    [_sm.sm]: 1.2,
  }[NormalizeValue(sizeName) || _sm.md]);

//PROPS ON VARIANTS
const getTextBlockWidthValue = (value, variant) => {
  if (variant === 'default') {
    return `${getDefaultWidthValue(value)}px`;
  }

  if (variant === 'free-width') {
    return `${value}%`;
  }
};

const getTextBlockGapValue = (value, variant) => {
  if (variant === 'default') {
    return `${getDefaultGapValue(value)}em`;
  }

  if (variant === 'free-width') {
    return `${value * 0.3}em`;
  }
};

const getTextBlockPaddingValue = (value, variant) => {
  if (variant === 'free-width') {
    return `${value * 0.3}em`;
  }

  return `${getDefaultPaddingValue(value)}em`;
};

const getAnimation = (value) =>
  ({
    'Fade In': 'fade_in',
    Typed: 'typed_text',
    None: 'none',
  }[value || 'None']);

export const getRepeatedContents = (contentsList = []) =>
  contentsList.map((item) => ({
    text: GetRichTextContent(item.content),
    animation: getAnimation(item.animation),
  }));

export const getDataProps = (dataObj = {}) => ({
  items: dataObj.items,
  theme: dataObj.data.theme,
  align: dataObj.data.align,
  size: dataObj.data.size,
  width: getTextBlockWidthValue(dataObj.data.width, dataObj.variant),
  gap: getTextBlockGapValue(dataObj.data.separation_gap, dataObj.variant),
  spacing: getTextBlockPaddingValue(dataObj.data.spacing, dataObj.variant),
});
