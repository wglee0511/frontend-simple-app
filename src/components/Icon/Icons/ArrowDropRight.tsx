import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDropRight = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M12.172 12L9.343 9.172L10.757 7.757L15 12L10.757 16.243L9.343 14.828L12.172 12Z"
      fill={color || 'black'}
    />
  </svg>
);

export default ArrowDropRight;
