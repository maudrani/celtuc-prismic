import styled from 'styled-components';
import {
  alignment,
  BACKGROUND_COLOR,
  borderRadius,
  FONT_COLOR,
  height,
  margin,
  padding,
  size,
  width,
} from '../CSS_ENGINE/Dynamic';

export const DynamicPanelContainer = styled.div`
  ${size}
  ${width}
  ${height}
  ${alignment}
  ${padding}
  ${margin}
  ${BACKGROUND_COLOR}
  ${FONT_COLOR}
  ${borderRadius}
`;
