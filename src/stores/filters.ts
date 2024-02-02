import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Ref } from 'vue';
import type AbstractBackendFilter from '@/components/filters/AbstractBackendFilter';

const useFiltersStore = defineStore('filters', () => {
  const backendFilters = ref([]) as Ref<AbstractBackendFilter[]>;

  function addBackendFilter(filter: AbstractBackendFilter) {
    backendFilters.value.push(filter);
  }

  return {
    backendFilters,
    addBackendFilter,
  };
});

export default useFiltersStore;
