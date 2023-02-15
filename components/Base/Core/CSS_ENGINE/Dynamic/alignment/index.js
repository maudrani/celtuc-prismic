import { css } from 'styled-components';
import { GetValuewithResponsiveTree } from '../../utils/responsive';
import { xAlign, yAlign } from './adapters';

const ALIGNMENT = css`
  display: flex;
  ${({ direction }) => GetValuewithResponsiveTree('flex-direction', direction)};

  ${({ gap }) => GetValuewithResponsiveTree('gap', gap)};

  ${({ align_x }) => GetValuewithResponsiveTree('', align_x, xAlign)}
  ${({ align_y }) => yAlign(align_y)}
  ${({ seflAlign }) => GetValuewithResponsiveTree('align-self', seflAlign)};
`;

export default ALIGNMENT;
