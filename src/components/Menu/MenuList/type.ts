import { LiHTMLAttributes } from 'react';

import type { Item, MenuSize } from '../type';

export interface MenuListProps extends LiHTMLAttributes<HTMLLIElement> {
  /** 사이즈 */
  size: MenuSize;

  /** 선택 여부 */
  selected: boolean;

  /** 필수 조건 여부 */
  required?: boolean;

  /** 리스트 항목 */
  item: Item;
}

export type MenuListStyleProps = Omit<MenuListProps, 'item'>;
