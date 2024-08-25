import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDropDownFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M12 14L8 10H16L12 14Z" fill={color || 'black'} />
  </svg>
);

export default ArrowDropDownFill;
