import React from 'react';

import * as Icons from './Icons';
import type { IconProps } from './type';

/**
 * @component
 * 아이콘 컴포넌트

 * @example
 * <Icon
 *   icon=""    // required
 *   size={10}             // required
 *   color={COLORS.black}  // optional
 * />
 */
const Icon = ({ icon, size, color }: IconProps) => {
  const IconComponent = Icons[icon];

  return <IconComponent size={size} color={color} />;
};

export default Icon;
