import { ref, watch } from 'vue';
import type { Ref } from 'vue';
import useFiltersStore from '@/stores/filters';
import getPaintings from '@/api/painting';
import type { TRequestParam } from '@/api/types';
import { LIMIT_PAINTINGS_ON_PAGE } from '@/enums';
import type { TPainting } from '.';
import { joinWithAuthors, joinWithLocations } from '../x';

function initStore() {
  const paintings = ref([]) as Ref<TPainting[]>;
  const currentPage = ref(1);

  const { backendFilters } = useFiltersStore();

  function actionSetCurrentPage(page: number) {
    currentPage.value = page;
  }

  async function reloadPaintings() {
    const requestParams = backendFilters.map((item) => item.getRequestParams()).flat()
      .filter((item) => item) as TRequestParam[];

    requestParams.push({ key: '_limit', value: LIMIT_PAINTINGS_ON_PAGE });
    requestParams.push({ key: '_page', value: currentPage.value });
    const paintingsFromAPI = await getPaintings(requestParams);

    paintings.value = await joinWithLocations(await joinWithAuthors(paintingsFromAPI));
  }

  watch(backendFilters, () => {
    currentPage.value = 1;
    reloadPaintings();
  });

  watch(currentPage, reloadPaintings);

  return { paintings, currentPage, actionSetCurrentPage };
}

export default initStore;
