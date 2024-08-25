import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { map } from 'lodash';
import { fetchImageList } from 'src/apis/image';
import InfinityScroll from 'src/components/Scroll';
import { Spinner } from 'src/components/Spinner';
import { useAppDispatch } from 'src/stores/hooks';
import { setToast } from 'src/stores/toast/slice';

import { CatImageData } from './type';

const GAP = 16;

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `,
  Wrapper: styled.div`
    @media (min-width: 600px) {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
      grid-auto-rows: 0;
      grid-gap: ${GAP}px;
    }
    @media (max-width: 600px) {
      display: flex;
      flex-wrap: wrap;
      gap: ${GAP}px;
    }
    width: 100%;
    max-width: 1200px;
    padding: ${GAP}px;
  `,
  Button: styled.button`
    width: 100%;
    box-sizing: border-box;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;
    border: none;
  `,
};

function CatViewerImageContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const [imageData, setImageData] = useState<CatImageData[]>([]);
  const [page, setPage] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isNext, setIsNext] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [targetData, setTargetData] = useState<undefined | CatImageData>(undefined);

  const renderImages = useMemo(
    () =>
      map(imageData, (value, index) => {
        const { height, width } = value;
        const targetWidth = (containerWidth - GAP * 2) / 3;
        const targetHeight = (targetWidth / width) * height;
        const rowSpan = Math.ceil(targetHeight / GAP);

        const isTarget = targetData?.id === value.id;

        return (
          <S.Button
            key={`${value.id}-${index}`}
            style={{
              gridRowEnd: `span ${rowSpan}`,
              backgroundImage: `url(${value.url})`,
              height: containerWidth < 600 ? `${(containerWidth / width) * height}px` : '',
            }}
            onClick={() =>
              setTargetData(() => {
                if (isTarget) {
                  return undefined;
                }
                return value;
              })
            }
          />
        );
      }),
    [imageData, containerWidth, targetData],
  );

  const getImage = useCallback(async () => {
    try {
      setIsLoading(true);
      const images = await fetchImageList({ limit: 30, page });
      setImageData((prev) => [...prev, ...(images as CatImageData[])]);
      setIsNext(() => [...images].length === 30);
      setPage((prev) => prev + 1);
    } catch (error) {
      dispatch(setToast('이미지를 불러오는데 실패했습니다.'));
    } finally {
      setIsLoading(false);
    }
  }, [dispatch, page]);

  useEffect(() => {
    (async () => {
      await getImage();
    })();
  }, [getImage]);

  useEffect(() => {
    if (containerRef === null) {
      return;
    }

    const getWidth = () => {
      const width = containerRef.current?.offsetWidth;
      setContainerWidth(width || 0);
    };

    getWidth();

    window.addEventListener('resize', getWidth);
    // eslint-disable-next-line consistent-return
    return () => {
      window.removeEventListener('resize', getWidth);
    };
  }, [containerRef]);

  return (
    <InfinityScroll
      style={{ width: '100%' }}
      nextCall={getImage}
      isLoading={isLoading}
      isNext={isNext}
    >
      <S.Container>
        <S.Wrapper ref={containerRef}>
          {imageData && renderImages}
          {isLoading && <Spinner />}
        </S.Wrapper>
      </S.Container>
    </InfinityScroll>
  );
}

export default CatViewerImageContainer;
