import styled from "styled-components";
import { css } from "styled-components";

const CloseBtn = css`
  transform: translateY(3%);

  rect {
    :nth-child(1) {
      transform: rotate(-45deg) translateY(25%) translateX(-60%);
    }
    :nth-child(2) {
      transform: rotate(45deg) translateY(-60%) translateX(30%);
    }
  }
`;

export const HeaderBar = styled.div`
  position: absolute;
  z-index: 10;

  width: 100%;
  padding: ${({ theme }) => theme.sizes.md} ${({ theme }) => theme.sizes.mdx};

  display: flex;
  justify-content: space-between;
  align-items: center;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;

    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.black}90 -100%,
      rgba(0, 212, 255, 0) 100%
    );

    transition: 0.2s;

    ${({ isPageTop }) =>
      !isPageTop &&
      css`
        background: linear-gradient(
          180deg,
          ${({ theme }) => theme.colors.black} -40%,
          rgba(0, 212, 255, 0) 100%
        );
      `}
  }

  .menu-btn {
    padding: ${({ theme }) => theme.sizes.sm};
    z-index: 2;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 50%;

    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.2);

    cursor: pointer;
    &,
    * {
      transition: 0.3s;
    }
    :hover {
      background-color: ${({ theme }) => theme.colors.third};

      svg {
        fill: rgba(255, 255, 255, 1);
        transition: 0.1s;
      }
    }

    svg {
      fill: ${({ theme }) => theme.colors.black};

      ${({ collapsed }) => !collapsed && CloseBtn};
    }
  }

  .brand-container {
    z-index: 2;
    width: auto;
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;

    .brand-name {
      color: ${({ theme }) => theme.colors.white};
      text-shadow: 0px 0px 3px rgba(0, 0, 0, 0.4),
        0px 8px 13px rgba(0, 0, 0, 0.1), 0px 18px 23px rgba(0, 0, 0, 0.1);
      font-weight: 700;

      transition: 0.2s ease-in-out opacity, 0.3s ease-in-out transform;
      opacity: ${({ collapsed }) => (!collapsed ? "0" : "1")};
      transform: translateY(${({ collapsed }) => (!collapsed ? "50px" : "0")});
    }

    .brand-logo {
      position: absolute;
      width: 100%;
      transition: 0.2s ease-in-out opacity, 0.3s ease-in-out transform;
      filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.3));
      object-fit: contain;
      max-height: 40px;

      opacity: ${({ collapsed }) => (collapsed ? "0" : "1")};
      transform: translateY(${({ collapsed }) => (collapsed ? "-50px" : "0")});
    }
  }

  .get-in-touch {
    z-index: 2;
    background-color: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.main};
    font-weight: 500;
    box-shadow: 0 0 9px 2px rgba(0, 0, 0, 0.2);

    :hover {
      color: ${({ theme }) => theme.colors.white};
    }

    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const CollapsedPanel = css`
  transform: scale(4);
  opacity: 0;
  *,
  & {
    pointer-events: none;
  }
`;

export const MenuPanel = styled.div`
  width: 100%;
  height: 100vh;
  opacity: 1;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.mdx};

  background-color: ${({ theme }) => theme.colors.black};

  /* Conditions for open close */
  transition: 0.4s ease-in-out;
  ${({ collapsed }) => collapsed && CollapsedPanel}

  ul {
    z-index: 2;
    gap: ${({ theme }) => theme.sizes.md};

    li {
      text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.7);
    }

    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      gap: ${({ theme }) => theme.sizes.sm};
    }
  }

  .link-list {
    display: flex;

    font-size: ${({ theme }) => theme.sizes.mdx};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
  }

  .link-list-minor {
    display: flex;
    color: ${({ theme }) => theme.colors.white};

    text-transform: uppercase;
    gap: ${({ theme }) => theme.sizes.md};

    li {
      transition: 0.3s ease-in-out;
      opacity: 0.4;

      :hover {
        opacity: 1;
      }
    }
  }

  .bg-img {
    z-index: 1;
    position: absolute;
    right: -40%;
    width: 100%;
    height: 100%;

    opacity: 0.2;
  }
`;

export const MenuPanelLink = styled.li`
  transition: 0.3s ease-in-out;

  opacity: ${({ selected }) => (selected ? 1 : 0.4)};

  :hover {
    opacity: 1;
  }
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  transition: ${({ collapsed }) => (collapsed ? "2.2s" : "0")} max-height
    ease-in;
  max-height: ${({ collapsed }) => (collapsed ? "0" : "100vh")};
  min-height: 300px;
  overflow: hidden;

  position: fixed;
  z-index: 100;

  display: flex;
  justify-content: center;

  @media (max-width: 900px) {
    ${({ theme }) => theme.coreSize(10)};
    min-height: ${({ theme }) => theme.sizes.xl};
  }
`;
