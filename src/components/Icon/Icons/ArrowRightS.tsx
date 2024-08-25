import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowRight = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M13.172 12L8.22198 7.05L9.63598 5.636L16 12L9.63598 18.364L8.22198 16.95L13.172 12Z"
      fill={color || 'black'}
    />
  </svg>
);

export default ArrowRight;
