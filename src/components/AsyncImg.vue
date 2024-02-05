<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import getImage from '@/api/image';

const { src } = defineProps({
  src: { type: String, default: '' },
});

const imgURL = ref('src/assets/static/loading.svg');

watchEffect(async () => {
  const image = await getImage(src);

  if (!image) return;

  imgURL.value = URL.createObjectURL(image);
});
</script>

<template>
  <img :src="imgURL" alt="">
</template>
