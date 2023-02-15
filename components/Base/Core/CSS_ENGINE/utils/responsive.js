import { NormalizeValue } from 'utils/helpers/values';
import { fluid } from 'utils/styles/fluid';
import { breakpoints } from '@/styles/theme/data/breakpoints';
import { GetSizeByName, GetSizeValue, toEm, toPerc, toPX, toVh, toVw } from 'utils/adapters';

export const GetValuewithResponsiveTree = (cssProp, values, converter) => {
  if (!values) return;

  const CSS_STRING = (value) => (cssProp ? `${cssProp}: ${value};` : value);

  if (typeof values !== 'object')
    return CSS_STRING(converter ? converter(values) : values);

  let sortedValues = [];

  Object.keys(values).forEach((breakpoint) => {
    const breakPointParsed =
      breakpoints[breakpoint] || NormalizeValue(breakpoint);
    const valueParsed = converter
      ? converter(values[breakpoint])
      : values[breakpoint];

    sortedValues.push({ breakpoint: breakPointParsed, value: valueParsed });
  });

  sortedValues.sort((a, b) => {
    if (!a.breakpoint || !b.breakpoint) return;

    return a.breakpoint > b.breakpoint && -1;
  });

  return sortedValues.map((breakpointObj) => {
    const { breakpoint, value } = breakpointObj;

    if (breakpoint === 'main') return CSS_STRING(value);

    return fluid(cssProp, '', [
      {
        [breakpoint]: value,
      },
    ]);
  });
};

export const GetResponsiveValues = (values, unit) => {
  if ((values !== 0 && !values) || !unit) return;

  const unitConverter = {
    ['px']: (val) => toPX(val),
    ['em']: (val) => toEm(val),
    ['%']: (val) => toPerc(val),
    ['vw']: (val) => toVw(val),
    ['vh']: (val) => toVh(val),
    ['size']: (val) => toPX(GetSizeValue(GetSizeByName(val)).font_size),
    ['none']: (val) => val.replace('none'),
  };

  const hasUnit = (val) => {
    const extracted_unit =
      typeof val === 'string' && val.replace(/\./g, '').replace(/[0-9]/g, '');

    if (unitConverter[extracted_unit]) return true;
  };

  const GetUnit = (value) => {
    if (hasUnit(value)) return value;
    return unitConverter[unit](value) || value;
  };

  const NotObject = {
    isNotObject: typeof values !== 'object',
    get: () => {
      return GetUnit(values);
    },
  };

  const isObject = {
    isObject: typeof values === 'object',
    get: () => {
      const parsed_values = {};

      Object.keys(values).forEach((value_breakpoint) => {
        const value_name = values[value_breakpoint];

        parsed_values[value_breakpoint] = GetUnit(value_name);
      });

      return parsed_values;
    },
  };

  if (NotObject.isNotObject) return NotObject.get();
  if (isObject.isObject) return isObject.get();

  return values;
};