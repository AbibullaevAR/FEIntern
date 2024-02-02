import type { TAuthor } from '@/models/author';
import AbstractBackendFilter from '../AbstractBackendFilter';
import type { TRequestParam } from '@/api/types';

export default class FilterAuthor extends AbstractBackendFilter {
  author: TAuthor | null = null;

  getRequestParams(): TRequestParam | null {
    return this.author ? { key: 'authorId', value: this.author.id } : null;
  }
}
