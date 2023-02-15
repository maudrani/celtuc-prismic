import { css } from "styled-components";
import { GetValuewithResponsiveTree } from "../../utils/responsive";

const HEIGHT = css`
  ${({ minHeight, height, maxHeight }) => {
    if (height && minHeight && maxHeight) {
      return css`
        height: clamp(${minHeight}, ${height}, ${maxHeight});
      `;
    }

    return css`
      ${({ height }) => GetValuewithResponsiveTree('height', height)}
      ${({ minHeight }) => GetValuewithResponsiveTree('min-height', minHeight)}
      ${({ maxHeight }) => GetValuewithResponsiveTree('max-height', maxHeight)};
    `;
  }};
`;

export default HEIGHT;
