import { css } from '@emotion/react';

import { COLORS } from './colors';

export const defaultFlex = css`
  display: flex;
  align-items: center;
`;

export const defaultCenterFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const defaultColumnFlex = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const centerFlex = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const spaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const viewportContainer = css`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  min-height: 100vh;
  max-height: 100vh;
  background-color: ${COLORS.white};
  overflow: hidden;

  /* iOS only */
  @supports (-webkit-appearance: none) and (stroke-color: transparent) {
    min-height: -webkit-fill-available;
    max-height: -webkit-fill-available;
  }
`;

export const customScrollBar = css`
  overflow: overlay;

  ::-webkit-scrollbar {
    width: 1px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${COLORS.gray400};
  }
`;
