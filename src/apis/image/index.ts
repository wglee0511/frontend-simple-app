import { imageAxios } from '../axios/main';
import { ApiFetchFunction } from '../axios/type';

import { urls } from './urls';

export const fetchImageList: ApiFetchFunction<[]> = async ({ limit }) =>
  imageAxios.get(urls.main, { params: { limit } }).then((response) => response.data);
