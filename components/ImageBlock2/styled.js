import styled from 'styled-components';
import { fluid } from 'utils/styles/fluid';
import DynamicPanel from '../Base/DynamicPanel';

export const CustomDynamicPanel = styled(DynamicPanel)`
  height: ${({ height }) => height};

  padding-top: ${({ spacing }) => spacing} !important;
  padding-bottom: ${({ spacing }) => spacing} !important;
`;

export const WidthLimiter = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: ${({ width }) => width} !important;
  height: 100%;

  margin: 0 auto;
`;

export const ImageBlockContainer = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ gap }) => gap};

  // Mobile
  ${fluid('font-size', '%', [{ 1200: 70 }, { 768: 40 }])}
`;
