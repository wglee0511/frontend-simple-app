import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDropRightFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M14 12L10 16V8L14 12Z" fill={color || 'black'} />
  </svg>
);

export default ArrowDropRightFill;
