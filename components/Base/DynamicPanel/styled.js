import styled, { css } from 'styled-components';
import { GetSizeValue, GetThemeValue } from 'utils/adapters';

const THEME_CSS = css`
  background-color: ${({ theme, themeName }) =>
    GetThemeValue(theme, themeName).backgroundColor};

  color: ${({ theme, themeName }) => GetThemeValue(theme, themeName).fontColor};

  &,
  * {
    border-color: ${({ theme, themeName }) =>
      GetThemeValue(theme, themeName).borderColor};
  }
`;

const SIZE_CSS = css`
  font-size: ${({ size }) => GetSizeValue(size).font_size}px;
`;

export const DynamicPanelContainer = styled.section`
  width: 100%;
  min-width: fit-content;
  max-width: ${({ width }) => width}%;

  ${THEME_CSS}
  ${SIZE_CSS}
`;
