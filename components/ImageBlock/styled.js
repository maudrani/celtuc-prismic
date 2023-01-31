import styled from 'styled-components';
import { fluid } from 'utils/styles/fluid';
import DynamicPanel from '../Base/DynamicPanel';

export const CustomDynamicPanel = styled(DynamicPanel)`
  display: grid;
`;

export const WidthLimiter = styled.div`
  width: 100%;
  max-width: ${({ width }) => width} !important;
  height: 100%;

  margin: 0 auto;
`;

export const ImagesContainer = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: ${({ gap }) => gap};

  padding-top: ${({ spacing }) => spacing} !important;
  padding-bottom: ${({ spacing }) => spacing} !important;

  // Mobile
  ${fluid('font-size', '%', [{ 1200: 70 }, { 768: 40 }])};
`;
