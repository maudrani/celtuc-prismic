import { SIZE_NAMES as _sn } from 'constants/styles';
import { NormalizeValue } from 'utils/helpers/values';

export const GetSizeByName = (sizeName, defaultSize = _sn.sm) =>
  ({
    xs: _sn.xs,
    sm: _sn.sm,
    md: _sn.md,
    lg: _sn.lg,
    xl: _sn.xl,
    xxl: _sn.xxl,
  }[NormalizeValue(sizeName)] || defaultSize);

export const GetSizeValue = (sizeName = 'md') => ({
  font_size: {
    [_sn.xxl]: 38,
    [_sn.xl]: 31,
    [_sn.lg]: 26,
    [_sn.md]: 21,
    [_sn.sm]: 17,
    [_sn.xs]: 12,
  }[sizeName || [_sn.md]],
});
