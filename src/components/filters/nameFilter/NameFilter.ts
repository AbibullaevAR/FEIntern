import type { TRequestParam } from '@/api/types';
import AbstractBackendFilter from '../AbstractBackendFilter';
import type { TPainting } from '@/models/painting';

export default class NameFilter extends AbstractBackendFilter {
  name: TPainting['name'] | null = null;

  getRequestParams(): TRequestParam | null {
    return this.name ? { key: 'q', value: this.name } : null;
  }
}
