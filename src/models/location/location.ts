import { ref } from 'vue';
import type { Ref } from 'vue';
import type { TLocation } from '.';
import getLocations from '@/api/location';

export default function initStore() {
  const locations = ref([]) as Ref<TLocation[]>;
  const asyncLocations = ref<Promise<TLocation[]>>(getLocations());

  asyncLocations.value.then((locationsFromApi) => { locations.value = locationsFromApi; });

  return { locations, asyncLocations };
}
