import { query } from '@/styles/theme/data/breakpoints';
import styled from 'styled-components';
import { css } from 'styled-components';
import { fluid } from 'utils/styles/fluid';
import { DIRECTION_NAMES as _dir } from 'constants/styles';
import { SIZES_NAMES as _s } from './adapters/collections';
import theme from '@/styles/theme';

const SIZE_VALUES = {
  max_width: {
    horizontal: {
      [_s.xxl]: '100%',
      [_s.xl]: theme.limits.pageWidth_int,
      get [_s.lg]() {
        return this[_s.xl] - 162;
      },
      get [_s.md]() {
        return this[_s.lg] - 162;
      },
      get [_s.sm]() {
        return this[_s.md] - 162;
      },
      get [_s.xs]() {
        return this[_s.sm] - 162;
      },
    },
    vertical: {
      [_s.xxl]: '100%',
      [_s.xl]: theme.limits.pageWidth_int,
      get [_s.lg]() {
        return this[_s.xl] - 362;
      },
      get [_s.md]() {
        return this[_s.lg] - 262;
      },
      get [_s.sm]() {
        return this[_s.md] - 200;
      },
      get [_s.xs]() {
        return this[_s.sm] - 300;
      },
    },
  },
  font_size: {
    [_s.xxl]: 20,
    [_s.xl]: 16,
    [_s.lg]: 16,
    [_s.md]: 14,
    [_s.sm]: 12,
    [_s.xs]: 10,
  },
};

const Sizes = (sizeName, direction) => {
  const isYDir = !(direction == _dir.left || direction == _dir.right);

  const valuesForSize = {
    text_container_font_size: {
      [_s.xxl]: `${20}px`,
      [_s.xl]: `${16}px`,
      [_s.lg]: `${16}px`,
      [_s.md]: `${14}px`,
      [_s.sm]: `${12}px`,
      [_s.xs]: `${10}px`,
    }[sizeName || [_s.lg]],
    transcript_font_size: {
      [_s.xxl]: `${16}px`,
      [_s.xl]: `${16}px`,
      [_s.lg]: `${14}px`,
      [_s.md]: `${12}px`,
      [_s.sm]: `${12}px`,
      [_s.xs]: `${12}px`,
    }[sizeName || [_s.lg]],
  };

  return {
    content: css`
      max-width: ${SIZE_VALUES.max_width[isYDir ? 'vertical' : 'horizontal'][
        sizeName
      ]}px;
    `,
    text_container: css`
      font-size: ${valuesForSize.text_container_font_size};
    `,
    transcript: css`
      font-size: ${valuesForSize.transcript_font_size};
    `,
  };
};

const Directions = (size) => {
  let size_value_x = SIZE_VALUES.max_width['horizontal'][size];
  let size_value_y = SIZE_VALUES.max_width['vertical'][size];
  const gap_x = '3.5em';
  const gap_y = '2.5em';
  const isXXLSize = size !== _s.xx;

  if (isXXLSize) {
    return {
      general_style: css`
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .text-container,
        .video-container {
          width: 100%;
        }
      `,
      get x_styles() {
        return css`
          ${this.general_style}

          ${query.down('xl')} {
            flex-direction: column;
          }
        `;
      },
      get y_styles() {
        return css`
          ${this.general_style}
          gap: ${gap_y};
        `;
      },
      get [_dir.right]() {
        return css`
          ${this.x_styles}

          .text-container {
            padding: 0 0 0 ${gap_x};
            ${query.down('xl')} {
              padding: 0 0 ${gap_y} 0;
            }
          }
        `;
      },
      get [_dir.left]() {
        return css`
          ${this.x_styles}
          flex-direction: row-reverse;

          .text-container {
            padding: 0 ${gap_x} 0 0;
            ${query.down(size_value_x)} {
              padding: 0 0 ${gap_y} 0;
            }
          }
        `;
      },
      get [_dir.top]() {
        return css`
          ${this.y_styles}
          flex-direction: column-reverse;
        `;
      },
      get [_dir.bottom]() {
        return css`
          ${this.y_styles}
          flex-direction: column;
        `;
      },
    };
  }

  return {
    general_style: css`
      display: grid;
      grid-auto-flow: dense;
      justify-content: center;
      align-items: flex-start;

      grid-template-columns: repeat(
        auto-fit,
        minmax(${size_value_x / 2}px, 1fr)
      );

      ${query.down(size_value_x)} {
        max-width: ${size_value_y}px;
      }

      ${query.down(size_value_x / 2)} {
        grid-template-columns: 1fr;
      }
    `,
    get x_styles() {
      return css`
        ${this.general_style}
      `;
    },
    get y_styles() {
      return css`
        ${this.general_style}
        gap: ${gap_y};
      `;
    },
    get [_dir.right]() {
      return css`
        ${this.x_styles}

        .text-container {
          padding: 0 0 0 ${gap_x};
          ${query.down(size_value_x)} {
            padding: ${gap_y} 0 0 0;
          }
        }
      `;
    },
    get [_dir.left]() {
      return css`
        ${this.x_styles}

        .video-container {
          grid-column: 2;
        }

        .text-container {
          grid-column: 1;

          padding: 0 ${gap_x} 0 0;
          ${query.down(size_value_x)} {
            padding: 0 0 ${gap_y} 0;
          }
        }

        ${query.down(size_value_x)} {
          grid-template-columns: 1fr;
          align-items: flex-end;

          .video-container {
            grid-row: 2;
            grid-column: auto;
          }

          .text-container {
            grid-row: 1;
            grid-column: auto;
          }
        }
      `;
    },
    get [_dir.top]() {
      return css`
        ${this.y_styles}

        .video-container {
          grid-row: 2;
        }

        .text-container {
          grid-row: 1;
        }
      `;
    },
    get [_dir.bottom]() {
      return css`
        ${this.y_styles}
      `;
    },
  };
};

export const VideoWithTextContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  ${({ size, direction }) => Sizes(size, direction).content}
  ${({ size }) => Sizes(size).text_container}
  ${({ direction, size }) => Directions(size)[direction]}
  ${fluid('font-size', 'px', [{ 1024: 14, 768: 12 }])}

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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5em;

    h4 {
      font-size: 3em;
      line-height: 1.2;
      width: 100%;
    }
    p {
      font-size: 1.375em;
      font-weight: 400;
      position: relative;

      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    }
  }
`;
