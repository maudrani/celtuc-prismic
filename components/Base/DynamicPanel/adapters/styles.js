import { css } from 'styled-components';
import { GetGradient, GetThemeValue, hexToRgbA } from 'utils/adapters';

export const yAlign = (value) =>
  ({
    top: css`
      top: 0;
      align-items: flex-start;
    `,
    bottom: css`
      bottom: 0;
      align-items: flex-end;
    `,
    Center: css`
      top: 0;
      bottom: 0;
      align-items: center;
      height: 100%;
    `,
  }[value]);

export const xAlign = (value) =>
  ({
    left: css`
      left: 0;
      justify-content: start;
    `,
    right: css`
      right: 0;
      justify-content: end;
    `,
    Center: css`
      left: 0;
      right: 0;
      justify-content: center;
    `,
  }[value]);

// Background
const getGradientDirection = (value) =>
  ({
    top: ['0%', '100%'],
    bottom: ['0%', '100%'],
    Center: ['0%', '150%'],
    left: ['0%', '100%'],
    right: ['0%', '100%'],
  }[value || 'top']);

const getGradientBackgroundOpacity = (value) =>
  ({
    top: [0, 0.8],
    bottom: [0.8, 0],
    Center: [0.9, 0.1],
    left: [0.8, 0],
    Roght: [0.8, 0],
  }[value]);

export const GetBackgroundByType = ({
  theme,
  themeName,
  type,
  direction,
  color,
  opacity,
}) => {
  if (type === 'none')
    return css`
      background: transparent;
    `;

  if (type === 'solid' || type === 'translucent')
    if (color && opacity)
      return css`
        background: ${GetThemeValue({
          theme,
          themeName,
          background: { color, opacity },
        }).backgroundColor};
      `;

  if (type === 'gradient') {
    const gradient_direction = getGradientDirection(direction);

    const gradient_opacity = getGradientBackgroundOpacity(direction);

    return css`
      background: linear-gradient(
        0deg,
        ${hexToRgbA(
            GetThemeValue({ theme, themeName }).backgroundColor,
            gradient_opacity[0]
          )}
          ${gradient_direction[0]},
        ${hexToRgbA(
            GetThemeValue({ theme, themeName }).backgroundColor,
            gradient_opacity[1]
          )}
          ${gradient_direction[1]}
      );
    `;
  }

  return css`
    background: ${GetThemeValue({
      theme,
      themeName,
      background: { type },
    }).backgroundColor};
  `;
};

// Font
export const GetFontColorByType = ({
  theme,
  themeName,
  type,
  direction,
  colors = [],
  opacity,
}) => {
  const hasColors = Array.isArray(colors) && !!colors?.length;
  if (!hasColors)
    return css`
      color: ${GetThemeValue({
        theme,
        themeName,
      }).fontColor};
    `;

  if (type === 'solid')
    if (colors && opacity)
      return css`
        color: ${GetThemeValue({
          theme,
          themeName,
          font: { color: colors[0], opacity },
        }).fontColor};
      `;

  if (type === 'gradient')
    return css`
      p,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        background-image: ${GetGradient({
          colors: colors,
          direction: direction,
        })};
      }
    `;
};
