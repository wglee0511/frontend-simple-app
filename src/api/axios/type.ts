import { CoinMarketName } from 'types/coin/market';
import { CandleDataType } from 'types/shared/chartType';

export interface APIRejected {
  data: {
    data: {
      message: string;
    };
    meta?: {
      code?: string;
      message?: string;
    };
  };
  status: number;
}

export interface CustomError {
  error: APIRejected;
}

export type ApiFetchFunction<R, Params = object> = ({
  pageSize,
  searchQuery,
  userId,
  marketName,
  candleType,
  coin,
}: {
  pageSize?: number;
  searchQuery?: string;
  userId?: string;
  strategyId?: string;
  marketName?: CoinMarketName;
  candleType?: CandleDataType;
  coin?: string;
  offset?: number;
} & Params) => Promise<R>;

export type ApiFetchWithParamsFunction<R, P> = (params: P) => Promise<R>;