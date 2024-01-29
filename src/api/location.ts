import axiosInstance from './axiosConfig';
import type { TLocation } from '@/models/location';

export default async function getLocations() {
  const response = await axiosInstance.request<TLocation[]>({
    url: '/locations',
    method: 'GET',
  });

  if (response.statusText !== 'OK') {
    return [];
  }

  return response.data;
}
