import { merge } from 'lodash';

export const GetCompountPreset = (values, presets) => {
  const parseKey = (value) => value.toUpperCase();

  const COMPOUND_PRESET = JSON.parse(JSON.stringify(presets.MAIN));

  values.forEach((value) => {
    const parsedValue = parseKey(value);

    merge(COMPOUND_PRESET, presets[parsedValue]);
  });

  return COMPOUND_PRESET;
};
