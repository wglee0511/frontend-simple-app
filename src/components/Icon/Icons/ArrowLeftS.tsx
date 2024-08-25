import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowLeft = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.636L15.778 7.05L10.828 12Z"
      fill={color || 'black'}
    />
  </svg>
);

export default ArrowLeft;
