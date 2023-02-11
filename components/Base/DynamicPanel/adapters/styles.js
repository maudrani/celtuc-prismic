import { css } from 'styled-components';
import {
  GetColorByNickname,
  GetGradient,
  GetThemeValue,
  hexToRgbA,
} from 'utils/adapters';

export const yAlign = (value) =>
  ({
    top: css`
      justify-content: flex-start;
    `,
    center: css`
      justify-content: center;
    `,
    bottom: css`
      justify-content: flex-end;
    `,
  }[value]);

export const xAlign = (value) =>
  ({
    left: css`
      align-items: flex-start;
    `,
    center: css`
      align-items: center;
    `,
    right: css`
      align-items: flex-end;
    `,
  }[value]);

export const GetFontColor = ({ theme, type, direction, colors, opacity }) => {
  const hasColors = () => {
    if (Array.isArray(colors)) return !!colors?.length;

    if (!colors) return false;

    return true;
  };

  if (!hasColors()) return;

  const Gradient = {
    isGradient: type === 'gradient',
    get: () => {
      const rgbaColors = [];

      if (Array.isArray(colors) && colors.length > 1) {
        colors.forEach((colorName) => {
          const fontGradient = GetColorByNickname({
            colorsObj: theme.colors.font,
            nickname: colorName,
          });
          const normalGradient = GetColorByNickname({
            colorsObj: theme.colors,
            nickname: colorName,
          });

          if (fontGradient || normalGradient)
            rgbaColors.push(hexToRgbA(fontGradient || normalGradient, opacity));
        });
      } else {
        const fontGradient = GetColorByNickname({
          colorsObj: theme.colors.font,
          nickname: colors,
        });
        const normalGradient = GetColorByNickname({
          colorsObj: theme.colors,
          nickname: colors,
        });

        colors = fontGradient || normalGradient;

        if (fontGradient || normalGradient)
          colors.forEach((color) => {
            rgbaColors.push(hexToRgbA(color, opacity));
          });
      }

      if (rgbaColors.length >= 1)
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
              colors: rgbaColors,
              direction: direction,
            })};
          }
        `;
    },
  };
  const Solid = {
    isSolid: type === 'solid',
    get: () => {
      const colorName = Array.isArray(colors) ? colors[0] : colors;

      const fontColor = GetColorByNickname({
        colorsObj: theme.colors.font,
        nickname: colorName,
      });
      const normalColor = GetColorByNickname({
        colorsObj: theme.colors,
        nickname: colorName,
      });

      if (fontColor || normalColor)
        return css`
          color: ${hexToRgbA(fontColor || normalColor, opacity)};
        `;
    },
  };

  if (Gradient.isGradient) {
    return Gradient.get();
  }

  if (Solid.isSolid) {
    return Solid.get();
  }
};

export const GetBackgroundColor = ({
  theme,
  type,
  direction,
  colors,
  opacity,
}) => {
  const hasColors = () => {
    if (Array.isArray(colors)) return !!colors?.length;

    if (!colors) return false;

    return true;
  };

  if (!hasColors()) return;

  const Gradient = {
    isGradient: type === 'gradient',
    get: () => {
      const rgbaColors = [];

      if (Array.isArray(colors) && colors.length > 1) {
        colors.forEach((colorName) => {
          const fontGradient = GetColorByNickname({
            colorsObj: theme.colors.font,
            nickname: colorName,
          });
          const normalGradient = GetColorByNickname({
            colorsObj: theme.colors,
            nickname: colorName,
          });

          if (fontGradient || normalGradient)
            rgbaColors.push(hexToRgbA(fontGradient || normalGradient, opacity));
        });
      } else {
        const fontGradient = GetColorByNickname({
          colorsObj: theme.colors.font,
          nickname: colors,
        });
        const normalGradient = GetColorByNickname({
          colorsObj: theme.colors,
          nickname: colors,
        });

        colors = fontGradient || normalGradient;

        if (fontGradient || normalGradient)
          colors.forEach((color) => {
            rgbaColors.push(hexToRgbA(color, opacity));
          });
      }

      if (rgbaColors.length >= 1)
        return css`
          background: ${GetGradient({
            colors: rgbaColors,
            direction: direction,
          })};
        `;
    },
  };
  const Solid = {
    isSolid: type === 'solid',
    get: () => {
      const colorName = Array.isArray(colors) ? colors[0] : colors;

      const fontColor = GetColorByNickname({
        colorsObj: theme.colors.background,
        nickname: colorName,
      });
      const normalColor = GetColorByNickname({
        colorsObj: theme.colors,
        nickname: colorName,
      });

      if (fontColor || normalColor)
        return css`
          background: ${hexToRgbA(fontColor || normalColor, opacity)};
        `;
    },
  };

  if (Gradient.isGradient) {
    return Gradient.get();
  }

  if (Solid.isSolid) {
    return Solid.get();
  }
};
