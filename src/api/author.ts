import type { TAuthor } from '@/models/author';
import axiosInstance from './axiosConfig';

export default async function getAuthors() {
  const response = await axiosInstance.request<TAuthor[]>({
    url: '/authors',
    method: 'GET',
  });

  if (response.statusText !== 'OK') {
    return [];
  }

  return response.data;
}
