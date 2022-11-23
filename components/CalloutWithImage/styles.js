import styled from "styled-components";

export const CalloutWrapper = styled.section`
  width: 100%;
  min-height: 1000px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};

  .wrapper {
    width: 100%;
  }

  .image-container {
    background-image: url(${({ image }) => image});
  }

  h1 {
    font-size: 40px;
  }
`;
