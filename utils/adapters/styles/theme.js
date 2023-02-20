import { NormalizeValue } from 'utils/helpers/values';
import theme from '@/styles/theme';

export const GetThemeByName = (themeName) => theme.colors.themes[NormalizeValue(themeName)]

export const GetColorByNickname = ({ colorsObj, nickname }) =>
colorsObj[nickname];