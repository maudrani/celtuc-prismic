import { css } from "styled-components";
import { GetValuewithResponsiveTree } from "../../utils/responsive";

const SIZE = css`
  ${({ size }) => GetValuewithResponsiveTree('font-size', size)}
`;

export default SIZE