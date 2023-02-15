import { BACKGROUND_COLOR } from '@/components/Base/Core/CSS_ENGINE/Dynamic';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import styled from 'styled-components';
import { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  transition: ${({ collapsed }) => (collapsed ? '2.2s' : '0')} max-height
    ease-in;

  ${BACKGROUND_COLOR}
`;

export const HeaderBar = styled(DynamicPanel)`
  justify-content: space-between;

  .menu-btn {
    z-index: 11;
    cursor: pointer;

    &,
    * {
      transition: 0.3s;
    }

    svg {
      fill: ${({ theme }) => theme.colors.shark};
      transform: scale(0.7);

      ${({ collapsed }) =>
        !collapsed &&
        css`
          transform: scale(0.7) translateY(3%);

          rect {
            :nth-child(1) {
              transform: rotate(-45deg) translateY(25%) translateX(-60%);
            }
            :nth-child(2) {
              transform: rotate(45deg) translateY(-60%) translateX(30%);
            }
          }
        `};
    }
  }
`;

export const MenuPanel = styled(DynamicPanel)`
  min-height: 100vh;
  opacity: 1;

  gap: 4em;

  position: absolute;
  z-index: 10;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 0.7em;
  }

  @keyframes showPanel {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }

    100% {
      opacity: 1;
      transform: translateY(0%);
    }
  }

  @keyframes hidePanel {
    0% {
      opacity: 1;
      transform: translateY(0%);
    }

    40% {
      opacity: 0;
    }

    to {
      opacity: 0;
      transform: translateY(-100%);
    }
  }

  &.collapsed {
    animation: hidePanel 0.75s cubic-bezier(0.785, 0.135, 0.35, 0.86) forwards;

    ul {
      animation: hidePanel 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
    }
  }

  &.not-collapsed {
    animation: showPanel 0.5s cubic-bezier(0.785, 0.135, 0.35, 0.86) forwards;

    ul {
      animation: showPanel 1.1s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
  }
`;

export const MenuPanelLink = styled.li`
  transition: 0.3s ease-in-out;
  font-weight: 600;
  opacity: ${({ selected }) => (selected ? 1 : 0.4)};

  :hover {
    opacity: 1;
  }
`;
