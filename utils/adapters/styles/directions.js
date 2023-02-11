import { ALIGN_NAMES, DIRECTION_NAMES } from 'constants/styles';
import { NormalizeValue } from 'utils/helpers/values';

export const GetDirectionByName = (
  directionName,
  defaultDirection = DIRECTION_NAMES.right
) =>
  ({
    right: DIRECTION_NAMES.right,
    left: DIRECTION_NAMES.left,
    top: DIRECTION_NAMES.top,
    bottom: DIRECTION_NAMES.bottom,
  }[directionName] || defaultDirection);

export const GetAlignByName = (alignName, defaultAlign = ALIGN_NAMES.left) =>
  ({
    right: ALIGN_NAMES.right,
    left: ALIGN_NAMES.left,
    center: ALIGN_NAMES.center,
  }[NormalizeValue(alignName)] || defaultAlign);

export const GetGradientDirection = (value) =>
  `${
    {
      top: 180,
      bottom: '0',
      left: 90,
      right: 270,
    }[value] || value
  }deg`;
