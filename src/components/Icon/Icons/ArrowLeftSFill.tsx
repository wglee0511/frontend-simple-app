import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowLeftSFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M8 12L14 6V18L8 12Z" fill={color || '#181A20'} />
  </svg>
);

export default ArrowLeftSFill;
