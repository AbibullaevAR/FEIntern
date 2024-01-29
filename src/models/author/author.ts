import { ref } from 'vue';
import type { Ref } from 'vue';
import type { TAuthor } from '.';
import getAuthors from '@/api/author';

export default function initStore() {
  const authors = ref([]) as Ref<TAuthor[]>;
  const loading = ref(false);

  (async () => {
    loading.value = true;
    authors.value = await getAuthors();
    loading.value = false;
  })();

  return { authors, loading };
}
