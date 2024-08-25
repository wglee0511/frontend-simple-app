import React from 'react';

import type { IconStyleProps } from '../type';

const Add = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill={color || 'black'} />
  </svg>
);

export default Add;
