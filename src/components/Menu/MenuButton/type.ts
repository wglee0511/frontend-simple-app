import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

import { IconOption } from 'src/components/Icon/type';

import { Item } from '../type';

export interface MenuButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼의 width */
  width?: number;

  /** 선택된 값 */
  item: Item | null;

  /** 아무것도 선택되지 않은 경우에 보여주는 값 */
  placeholder: string;

  /** Menu가 열렸는지 여부 */
  opened: boolean;

  /** 선택 여부 */
  selected: boolean;

  /** 메뉴 버튼 border */
  hasBorder?: boolean;

  /** 필수 값 여부 */
  required?: boolean;

  /** disable 상태 */
  disabled?: boolean;

  /** 우측 끝 아이콘 클릭 이벤트 */
  onClickTrailingIcon?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface MenuButtonStyleProps
  extends Omit<MenuButtonProps, 'item' | 'placeholder' | 'selected' | 'onClickTrailingIcon'> {
  borderNone?: boolean;
}

export interface GetMenuButtonStyleProps {
  opened: boolean;
  selected: boolean;
  required: boolean;
  disabled: boolean;
}

export interface GetMenuButtonStyleReturnType {
  iconName: IconOption;
  iconColor: string;
  color: string;
}
