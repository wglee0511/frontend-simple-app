import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowRightSFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M16 12L10 18V6L16 12Z" fill={color || '#181A20'} />
  </svg>
);

export default ArrowRightSFill;
