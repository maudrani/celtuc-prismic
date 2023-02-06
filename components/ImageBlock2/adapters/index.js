import { SIZE_NAMES as _sm } from '@/constants/styles';
import theme from '@/styles/theme';
import { GetSizeValue } from 'utils/adapters';
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

const getContainerHeightValue = (value) => {
  if (value) return `${value}vh`;

  return ``;
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

const getPrismicMinHeight = (value) => {
  return value || 0;
};

// COMPONENT ADAPTERS
export const getRepeatedContents = (contentsList = []) =>
  contentsList.map((item) => item);

export const getMinHeight = (
  elementsData,
  prismic_min_height,
  use_container_height
) => {
  const { prismic_height_px } = elementsData.container;
  const max_images_height = elementsData.images.max_height;

  if (!prismic_height_px && !prismic_min_height && max_images_height)
    return `${max_images_height}px`;

  if (!use_container_height && !prismic_min_height) return '100%';

  const min_height =
    prismic_min_height > prismic_height_px
      ? prismic_min_height
      : prismic_height_px;

  if (min_height) return `${min_height}px`;

  return `100%`;
};

export const getDataProps = (dataObj = {}) => ({
  variant: dataObj.variant,
  items: dataObj.items,
  theme: dataObj.data.theme,
  size: dataObj.data.size,
  prismic_height_vh: getContainerHeightValue(dataObj.data.height),
  get raw_height() {
    return this.prismic_height_vh.replace('vh', '').replace('%', '');
  },
  width: getTextBlockWidthValue(dataObj.data.width, dataObj.variant),
  isFullWidth: dataObj.data.width === 'full',
  gap: getTextBlockGapValue(dataObj.data.separation_gap, dataObj.variant),
  spacing: getTextBlockPaddingValue(dataObj.data.spacing, dataObj.variant),
  align_y: dataObj.data.align_y,
  align_x: dataObj.data.align_x,
  initial: { ...dataObj.data },
  grid_responsive_trigger: 320,
  get break_height_trigger() {
    const elements_amount = this.items.length;
    const raw_gap =
      GetSizeValue().font_size * Number(this.gap.replace('em', ''));

    return (
      elements_amount * this.grid_responsive_trigger +
      (raw_gap * elements_amount - 1)
    );
  },
  same_images_height: dataObj.data.same_images_height,
  prismic_min_height: getPrismicMinHeight(dataObj.data.min_height),
});
