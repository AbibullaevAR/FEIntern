import type { TAuthor } from '@/models/author';
import type { TLocation } from '@/models/location';

export type TPainting = {
  id: number,
  name: string,
  author: TAuthor,
  created: string,
  imageUrl: string,
  location: TLocation
}
