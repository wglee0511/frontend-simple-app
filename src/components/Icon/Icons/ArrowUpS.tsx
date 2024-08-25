import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowUpS = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 10.828L7.04999 15.778L5.63599 14.364L12 8L18.364 14.364L16.95 15.778L12 10.828Z"
      fill={color || 'black'}
    />
  </svg>
);

export default ArrowUpS;
