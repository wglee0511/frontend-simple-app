import React from 'react';

import type { IconStyleProps } from '../type';

const ArrowDropUp = ({ size, color }: IconStyleProps) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 11.828L9.17199 14.657L7.75699 13.243L12 9L16.243 13.243L14.828 14.657L12 11.828Z"
      fill={color || 'black'}
    />
  </svg>
);

export default ArrowDropUp;
