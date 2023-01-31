import { SIZE_NAMES as _sm } from '@/constants/styles';
import theme from '@/styles/theme';
import { NormalizeValue } from 'utils/helpers/values';

// PROPS ON DEFAULT VARIANT
const getDefaultWidthValue = (sizeName = _sm.md) =>
  ({
    full: '100%',
    [_sm.lg]: theme.limits.pageWidth_int,
    [_sm.md]: '1270px',
    [_sm.sm]: '970px',
    [_sm.xs]: '630px',
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
    return `${getDefaultWidthValue(value)}`;
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
  if (variant === 'default') {
    return `${getDefaultPaddingValue(value)}em`;
  }

  if (variant === 'free-width') {
    return `${value * 0.3}em`;
  }
};

export const getRepeatedContents = (contentsList = []) =>
  contentsList.map((item) => item);

export const getDataProps = (dataObj = {}) => ({
  items: dataObj.items,
  theme: dataObj.data.theme,
  size: dataObj.data.size,
  variant: dataObj.variant,
  content_outside_image: dataObj.data.content_outside_image,
  height: dataObj.data.height,
  width: getTextBlockWidthValue(dataObj.data.width, dataObj.variant),
  isFullWidth: dataObj.data.width === 'full',
  gap: getTextBlockGapValue(dataObj.data.separation_gap, dataObj.variant),
  spacing: getTextBlockPaddingValue(dataObj.data.spacing, dataObj.variant),
});