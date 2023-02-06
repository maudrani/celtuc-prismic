import styled from 'styled-components';
import { fluid } from 'utils/styles/fluid';
import DynamicPanel from '../Base/DynamicPanel';

export const CustomDynamicPanel = styled(DynamicPanel)`
  display: grid;
  height: fit-content;
  min-height: ${({ height }) => height};

  padding-top: ${({ spacing }) => spacing} !important;
  padding-bottom: ${({ spacing }) => spacing} !important;

  // Mobile
  ${({ break_height_trigger }) => {
    return `${fluid('height', '', [{ [break_height_trigger]: '100%' }])}`;
  }}
`;

export const WidthLimiter = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${({ width }) => width} !important;
  
  margin: 0 auto;
  
  overflow: hidden;
`;

export const ImageBlockContainer = styled(DynamicPanel)`
  height: 100%;

  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(
      min(${({ grid_responsive_trigger }) => grid_responsive_trigger}px, 100%),
      1fr
    )
  );
  gap: ${({ gap }) => gap};


  // Mobile
  ${fluid('font-size', '%', [{ 1200: 70 }, { 768: 40 }])}
`;
