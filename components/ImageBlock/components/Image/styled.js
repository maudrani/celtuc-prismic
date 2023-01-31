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

const AbsolutePosition = (value) =>
  ({
    Top: css`
      top: 0;
    `,
    Bottom: css`
      bottom: 0;
    `,
    Left: css`
      left: 0;
    `,
    Right: css`
      right: 0;
    `,
    Center: css`
      top: 0;
      bottom: 0;
    `,
  }[value]);

const yAlign = (value) =>
  ({
    Top: css`
      align-items: start;
    `,
    Bottom: css`
      align-items: end;
    `,
    Center: css`
      align-items: center;
    `,
  }[value]);

const xAlign = (value) =>
  ({
    Left: css`
      justify-content: start;
    `,
    Right: css`
      justify-content: end;
    `,
    Center: css`
      justify-content: center;
    `,
  }[value]);

export const CustomDynamicPanel = styled(DynamicPanel)`
  display: flex;
  padding: 20px;
  ${({ align_y }) => yAlign(align_y)}
  ${({ align_x }) => xAlign(align_x)}

  ${({ content_outside_image }) =>
    !content_outside_image &&
    css`
      position: absolute;
      z-index: 2;
    `}

    ${({ position }) => AbsolutePosition(position)}
`;

export const WidthLimiter = styled.div`
  margin: 0 auto;
  width: 100%;

  // min-width: ${({ minWidth }) => minWidth}px;  MAKES IT USELESS
  max-width: ${({ width }) => width} !important;
`;

export const ImageBlockImage = styled.div`
  height: 100%;
  max-height: ${({maxHeight}) => maxHeight};
`;

export const ImageContainer = styled.div`
  height: ${({ height }) => height}%;
  min-height: ${({ minHeight }) => minHeight}px;
  width: 100%;
  position: relative;

  ${({ position, content_outside_image }) =>
    content_outside_image && Position(position)}
  gap: ${({ gap }) => gap};
`;
