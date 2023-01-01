import { css } from 'styled-components';

const Sizes = css`
  html,
  body {
    font-size: ${({ theme }) => theme.sizes.defaultSize};
  }

  // Heading sizes
  ${({ theme }) =>
    Object.keys(theme.sizes)
      .reverse()
      .map((size, _idx) => {
        return css`
          h${_idx + 1} {
            font-size: ${theme.sizes[size]};
          }
        `;
      })}
`;

export default Sizes;
