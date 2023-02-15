import { css } from "styled-components";

export const yAlign = (value) =>
  ({
    top: css`
      justify-content: flex-start;
    `,
    center: css`
      justify-content: center;
    `,
    bottom: css`
      justify-content: flex-end;
    `,
  }[value]);

export const xAlign = (value) =>
  ({
    left: css`
      align-items: flex-start;
    `,
    center: css`
      align-items: center;
    `,
    right: css`
      align-items: flex-end;
    `,
  }[value]);
