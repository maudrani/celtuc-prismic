import styled from "styled-components";

export const AboutWrapper = styled.section`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 7vh 0 7vh 0;

  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .content {
    width: 100%;
    min-height: 85vh;
    padding: 7vh 0 7vh 0;

    border-top: 2px solid ${({ theme }) => theme.colors.white};

    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1000px) {
      flex-direction: column;
      gap: ${({ theme }) => theme.sizes.mdx};
    }

    h2 {
      @media (max-width: 1000px) {
        font-size: ${({ theme }) => theme.sizes.lg};
      }
    }

    .panel {
      min-height: inherit;

      display: grid;
      grid-template-rows: auto 1fr;
      width: 100%;
      max-width: 40%;
      gap: ${({ theme }) => theme.sizes.mdx};

      @media (max-width: 1000px) {
        max-width: 100%;
        text-align: center;
      }

      .paragraph {
        display: grid;
        gap: ${({ theme }) => theme.sizes.smx};

        p {
          word-wrap: break-word;
          overflow-wrap: break-word;
          hyphens: auto;
        }
      }

      img {
        transition: 0.3s linear;
      }
    }
  }
`;
