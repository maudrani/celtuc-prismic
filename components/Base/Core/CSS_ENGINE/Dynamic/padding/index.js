
import { css } from 'styled-components';
import { GetValuewithResponsiveTree } from '../../utils/responsive';

const PADDING = css`
  ${({ pT }) => GetValuewithResponsiveTree('padding-top', pT)};
  ${({ pR }) => GetValuewithResponsiveTree('padding-right', pR)};
  ${({ pB }) => GetValuewithResponsiveTree('padding-bottom', pB)};
  ${({ pL }) => GetValuewithResponsiveTree('padding-left', pL)};
`;

export default PADDING;
