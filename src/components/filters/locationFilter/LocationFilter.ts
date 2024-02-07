import type { TRequestParam } from '@/api/types';
import type { TLocation } from '@/models/location';
import AbstractBackendFilter from '../AbstractBackendFilter';

export default class LocationFilter extends AbstractBackendFilter {
  loction: TLocation | null = null;

  getRequestParams(): TRequestParam | null {
    return this.loction ? { key: 'locationId', value: this.loction.id } : null;
  }
}
