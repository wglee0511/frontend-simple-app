import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDropDown = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 15L7.757 10.757L9.172 9.343L12 12.172L14.828 9.343L16.243 10.757L12 15Z"
      fill={color || 'black'}
    />
  </svg>
);

export default ArrowDropDown;
