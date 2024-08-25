import React from 'react';

import styled from '@emotion/styled';
import ReactDOM from 'react-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FLEX_GAP } from 'src/lib/constant';
import { COLORS, getColorWithOpacity } from 'src/themes/colors';

import { CatImageComponentWithProps } from './type';

const S = {
  Container: styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border: none;
    transition: all 0.5s;
    background-color: ${getColorWithOpacity(COLORS.white, 0.3)};
  `,
};

const CatViewImage = ({
  containerWidth,
  imageData,
  setTargetData,
  targetData,
}: CatImageComponentWithProps) => {
  const { width, height, id, url } = imageData;
  const targetWidth = (containerWidth - FLEX_GAP * 2) / 3;
  const targetHeight = (targetWidth / width) * height;
  const rowSpan = Math.ceil(targetHeight / FLEX_GAP);
  const isTarget = targetData?.id === id;
  return isTarget ? (
    ReactDOM.createPortal(
      <S.Container
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isTarget ? '100vw' : '0%',
          height: isTarget ? '100vh' : '0%',
          zIndex: 1,
        }}
        onClick={() =>
          setTargetData(() => {
            if (isTarget) {
              return undefined;
            }
            return imageData;
          })
        }
      >
        <img src={url} style={{ width: '100%', objectFit: 'none' }} alt={id} loading="lazy" />
      </S.Container>,
      (document.querySelector('#modal') as Element) ?? document.body,
    )
  ) : (
    <S.Container
      style={{
        gridRowEnd: `span ${rowSpan}`,
        width: !isTarget ? '100%' : '0%',
        height: containerWidth < 600 ? `${(containerWidth / width) * height}px` : '',
      }}
      onClick={() =>
        setTargetData(() => {
          if (isTarget) {
            return undefined;
          }
          return imageData;
        })
      }
    >
      <LazyLoadImage src={url} style={{ width: '100%', height: '100%' }} alt={id} />
    </S.Container>
  );
};

export default CatViewImage;
