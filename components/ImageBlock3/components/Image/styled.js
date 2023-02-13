import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import styled, { css } from 'styled-components';

const Position = (value) =>
  ({
    top: css`
      display: flex;
      flex-direction: column;
    `,
    bottom: css`
      display: flex;
      flex-direction: column-reverse;
    `,
    left: css`
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    `,
    right: css`
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

  ${({ position }) => Position(position)};
  gap: ${(gap) => gap};
`;

export const ImageDynamicPanel = styled(DynamicPanel)`
  display: flex;
  background: transparent;
`;

export const HeightLimiter = styled.div`
  height: ${({ height }) => height};
  width: 100%;
`;
