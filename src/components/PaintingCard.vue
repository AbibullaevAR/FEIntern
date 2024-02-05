<script setup lang="ts">
import AsyncImg from '@/components/AsyncImg.vue';
import type { PropType } from 'vue';
import type { TPainting } from '@/models/painting';
import { BASE_URL } from '@/enums';

defineProps({
  painting: {
    type: Object as PropType<TPainting>,
    default: null,
    reqired: true,
  },
});
</script>

<template>
  <div class="painting-card">
    <AsyncImg :src="`${BASE_URL}${painting.imageUrl}`"></AsyncImg>
    <div class="painting-card__info-panel">
      <div class="painting-card__name">{{ painting.name }}</div>
      <div>
        <span class="painting-card__property-name">Author:</span>
        <span>{{ painting.author.name }}</span>
      </div>
      <div>
        <span class="painting-card__property-name">Created:</span>
        <span>{{ painting.created }}</span>
      </div>
      <div>
        <span class="painting-card__property-name">Location:</span>
        <span>{{ painting.location.location }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/font-variables';
.painting-card {
  position: relative;
  overflow: hidden;
  color: black;
  border-radius: 15px;
  min-height: 205px;
  width: 100%;
  --bottom-transform-info-panel: -20%;

  &:hover {
    --bottom-transform-info-panel: -100%;
  }
  &__name {
    @include large-text;
    padding: 5px 0 5px 0;
  }
  &__property-name {
    @include middle-text;
    padding-right: 5px;
  }

  &__info-panel {
    @include small-text;
    position: absolute;
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    min-height: 50%;
    padding-left: 11px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.75);
    transform: translateY(var(--bottom-transform-info-panel));
    transition: transform 0.3s;
  }
}
img {
  display: block;
  width: 100%;
  aspect-ratio: 56 / 41;
  object-fit: cover;
}
@media screen and (min-width: 768px) {
  .painting-card {
    width: 48.6%;
  }
  img {
    aspect-ratio: 85 / 62;
  }
}
@media screen and (min-width: 1024px) {
  img {
    aspect-ratio: 30 / 23;
  }
  .painting-card {
    width: 32%;
  }
}
@media screen and (min-width: 1150px) {
  .painting-card {
    width: 32.2%;
  }
}
@media screen and (min-width: 1366px) {
  img {
    aspect-ratio: 72 / 55;
    object-fit: cover;
  }
}
</style>
