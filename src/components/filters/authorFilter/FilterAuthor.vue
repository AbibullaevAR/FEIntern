<script setup lang="ts">
import { ref, unref, watchEffect } from 'vue';
import { storeToRefs } from 'pinia';
import ListDropdown from '@/components/ui/ListDropdown.vue';
import useAuthorStore from '@/stores/author';
import type { TAuthor } from '@/models/author';
import FilterAuthor from './FilterAuthor';

const { authors } = storeToRefs(useAuthorStore());
const filterAuthor = ref(new FilterAuthor());
const chosenAuthor = ref<TAuthor | null>(null);

watchEffect(() => {
  filterAuthor.value.author = unref(chosenAuthor);
});

</script>

<template>
  <div class="filter-author">
    <ListDropdown v-model:chosen-item="chosenAuthor" :menu-items="authors" :selected-name-by-default="'Author'"></ListDropdown>
  </div>
</template>
