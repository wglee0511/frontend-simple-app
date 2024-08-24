import React from 'react';

import styled from '@emotion/styled';
import { reduce } from 'lodash';

import { MasonryWithProps } from './type';

const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
  `,
  Column: styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
};

const Masonry = ({ children, column }: MasonryWithProps) => {
  const childrenArray = React.Children.toArray(children);

  const childrenComponent = reduce(
    childrenArray,
    (acc, child, index) => {
      const columnNumber = index % column;
      const currentArray = [...acc];
      if (currentArray[columnNumber] === undefined) {
        currentArray.push([child] as never);
      } else {
        (currentArray[columnNumber] as never[]).push(child as never);
      }

      return currentArray;
    },
    [],
  );

  const childColumn = childrenComponent.map((columnValue) => (
    <S.Column key={`${columnValue}`}>{columnValue}</S.Column>
  ));

  return <S.Container>{childColumn}</S.Container>;
};

export default React.memo(Masonry);
