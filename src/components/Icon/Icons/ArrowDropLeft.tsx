import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDropLeft = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M11.828 12L14.657 14.828L13.243 16.243L9 12L13.243 7.757L14.657 9.172L11.828 12Z"
      fill={color || 'black'}
    />
  </svg>
);

export default ArrowDropLeft;
