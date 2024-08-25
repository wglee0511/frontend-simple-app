import { CSSProperties, PropsWithChildren } from 'react';

export interface InfinityScrollWithChildren extends PropsWithChildren {
  nextCall: () => void;
  isNext: boolean;
  isLoading: boolean;
  style: CSSProperties;
}
