import type { TPainting } from '@/models/painting';

export type TRequestParam = {
  key: string,
  value: string | number
}

export type TPainingFromAPI = Omit<TPainting, 'author' | 'location'> & {
  locationId: number,
  authorId: number
}
