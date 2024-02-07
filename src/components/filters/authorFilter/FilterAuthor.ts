import type { TAuthor } from '@/models/author';
import type { TRequestParam } from '@/api/types';
import AbstractBackendFilter from '../AbstractBackendFilter';

export default class FilterAuthor extends AbstractBackendFilter {
  author: TAuthor | null = null;

  getRequestParams(): TRequestParam | null {
    return this.author ? { key: 'authorId', value: this.author.id } : null;
  }
}
