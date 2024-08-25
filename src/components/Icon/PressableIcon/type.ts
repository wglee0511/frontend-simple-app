import { ButtonHTMLAttributes } from 'react';

import { ValueOf } from 'src/types/common';

import { IconProps } from '../type';

import { PRESSABLE_ICON_PADDING } from './constant';

export type PressableIconPaddingSize = 'none' | 'xs' | 's' | 'base' | 'lg' | 'xl' | 'xxl';

export interface PressableIconProps extends IconProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /** 아이콘 외부 패딩 영역 */
  paddingSize: PressableIconPaddingSize;
}

export interface PressableIconStyleProps {
  paddingSize: ValueOf<typeof PRESSABLE_ICON_PADDING>;
}

export type PressableIconPadding = {
  [key in PressableIconPaddingSize]: number;
};
