import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDropUpFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M12 10L16 14H8L12 10Z" fill={color || 'black'} />
  </svg>
);

export default ArrowDropUpFill;
