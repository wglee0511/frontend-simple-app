import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowUpSFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M12 8L18 14H6L12 8Z" fill={color || '#181A20'} />
  </svg>
);

export default ArrowUpSFill;
