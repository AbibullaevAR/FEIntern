import { ref } from 'vue';
import type { Ref } from 'vue';
import getAuthors from '@/api/author';
import type { TAuthor } from '.';

export default function initStore() {
  const authors = ref([]) as Ref<TAuthor[]>;
  const asyncAuthors = ref<Promise<TAuthor[]>>(getAuthors());

  asyncAuthors.value.then((authorsFromApi) => { authors.value = authorsFromApi; });

  return { authors, asyncAuthors };
}
