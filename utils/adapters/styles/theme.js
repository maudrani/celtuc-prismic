import { THEME_NAMES as _th } from 'constants/styles';
import { NormalizeValue } from 'utils/helpers/values';
import { hexToRgbA } from './colors';
import theme from '@/styles/theme';

export const GetThemeByName = (themeName) =>
  ({
    ['dark-1']: theme.colors[_th['dark-1']],
  }[NormalizeValue(themeName)]);

export const GetColorByNickname = ({ colorsObj, nickname }) =>
colorsObj[nickname];

// ADAPTERS
const GetBackgroundByTheme = (theme, themeName, backgroundType) => {
  const color = theme.themes[themeName].background;

  return {
    [_th['dark-1']]: {
      solid: color,
      translucent: hexToRgbA(color, 0.9),
    }[backgroundType],
    /*     [_th.light]: {
      solid: theme.colors.white,
      translucent: hexToRgbA(theme.colors.white, 0.7),
    }[backgroundType],
    [_th['mid-light']]: {
      solid: theme.colors['mid-light'],
      translucent: hexToRgbA(theme.colors['mid-light'], 0.7),
    }[backgroundType], */
  }[themeName];
};

const GetBackgroundColor = ({ theme, color, opacity }) => {
  if (color) return GetColorByNickname({ theme, nickname: color, opacity });
};

// FInals
const GetBackgroundStyle = ({ type, color, opacity, theme, themeName }) => {
  if (color && opacity) return GetBackgroundColor({ theme, color, opacity });

  return GetBackgroundByTheme(theme, themeName, type);
};

const GetFontColor = ({ theme, themeName, color, opacity }) => {
  if (color && opacity)
    return GetColorByNickname({ theme, nickname: color, opacity });

  return {
    [_th.dark]: theme.colors['light-font'],
    [_th.light]: theme.colors['dark-font'],
    [_th['mid-light']]: theme.colors['dark-font'],
  }[themeName];
};

export const GetThemeValue = ({
  theme,
  themeName,
  background = {
    type: null,
    color: null,
    opacity: null,
  },

  font = { type: null, color: null, opacity: null },
}) => ({
  backgroundColor: GetBackgroundStyle({
    theme,
    themeName,
    ...background,
  }),
  fontColor: GetFontColor({
    theme,
    themeName,
    ...font,
  }),
});
