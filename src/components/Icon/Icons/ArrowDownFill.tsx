import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDownFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M12 16L6 10H18L12 16Z" fill={color || 'black'} />
  </svg>
);

export default ArrowDownFill;
