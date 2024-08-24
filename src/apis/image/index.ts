import { imageAxios } from '../axios/main';
import { ApiFetchFunction } from '../axios/type';

import { urls } from './urls';

export const fetchWatchList: ApiFetchFunction<[]> = async ({ limit }) =>
  imageAxios.get(urls.main, { params: { limit } }).then((response) => response.data);
