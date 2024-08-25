import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDown = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_932_1578)">
      <path
        d="M13 16.172L18.364 10.808L19.778 12.222L12 20L4.22198 12.222L5.63598 10.808L11 16.172V4H13V16.172Z"
        fill={color || '#181A20'}
      />
    </g>
    <defs>
      <clipPath id="clip0_932_1578">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowDown;
