import { css } from 'styled-components';
import { GetValuewithResponsiveTree } from '../../utils/responsive';

const MARGIN = css`
  ${({ mT }) => GetValuewithResponsiveTree('margin-top', mT)};
  ${({ mR }) => GetValuewithResponsiveTree('margin-right', mR)};
  ${({ mB }) => GetValuewithResponsiveTree('margin-bottom', mB)};
  ${({ mL }) => GetValuewithResponsiveTree('margin-left', mL)};
`;

export default MARGIN;
