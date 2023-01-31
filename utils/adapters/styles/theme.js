import { THEME_NAMES as _th } from 'constants/styles';
import { NormalizeValue } from 'utils/helpers/values';
import { hexToRgbA } from './colors';

export const GetThemeByName = (themeName, defaultTheme = _th.dark) =>
  ({
    dark: _th.dark,
    light: _th.light,
    'mid-light': _th['mid-light'],
  }[NormalizeValue(themeName)] || defaultTheme);

export const GetThemeValue = (theme, themeName, backgroundType = 'solid') => ({
  backgroundColor: {
    [_th.dark]: {
      solid: theme.colors.black,
      translucent: hexToRgbA(theme.colors.black, 0.9),
    }[backgroundType],
    [_th.light]: {
      solid: theme.colors.white,
      translucent: hexToRgbA(theme.colors.white, 0.7),
    }[backgroundType],
    [_th['mid-light']]: {
      solid: theme.colors['mid-light'],
      translucent: hexToRgbA(theme.colors['mid-light'], 0.7),
    }[backgroundType],
  }[themeName],
  fontColor: {
    [_th.dark]: theme.colors.white,
    [_th.light]: theme.colors.black,
    [_th['mid-light']]: theme.colors.black,
  }[themeName],
  fontWeight: {
    [_th.dark]: 300,
    [_th.light]: 400,
    [_th['mid-light']]: 400,
  }[themeName],
  borderColor: {
    [_th.dark]: theme.colors.borders.white,
    [_th.light]: theme.colors.borders.black,
    [_th['mid-light']]: theme.colors.borders.black,
  }[themeName],
});
