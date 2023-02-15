import { css } from "styled-components";
import { GetColorByNickname, GetGradient, hexToRgbA } from "utils/adapters";

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
  
        const backgroundColor = GetColorByNickname({
          colorsObj: theme.colors.background,
          nickname: colorName,
        });
        const normalColor = GetColorByNickname({
          colorsObj: theme.colors,
          nickname: colorName,
        });
  
        return css`
          background: ${hexToRgbA(
            backgroundColor || normalColor || colorName,
            opacity
          )};
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