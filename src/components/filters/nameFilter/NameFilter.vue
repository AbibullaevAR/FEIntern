<script setup lang="ts">
import _ from 'lodash';
import { ref, watch } from 'vue';
import BaseInput from '@/components/ui/BaseInput.vue';
import NameFilter from './NameFilter';

const nameFilter = ref(new NameFilter());
const name = ref('');

watch(name, _.debounce(() => {
  nameFilter.value.name = name.value;
}, 400));

</script>

<template>
  <div class="name-filter">
    <BaseInput v-model:value="name" :placeholder="'Name'"></BaseInput>
  </div>
</template>
