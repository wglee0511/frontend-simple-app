import { SetState } from 'src/types/react';

export interface CatImageData {
  id: string;
  url: string;
  height: number;
  width: number;
}

export interface CatImageComponentWithProps {
  containerWidth: number;
  targetData: CatImageData | undefined;
  setTargetData: SetState<CatImageData | undefined>;
  index: number;
  imageData: CatImageData;
}
