<script setup lang="ts">
import { ref, watch } from 'vue';
import _ from 'lodash';
import BaseDropdown from '@/components/ui/BaseDropdown.vue';
import CreatedFilter from './CreatedFilter';

const fromYear = ref();
const beforeYear = ref();
const createdFilter = ref(new CreatedFilter());

watch([beforeYear, fromYear], _.debounce(() => {
  createdFilter.value.beforeYear = Number(beforeYear.value);
  createdFilter.value.fromYear = Number(fromYear.value);
}, 500));

</script>

<template>
  <div class="created-filter">
    <BaseDropdown>
      <template v-slot:trigger>
        Created
      </template>
      <template v-slot:menu>
        <div class="created-filter__menu">
          <label><input v-model="fromYear" class="created-filter__entry" type="text" placeholder="from"></label>
          <span>-</span>
          <label><input v-model="beforeYear" class="created-filter__entry" type="text" placeholder="before"></label>
        </div>
      </template>
    </BaseDropdown>
  </div>
</template>

<style scoped lang="scss">
.created-filter {
  &__menu {
    padding: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__entry {
    max-width: 110px;
    background-color: rgb(239, 239, 239);
    border-radius: 8px;
    border: none;
    padding: 13px;
  }
  @media screen and (min-width: 768px) {
    &__menu {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 1366px) {
    &__menu {
      flex-direction: row;
    }
  }
}
textarea:focus,
input:focus {
  outline: none;
}
</style>
