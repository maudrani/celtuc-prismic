import { THEME_NAMES as _th } from 'constants/styles';
import { NormalizeValue } from 'utils/helpers/values';
import theme from '@/styles/theme';

export const GetThemeByName = (themeName) => theme.colors.themes[NormalizeValue(themeName)]

export const GetColorByNickname = ({ colorsObj, nickname }) =>
colorsObj[nickname];