import styled from 'styled-components';
import { fluid } from 'utils/styles/fluid';
import DynamicPanel from '../Base/DynamicPanel';

export const CustomDynamicPanel = styled(DynamicPanel)``;

export const TextBlockContainer = styled.div`
  max-width: ${({ width }) => width} !important;
  text-align: ${({ align }) => align};

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: ${({ gap }) => gap};

  padding-top: ${({ spacing }) => spacing} !important;
  padding-bottom: ${({ spacing }) => spacing} !important;

  // Mobile
  ${fluid('font-size', '%', [{ 1200: 90 }, { 768: 80 }])}
`;
