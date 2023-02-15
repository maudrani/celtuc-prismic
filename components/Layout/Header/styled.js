import {
  BACKGROUND_COLOR,
  padding,
  width,
} from '@/components/Base/Core/CSS_ENGINE/Dynamic';
import DynamicPanel from '@/components/Base/Core/DynamicPanel';
import styled from 'styled-components';
import { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
      transform: scale(0.8);

      ${({ collapsed }) =>
        !collapsed &&
        css`
          transform: scale(0.8) translateY(3%);

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

    @media (min-width: 831px) {
      display: none;
    }
  }

  .hide-on-830 {
    @media (max-width: 830px) {
      display: none;
    }
  }
`;

export const BarLink = styled.div`
  z-index: 11;
  padding: 1.1em;
`;

export const HiddenPanel = styled.div`
  width: 100%;
  position: absolute;
  z-index: 10;

  opacity: 0;

  transition: 2s;

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

  &.hidden_panel_collapsed {
    animation: hidePanel 1.75s cubic-bezier(0.785, 0.135, 0.35, 0.86) forwards;
  }

  &.hidden_panel_not-collapsed {
    animation: showPanel 0.5s cubic-bezier(0.785, 0.135, 0.35, 0.86) forwards;
  }
`;

export const MenuPanel = styled(DynamicPanel)`
  z-index: 1;
  height: fit-content !important;

  &.menu_panel_collapsed {
    animation: hidePanel 0.7s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;

    ul {
      animation: hidePanel 0.2s cubic-bezier(0.785, 0.135, 0.15, 0.86) forwards;
    }
  }

  &.menu_panel_collapsed_not-collapsed {
    box-shadow: 0 20px 65px 0 rgba(255, 255, 255, 0.5);
    animation: showPanel 0.5s cubic-bezier(0.785, 0.135, 0.15, 0.86);

    ul {
      animation: showPanel 0.7s cubic-bezier(0.785, 0.135, 0.15, 0.86);
    }
  }
`;

export const MenuLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 0.7em;

  ${padding}
  ${width}
`;

export const MenuPanelLink = styled.li`
  transition: 0.3s ease-in-out;
  font-weight: 600;
  opacity: ${({ selected }) => (selected ? 1 : 0.4)};

  :hover {
    opacity: 1;
  }
`;

export const Courtain = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: inherit;
  opacity: 0;
  pointer-events: none;
  z-index: 2;

  transition: 0.5s;
  backdrop-filter: blur(20px);

  ${BACKGROUND_COLOR}

  &.courtain_collapsed {
    opacity: 0;
  }

  &.courtain_not-collapsed {
    opacity: 1;
    pointer-events: all;
  }
`;
