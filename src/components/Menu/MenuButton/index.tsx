import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import PressableIcon from 'src/components/Icon/PressableIcon';
import Text from 'src/components/Text';
import { COLORS } from 'src/themes/colors';

import type { MenuButtonProps, MenuButtonStyleProps } from './type';
import { getMenuButtonStyle } from './util';

const S = {
  Container: styled.button<MenuButtonStyleProps>`
    display: flex;
    width: ${(props) => props.width || '100%'};
    background-color: ${(props) => (props.disabled ? COLORS.gray200 : COLORS.white)};
    border-radius: 8px;
    padding: 13.5px 15px;
    outline: none;
    cursor: pointer;

    ${(props) =>
      props.borderNone &&
      css`
        border: none;
      `}

    :disabled {
      cursor: not-allowed;
    }
  `,
  Inner: styled.div<MenuButtonStyleProps>`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => (props.opened ? 0 : 1)};

    ${(props) =>
      props.borderNone &&
      css`
        padding: 0;
      `}
  `,
};

/**
 * @component
 * Menu에서 사용하는 상단 버튼
 *
 * @example
 * <MenuButton
 *  width={200}                       // optional
 *  item={item}                       // required
 *  opened                            // optional
 *  placeholder=''                    // required
 *  selected={false}                  // required
 *  hasBorder={true}                  // optional
 *  required={false}                  // optional
 *  disabled={false}                  // optional
 *  onClickTrailingIcon={() => {}}    // optional
 * />
 */
const MenuButton = ({
  width,
  item,
  placeholder,
  opened,
  selected,
  hasBorder = true,
  required = false,
  disabled = false,
  onClickTrailingIcon,
  ...props
}: MenuButtonProps) => {
  const { iconName, iconColor, color } = getMenuButtonStyle({
    opened,
    selected,
    required,
    disabled,
  });

  const onClickPressableIcon = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!onClickTrailingIcon) {
      return;
    }

    e.stopPropagation();
    onClickTrailingIcon(e);
  };

  return (
    <S.Container opened={opened} borderNone={!hasBorder} disabled={disabled} {...props}>
      <S.Inner opened={opened} borderNone={!hasBorder}>
        <Text fontSize={16} fontWeight={400} color={color}>
          {item ? item.value : placeholder}
        </Text>
      </S.Inner>
      <PressableIcon
        icon={iconName}
        size={24}
        paddingSize="none"
        color={iconColor}
        onClick={onClickPressableIcon}
      />
    </S.Container>
  );
};

export default MenuButton;
