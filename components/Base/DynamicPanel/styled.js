import styled, { css } from 'styled-components';
import { GetSizeValue, GetThemeValue, hexToRgbA } from 'utils/adapters';

const THEME_CSS = css`
  ${({ theme, themeName, background_type, content_direction }) => {
    if (background_type === 'none') return;

    if (background_type === 'gradient') {
      const gradient_direction = {
        Top: ['10%', '100%'],
        Bottom: ['10%', '100%'],
        Center: ['10%', '150%'],
        Left: ['10%', '100%'],
        Roght: ['10%', '100%'],
      }[content_direction];

      const gradient_opacity = {
        Top: [0, 0.8],
        Bottom: [0.8, 0],
        Center: [0.9, 0.1],
        Left: [0.8, 0],
        Roght: [0.8, 0],
      }[content_direction];

      console.log(content_direction, gradient_direction);

      return css`
        background: linear-gradient(
          0deg,
          ${hexToRgbA(
              GetThemeValue(theme, themeName).backgroundColor,
              gradient_opacity[0]
            )}
            ${gradient_direction[0]},
          ${hexToRgbA(
              GetThemeValue(theme, themeName).backgroundColor,
              gradient_opacity[1]
            )}
            ${gradient_direction[1]}
        );
      `;
    }

    return css`
      background: ${GetThemeValue(theme, themeName, background_type)
        .backgroundColor};
    `;
  }};

  color: ${({ theme, themeName }) => GetThemeValue(theme, themeName).fontColor};

  p {
    font-weight: ${({ theme, themeName }) =>
      GetThemeValue(theme, themeName).fontWeight};
  }

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

  min-height: ${({ height }) => height}vh;

  ${THEME_CSS}
  ${SIZE_CSS}
`;
