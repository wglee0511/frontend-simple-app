import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowUpdown = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M12 17L8 13H16L12 17Z" fill={color || 'black'} />
    <path d="M12 7L16 11H8L12 7Z" fill={color || 'black'} />
  </svg>
);

export default ArrowUpdown;
