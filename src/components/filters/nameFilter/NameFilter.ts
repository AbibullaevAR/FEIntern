import type { TRequestParam } from '@/api/types';
import type { TPainting } from '@/models/painting';
import AbstractBackendFilter from '../AbstractBackendFilter';

export default class NameFilter extends AbstractBackendFilter {
  name: TPainting['name'] | null = null;

  getRequestParams(): TRequestParam | null {
    return this.name ? { key: 'q', value: this.name } : null;
  }
}
