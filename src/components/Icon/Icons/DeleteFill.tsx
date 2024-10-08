import React from 'react';

import type { IconStyleProps } from '../type';

const DeleteFill = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5 4H19V6H5V4H8.5L9.5 3H14.5L15.5 4ZM8 21C6.9 21 6 20.1 6 19V7H18V19C18 20.1 17.1 21 16 21H8Z"
      fill={color || 'black'}
    />
  </svg>
);

export default DeleteFill;
