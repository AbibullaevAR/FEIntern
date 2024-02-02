import useFiltersStore from '@/stores/filters';
import type { TRequestParam } from '@/api/types';

export default abstract class AbstractBackendFilter {
  constructor() {
    const filterStore = useFiltersStore();
    filterStore.addBackendFilter(this);
  }

  abstract getRequestParams(): TRequestParam | null | TRequestParam[];
}
