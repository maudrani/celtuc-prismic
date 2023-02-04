import DynamicPanel from '@/components/Base/DynamicPanel';
import styled, { css } from 'styled-components';

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

export const TextBlockDynamicPanel = styled(DynamicPanel)`
  z-index: 2;
  position: absolute;
  display: flex;
  padding: 1.2em;
  ${({ align_y }) => yAlign(align_y)}
  ${({ align_x }) => xAlign(align_x)}
`;

export const WidthLimiter = styled.div`
  display: flex;
  max-width: ${({ width }) => width} !important;
`;

export const ImageWithInnerTextContainer = styled.div`
  position: relative;
  height: ${({ height }) => height};
`;
