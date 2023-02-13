import styled from 'styled-components';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';

export const LinkWrapper = styled(DynamicPanel)`
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: center;

  letter-spacing: 0.011em;

  cursor: pointer;
  transition: 0.2s ease-out;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    bottom: -0.1em;

    border: 0.01em solid;

    opacity: 0;

    transition: 0.2s ease-out;
  }

  &:hover {
    transition: 0.6s ease-out;

    filter: saturate(2);

    &::after {
      opacity: 0.6;
    }
  }
`;

export const Chevron = styled.span`
  content: '';
  position: relative;
  height: 0.35em;
  width: 0.35em;
  top: 0.1em;

  border-style: solid;
  border-width: 0.08em 0.08em 0 0;

  transform: rotate(45deg);
`;
