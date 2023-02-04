import DynamicPanel from '@/components/Base/DynamicPanel';
import styled, { css } from 'styled-components';

const Position = (value) =>
  ({
    Top: css`
      display: flex;
      flex-direction: column;
    `,
    Bottom: css`
      display: flex;
      flex-direction: column-reverse;
    `,
    Left: css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    `,
    Right: css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

      .imageblock-textblock {
        grid-column: 2;
        grid-row: 1;
      }
    `,
  }[value]);

export const TextBlockDynamicPanel = styled(DynamicPanel)`
  display: flex;
`;

export const WidthLimiter = styled.div`
  display: flex;
  max-width: ${({ width }) => width} !important;
`;

export const ImageWithInnerTextContainer = styled.div`
  position: relative;
  height: 100%;

  ${({ position }) => Position(position)}
`;

export const HeightLimiter = styled.div`
  height: ${({ height }) => height};
`;
