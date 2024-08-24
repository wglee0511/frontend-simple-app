import axios from 'axios';
import { IMAGE_API_KEY, MAIN_URL } from 'src/lib/constant';

export const imageAxios = axios.create({
  url: MAIN_URL,
  headers: { 'x-api-key': IMAGE_API_KEY },
});
