import styled, { css } from 'styled-components';
import { GetSizeValue, GetThemeValue, hexToRgbA } from 'utils/adapters';

const yAlign = (value) =>
  ({
    Top: css`
      top: 0;
      align-items: flex-start;
    `,
    Bottom: css`
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

const xAlign = (value) =>
  ({
    Left: css`
      left: 0;
      justify-content: start;
    `,
    Right: css`
      right: 0;
      justify-content: end;
    `,
    Center: css`
      left: 0;
      right: 0;
      justify-content: center;
    `,
  }[value]);

const THEME_CSS = css`
  ${({ theme, themeName, background_type, content_direction }) => {
    if (background_type === 'none') return;

    if (background_type === 'gradient') {
      const gradient_direction = {
        Top: ['10%', '100%'],
        Bottom: ['10%', '100%'],
        Center: ['10%', '150%'],
        Left: ['10%', '100%'],
        Right: ['10%', '100%'],
      }[content_direction];

      const gradient_opacity = {
        Top: [0, 0.8],
        Bottom: [0.8, 0],
        Center: [0.9, 0.1],
        Left: [0.8, 0],
        Roght: [0.8, 0],
      }[content_direction];

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

const ALIGNMENT = css`
  ${({ align_y }) => yAlign(align_y)}
  ${({ align_x }) => xAlign(align_x)}
`;

export const DynamicPanelContainer = styled.section`
  width: 100%;
  max-width: ${({ width }) => width}%;

  min-height: ${({ height }) => height}vh;

  ${THEME_CSS}
  ${SIZE_CSS}
  ${ALIGNMENT}
`;
