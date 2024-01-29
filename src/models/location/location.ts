import { ref } from 'vue';
import type { Ref } from 'vue';
import type { TLocation} from '.';
import getLocations from '@/api/location';

export default function initStore() {
  const locations = ref([]) as Ref<TLocation[]>;
  const loading = ref(false);

  (async () => {
    loading.value = true;
    locations.value = await getLocations();
    loading.value = false;
  })();

  return { locations, loading };
}
