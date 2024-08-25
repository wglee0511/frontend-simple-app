import { ReactNode } from 'react';

import type { MenuButtonProps } from './MenuButton/type';

type Value = ReactNode;
export interface Item {
  id?: number | string;
  value: Value;
  [key: string]: any;
}

export type MenuSize = 'xsmall' | 'small' | 'medium';

export type MenuPosition = 'upper' | 'bottom';

export interface MenuProps extends Omit<MenuButtonProps, 'selected' | 'opened'> {
  /** MenuList 전체 높이 */
  maxHeight?: number;

  /** 선택 항목 목록 */
  menuList: Item[];

  /** 선택 항목 사이즈  */
  menuListSize: MenuSize;

  /** 초기에 Menu가 열려 있는지 닫혀 있는지 여부 */
  defaultOpened?: boolean;

  /** 메뉴 버튼 border */
  hasBorder?: boolean;

  /** 필수 값 여부 */
  required?: boolean;

  /** menu list 열리는 위치 */
  position?: MenuPosition;

  /** 메뉴가 선택 되었는지 비교하는 menuList에 존재하는 키 값 */
  compareKey?: string;

  /** disable 상태 */
  disabled?: boolean;

  /** setState Item, 값 선택 */
  setItem: React.Dispatch<React.SetStateAction<Item | null>> | ((item: Item | null) => void);
}

export interface ContainerStyleProps {
  width: number;
}

export interface MenuListStyleProps {
  maxHeight?: number;
  position: MenuPosition;
}
