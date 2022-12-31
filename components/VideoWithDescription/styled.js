import { query } from '@/styles/theme/data/breakpoints';
import styled from 'styled-components';
import { css } from 'styled-components';
import { fluid } from 'utils/styles/fluid';
import { DIRECTION_NAMES as _dir, THEME_NAMES as _th } from 'constants/styles';
import { SIZES_NAMES as _s } from './adapters/collections';
import theme from '@/styles/theme';

const Themes = {
  [_th.dark]: css`
    background-color: ${({ theme }) => theme.colors.black};

    .video-transcript,
    .text-container {
      color: ${({ theme }) => theme.colors.white};
    }

    .text-container .main-texts p {
      :before {
        background: ${({ theme }) => theme.colors.white};
      }
    }
  `,
  [_th.light]: css`
    background-color: ${({ theme }) => theme.colors.white};

    .video-transcript,
    .text-container {
      color: ${({ theme }) => theme.colors.black};
    }

    .text-container .main-texts p {
      :before {
        background: ${({ theme }) => theme.colors.black};
      }
    }
  `,
  get [_th['mid-light']]() {
    return css`
      ${this[_th.light]}

      background-color: ${({ theme }) => theme.colors['mid-light']};
    `;
  },
};

const Directions = {
  [_dir.right]: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
    justify-content: center;
    align-items: flex-start;

    .text-container {
      padding-right: 0;
    }

    ${query.down('xl')} {
      display: flex;
      flex-direction: column;
    }
  `,
  get [_dir.left]() {
    return css`
      ${this[_dir.right]}

      .video-container {
        grid-column: 2;
      }

      .title-container {
        grid-column: 1;
        padding-left: 0;
      }

      ${query.down('xl')} {
        flex-direction: column-reverse;
      }
    `;
  },
  get [_dir.top]() {
    return css`
      ${this[_dir.right]}
      display: flex;
      flex-direction: column-reverse;
      align-items: center;

      .text-container {
        padding: 60px 0;
      }

      ${query.down('xl')} {
        flex-direction: column-reverse;

        .text-container {
          padding: 30px 0;
        }
      }
    `;
  },
  get [_dir.bottom]() {
    return css`
      ${this[_dir.right]}
      ${this[_dir.top]}

      flex-direction: column;

      .text-container {
        padding: 20px 0;
      }

      ${query.down('xl')} {
        flex-direction: column;
      }
    `;
  },
};

const Sizes = (sizeName) => {
  const valuesForSize = {
    max_width: {
      [_s.xl]: theme.limits.pageWidth,
      [_s.lg]: '1000px',
      [_s.md]: '800px',
      [_s.sm]: '600px',
      [_s.xs]: '400px',
    }[sizeName || [_s.xl]],
    text_container_font_size: {
      [_s.xl]: `${20}px`,
      [_s.lg]: `${16}px`,
      [_s.md]: `${14}px`,
      [_s.sm]: `${12}px`,
      [_s.xs]: `${10}px`,
    }[sizeName || [_s.xl]],
    transcript_font_size: {
      [_s.xl]: `${16}px`,
      [_s.lg]: `${14}px`,
      [_s.md]: `${12}px`,
      [_s.sm]: `${12}px`,
      [_s.xs]: `${12}px`,
    }[sizeName || [_s.xl]],
  };

  return {
    content: css`
      max-width: ${valuesForSize.max_width};
    `,
    text_container: css`
      font-size: ${valuesForSize.text_container_font_size};
    `,
    transcript: css`
      font-size: ${valuesForSize.transcript_font_size};
    `,
  };
};

const enableMaxWidthOnSize = (direction) =>
  !(direction == _dir.left || direction == _dir.right);

export const VideoWithDescriptionContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ themeName }) => Themes[themeName]}

  .content {
    width: 100%;
    ${({ size, direction }) =>
      enableMaxWidthOnSize(direction) && Sizes(size).content}

    padding: 80px 20px;
    ${fluid('padding', '', [{ 1024: '60px 20px', 768: '34px 20px' }])}
    ${({ direction }) => Directions[direction]}
  }

  .video-container {
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    filter: drop-shadow(-15px 15px 15px rgba(0, 0, 0, 0.1));

    .video-transcript {
      display: flex;
      align-items: flex-end;

      ${({ size }) => Sizes(size).transcript}
    }
  }

  .text-container {
    min-height: 224px;

    padding: 0px 60px;
    ${query.down('xl')} {
      padding: 50px 0px;
      padding-right: 20px;
    }
    ${query.down('md')} {
      padding: 20px 0px;
    }
  }
`;

export const TextContainer = styled.div`
  ${({ size }) => Sizes(size).text_container}
  ${fluid('font-size', 'px', [{ 1024: 14, 768: 12 }])}

  display: flex;
  flex-direction: column;
  place-content: center;
  place-items: start;
  gap: 42px;

  ${query.down('md')} {
    gap: 24px;
  }

  .main-texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;

    h4 {
      font-size: 3.5em;
      line-height: 1.2;
      width: 100%;
    }
    p {
      font-size: 1.35em;
      opacity: 1;
      font-weight: 400;
      position: relative;

      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;

      text-indent: 12%;

      :before {
        content: '';
        display: block;
        width: 9%;
        height: 0.5px;
        left: 0;
        top: 0.5em;
        position: absolute;
      }
    }

    ${query.down('md')} {
      gap: 20px;
    }
  }
`;
