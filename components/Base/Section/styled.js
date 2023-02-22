import styled from 'styled-components';
import {
  alignment,
  BACKGROUND_COLOR,
  FONT_COLOR,
  margin,
  padding,
  width,
  size,
  height,
} from '../Core/CSS_ENGINE/Dynamic';

export const SectionWrapper = styled.section`
  min-height: 100%;

  ${width}
  ${height}
  ${alignment}
  ${margin}
  ${padding}
  ${BACKGROUND_COLOR}
  ${FONT_COLOR}
  ${size}
`;
