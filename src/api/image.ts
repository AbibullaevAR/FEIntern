import axios from 'axios';
import axiosRetry from 'axios-retry';
import { BASE_URL } from '@/enums';

export default async function getImage(url: string) {
  const clientImage = axios.create({ baseURL: BASE_URL });

  axiosRetry(clientImage, { retries: 3 });
  const response = await clientImage.request<Blob>({
    url,
    method: 'GET',
    responseType: 'blob',
  });

  if (response.statusText !== 'OK') {
    return null;
  }

  return response.data;
}
