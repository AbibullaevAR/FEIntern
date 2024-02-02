import axiosInstance from './axiosConfig';
import type { TPainingFromAPI, TRequestParam } from './types';

export default async function getPaintings(requestParams: TRequestParam[]) {
  const requestParamsObj = Object.fromEntries(requestParams.map((item) => [item.key, item.value]));

  const response = await axiosInstance.request<TPainingFromAPI[]>({
    url: '/paintings',
    method: 'GET',
    params: requestParamsObj,
  });

  if (response.statusText !== 'OK') {
    return [];
  }

  return response.data;
}
