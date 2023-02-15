import { css } from "styled-components";
import { GetValuewithResponsiveTree } from "../../utils/responsive";

const WIDTH = css`
  ${({ minWidth, width, maxWidth }) => {
    if (width && minWidth && maxWidth) {
      return css`
        width: clamp(${minWidth}, ${width}, ${maxWidth});
      `;
    }

    return css`
      ${({ width }) => GetValuewithResponsiveTree('width', width)}
      ${({ minWidth }) => GetValuewithResponsiveTree('min-width', minWidth)}
      ${({ maxWidth }) => GetValuewithResponsiveTree('max-width', maxWidth)};
    `;
  }};
`;

export default WIDTH