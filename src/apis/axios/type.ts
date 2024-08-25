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

export type ApiFetchFunction<R> = ({
  limit,
  page,
}: {
  limit?: number;
  page?: number;
}) => Promise<R>;

export type ApiFetchWithParamsFunction<R, P> = (params: P) => Promise<R>;
