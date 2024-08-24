import React, { useEffect, useMemo, useRef, useState } from 'react';

import styled from '@emotion/styled';
import { isNil, map } from 'lodash';
import { fetchImageList } from 'src/apis/image';
import { Spinner } from 'src/components/Spinner';
import { useAppDispatch } from 'src/stores/hooks';
import { setToast } from 'src/stores/toast/slice';

import { CatImageData } from './type';

const GAP = 16;

const S = {
  Container: styled.div`
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
    grid-auto-rows: 0;
    grid-gap: ${GAP}px;
    padding: ${GAP}px;
  `,
  Image: styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
  `,
};

function CatViewerImageContainer() {
  const containerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [imageData, setImageData] = useState<CatImageData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  const renderImages = useMemo(
    () =>
      map(imageData, (value) => {
        if (isNil(containerRef) || isNil(containerRef?.current)) {
          return <div />;
        }
        const { height, width } = value;
        const targetWidth = (containerWidth - GAP * 2) / 3;
        const targetHeight = (targetWidth / width) * height;
        const rowSpan = Math.ceil(targetHeight / GAP);

        return (
          <S.Image key={value.id} style={{ gridRowEnd: `span ${rowSpan}` }}>
            <img style={{ objectFit: 'contain', width: '100%' }} src={value.url} alt={value.id} />
          </S.Image>
        );
      }),
    [imageData, containerWidth, containerRef],
  );

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const images = await fetchImageList({ limit: 30 });
        setImageData(images as CatImageData[]);
      } catch (error) {
        dispatch(setToast('이미지를 불러오는데 실패했습니다.'));
      } finally {
        setIsLoading(false);
      }
    })();
  }, [dispatch]);

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
    <S.Container ref={containerRef}>
      {imageData && renderImages}
      {isLoading && <Spinner />}
    </S.Container>
  );
}

export default CatViewerImageContainer;
