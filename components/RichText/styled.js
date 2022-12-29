import styled from 'styled-components';

export const RichTextContainer = styled.div`
  max-width: ${({ theme }) => theme.limits.pageWidth};
  display: flex;
  justify-content: center;

  padding: 60px 0;

  .content {
    width: 65%;
  }

  .bullet-titles {
    display: flex;
    gap: 5%;
    margin-bottom: 2.5%;

    li {
      font-weight: 400;
      font-size: 12px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.5;

    position: relative;

    word-wrap: break-word;
    overflow-wrap: break-word;
    hyphens: auto;
  }
`;
