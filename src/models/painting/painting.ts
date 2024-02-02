import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import useFiltersStore from '@/stores/filters';
import getPaintings from '@/api/painting';
import type { TRequestParam } from '@/api/types';
import type { TPainting } from '.';
import { joinWithAuthors, joinWithLocations } from '../x';
import { LIMIT_PAINTINGS_ON_PAGE } from '@/enums';

function initStore() {
  const paintings = ref([]) as Ref<TPainting[]>;
  const { backendFilters } = useFiltersStore();

  watch(backendFilters, async () => {
    const requestParams = backendFilters.map((item) => item.getRequestParams()).flat()
      .filter((item) => item) as TRequestParam[];

    requestParams.push({ key: '_limit', value: LIMIT_PAINTINGS_ON_PAGE });
    const paintingsFromAPI = await getPaintings(requestParams);

    paintings.value = await joinWithLocations(await joinWithAuthors(paintingsFromAPI));
  });
  return { paintings };
}

export default initStore;
