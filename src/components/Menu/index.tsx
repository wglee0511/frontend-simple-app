import React, { useEffect, useMemo, useState } from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { COLORS } from 'src/themes/colors';

import Divider from '../Divider';

import MenuButton from './MenuButton';
import MenuList from './MenuList';
import type { MenuProps, Item, ContainerStyleProps, MenuListStyleProps } from './type';

const S = {
  Container: styled.div<ContainerStyleProps>`
    position: relative;
    width: ${(props) => (props.width ? `${props.width}px` : '100%')};
  `,
  MenuListContainer: styled.ol<MenuListStyleProps>`
    position: absolute;
    width: inherit;
    margin: 0;
    padding: 8px 0;
    border: 1px solid ${COLORS.gray200};
    border-radius: 8px;
    background-color: ${COLORS.white};
    overflow-y: overlay;

    ${(props) =>
      props.maxHeight &&
      css`
        max-height: ${`${props.maxHeight}px`};
      `};

    ${(props) =>
      props.position === 'bottom' &&
      css`
        top: ${'calc(+100% + 4)'};
      `};

    ${(props) =>
      props.position === 'upper' &&
      css`
        bottom: ${'calc(+100% + 4)'};
      `}
  `,
  Overlay: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
  `,
};

/**
 * @component
 * 셀렉트 형식의 메뉴
 * @example
 * <Menu
 *   width={300}                    // optional
 *   maxHeight={150}                // required
 *   menuList={menuList}            // required
 *   menuListSize={menuListSize}    // required
 *   item={item}                    // required
 *   placeholder="placeholder"      // required
 *   defaultOpened={false}          // optional
 *   required={false}               // optional
 *   setMenu={setMenu}              // required
 *   buttonBorderWidth={1}          // optional
 *   position='bottom'              // optional
 *   compareKey=''                  // optional
 *   disabled={false}               // optional
 *   onClickTrailingIcon={() => {}} // optional
 * />
 */

const Menu = ({
  width = 0,
  maxHeight,
  menuList,
  menuListSize,
  item,
  placeholder,
  required = false,
  defaultOpened = false,
  hasBorder = true,
  position = 'bottom',
  compareKey,
  disabled = false,
  setItem,
  onClickTrailingIcon,
}: MenuProps) => {
  const activeCompareKey = useMemo(() => compareKey || 'id', [compareKey]);

  const [opened, setOpened] = useState(defaultOpened);

  const onClickButton = () => {
    if (disabled) {
      return;
    }

    setOpened((prev) => !prev);
  };

  const onClickList = (clickedItem: Item) => () => {
    if (item && clickedItem[activeCompareKey] === item[activeCompareKey]) {
      if (required) {
        setOpened(false);
        return;
      }

      setItem(null);
      return;
    }

    setItem(clickedItem);
    setOpened(false);
  };

  useEffect(() => {
    if (disabled && opened) {
      setOpened(false);
    }
  }, [disabled, opened]);

  return (
    <S.Container width={width}>
      {opened && <S.Overlay onClick={() => setOpened(false)} />}
      <MenuButton
        opened={opened}
        selected={!!item}
        placeholder={placeholder}
        item={item}
        hasBorder={hasBorder}
        required={required}
        disabled={disabled}
        onClick={onClickButton}
        onClickTrailingIcon={onClickTrailingIcon}
      />
      {opened && (
        <S.MenuListContainer maxHeight={maxHeight} position={position}>
          {menuList.map((menu, idx) => {
            const isLast = menuList.length === idx + 1;

            return (
              <>
                <MenuList
                  key={menu[activeCompareKey]}
                  size={menuListSize}
                  selected={menu[activeCompareKey] === item?.[activeCompareKey]}
                  required={required}
                  item={menu}
                  onClick={onClickList(menu)}
                />
                {!isLast && <Divider vertical={10} />}
              </>
            );
          })}
        </S.MenuListContainer>
      )}
    </S.Container>
  );
};

export default Menu;
