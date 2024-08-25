import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowUp = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <g clipPath="url(#clip0_932_1576)">
      <path
        d="M13 7.828V20H11V7.828L5.63598 13.192L4.22198 11.778L12 4L19.778 11.778L18.364 13.192L13 7.828Z"
        fill={color || '#181A20'}
      />
    </g>
    <defs>
      <clipPath id="clip0_932_1576">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowUp;
