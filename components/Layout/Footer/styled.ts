import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  min-height: 150px;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.sizes.md} 0 ${({ theme }) => theme.sizes.md};

  .content {
    width: 100%;
    max-width: ${({ theme }) => theme.limits.pageWidth};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
      text-align: center;
      gap: ${({ theme }) => theme.sizes.md};
    }

    color: ${({ theme }) => theme.colors.white};

    .rights {
      width: 100%;
      display: flex;
      justify-content: start;
      align-items: center;
      gap: ${({ theme }) => theme.sizes.lg};

      @media (max-width: 1000px) {
        gap: ${({ theme }) => theme.sizes.sm};
    }
    }

    .logo {
      max-height: 50px;
    }

    .social-list {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;

      gap: ${({ theme }) => theme.sizes.lg};

      li {
        font-size: ${({ theme }) => theme.sizes.smx};
        opacity: 0.7;

        transition: 0.4s ease-out;
        cursor: pointer;
        :hover {
          opacity: 1;
        }
      }
    }
  }
`;
