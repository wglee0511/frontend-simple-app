import { css } from '@emotion/react';

import { COLORS, getColorWithOpacity } from './colors';

export const customScrollBar = css`
  overflow: overlay;

  ::-webkit-scrollbar {
    width: 5px;
    background-color: rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${getColorWithOpacity(COLORS.primary700, 0.2)};
  }
`;
