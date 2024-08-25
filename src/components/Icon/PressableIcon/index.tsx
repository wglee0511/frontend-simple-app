import React from 'react';

import styled from '@emotion/styled';

import * as Icons from '../Icons';

import { PRESSABLE_ICON_PADDING } from './constant';
import { PressableIconProps, PressableIconStyleProps } from './type';

const S = {
  Container: styled.button<PressableIconStyleProps>`
    display: flex;
    outline: 0;
    border: none;
    background-color: transparent;
    padding: ${(props) => `${props.paddingSize}px ${props.paddingSize}px`};
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
    }
  `,
};

/**
 * @component
 * 컬러셋이 지정되지 않고 단순 클릭 가능한 아이콘 컴포넌트
 *
 * @props
 * paddingSize: none: 0, xs: 4, s: 10, base: 12, lg: 16, xl: 20, xxl: 24
 *
 * @example
 * <PressableIcon
 *   icon=""    // required
 *   size={10}             // required
 *   paddingSize="base"    // requried
 *   color={COLORS.black}  // optional
 * />
 */
const PressableIcon = ({
  icon,
  size,
  color,
  paddingSize = 'base',
  ...props
}: PressableIconProps) => {
  const IconComponent = Icons[icon];

  return (
    <S.Container paddingSize={PRESSABLE_ICON_PADDING[paddingSize]} {...props}>
      <IconComponent size={size} color={color} />
    </S.Container>
  );
};

export default PressableIcon;
