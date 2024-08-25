import { COLORS } from 'src/themes/colors';

import { GetMenuButtonStyleProps, GetMenuButtonStyleReturnType } from './type';

export const getMenuButtonStyle = ({
  opened,
  selected,
  disabled,
}: GetMenuButtonStyleProps): GetMenuButtonStyleReturnType => {
  if (disabled) {
    return {
      iconName: 'ArrowDownS',
      iconColor: COLORS.gray200,
      color: COLORS.gray200,
    };
  }

  if (!opened && !selected) {
    return {
      iconName: 'ArrowDownS',
      iconColor: COLORS.gray200,
      color: COLORS.gray200,
    };
  }

  if (opened) {
    return {
      iconName: 'ArrowUpS',
      iconColor: COLORS.gray800,
      color: COLORS.gray800,
    };
  }

  return {
    iconName: 'ArrowDownS',
    iconColor: COLORS.gray800,
    color: COLORS.gray800,
  };
};
