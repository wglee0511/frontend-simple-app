import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDownS = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 13.172L16.95 8.222L18.364 9.636L12 16L5.636 9.636L7.05 8.222L12 13.172Z"
      fill={color || 'black'}
    />
  </svg>
);

export default ArrowDownS;
