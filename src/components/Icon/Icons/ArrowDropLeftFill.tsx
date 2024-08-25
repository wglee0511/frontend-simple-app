import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDropLeftFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M9 12L13 8V16L9 12Z" fill={color || 'black'} />
  </svg>
);

export default ArrowDropLeftFill;
