import type { TRequestParam } from '@/api/types';
import AbstractBackendFilter from '../AbstractBackendFilter';

export default class CreatedFilter extends AbstractBackendFilter {
  fromYear: number | null = null;

  beforeYear: number | null = null;

  getRequestParams(): TRequestParam | TRequestParam[] | null {
    if (!this.fromYear && !this.beforeYear) return null;
    if (!this.fromYear) return { key: 'created_lte', value: this.beforeYear as number };
    if (!this.beforeYear) return { key: 'created_gte', value: this.fromYear as number };

    return [{ key: 'created_lte', value: this.beforeYear }, { key: 'created_gte', value: this.fromYear }];
  }
}
