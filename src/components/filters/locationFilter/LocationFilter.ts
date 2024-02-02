import type { TRequestParam } from '@/api/types';
import AbstractBackendFilter from '../AbstractBackendFilter';
import type { TLocation } from '@/models/location';

export default class LocationFilter extends AbstractBackendFilter {
  loction: TLocation | null = null;

  getRequestParams(): TRequestParam | null {
    return this.loction ? { key: 'locationId', value: this.loction.id } : null;
  }
}
