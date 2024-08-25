import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Text from 'src/components/Text';
import { COLORS } from 'src/themes/colors';

import type { MenuListProps, MenuListStyleProps } from './type';

const S = {
  Container: styled.li<MenuListStyleProps>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    background-color: ${(props) => (props.selected ? COLORS.primary700 : COLORS.white)};
    cursor: pointer;
  `,
  TextContainer: styled.div<MenuListStyleProps>`
    ${(props) =>
      props.size === 'xsmall' &&
      css`
        padding: 6.5px 0;
      `};

    ${(props) =>
      props.size === 'small' &&
      css`
        padding: 10.5px 0;
      `};

    ${(props) =>
      props.size === 'medium' &&
      css`
        padding: 14.5px 0;
      `};
  `,
};

const MenuList = ({ size, selected, item, ...props }: MenuListProps) => (
  <S.Container size={size} selected={selected} {...props}>
    <S.TextContainer size={size} selected={selected}>
      <Text fontSize={16} fontWeight={400} color={selected ? COLORS.white : COLORS.black}>
        {item.value}
      </Text>
    </S.TextContainer>
  </S.Container>
);

export default MenuList;
