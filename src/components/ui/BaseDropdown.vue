<script setup lang="ts">
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import ArrowDropdown from '@/components/icons/IconArrowDropdown.vue';

const isOpen = ref(false);
const target = ref(null);

onClickOutside(target, () => {
  isOpen.value = false;
});
</script>

<template>
  <div ref="target" class="base-dropdown">
    <div
      class="base-dropdown__trigger"
      :class="{ 'base-dropdown__trigger_border-on-open': isOpen }"
      @click="isOpen = !isOpen"
      @keypress.enter="isOpen = !isOpen"
      tabindex="0"
      role="button">
      <div class="base-dropdown__selected-name">
        <slot name="trigger" />
      </div>
      <ArrowDropdown class="base-dropdown__arrow" :class="{ 'base-dropdown__arrow_open': isOpen }"></ArrowDropdown>
    </div>
    <div class="base-dropdown__menu" :class="{ 'base-dropdown__menu_visible': isOpen }">
      <slot name="menu" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.base-dropdown {
  width: 100%;
  position: relative;

  &__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--additional-color);
    padding: 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: border-radius 1s ease, border-color 0.7s ease;

    &_border-on-open {
      border-radius: 8px 8px 0px 0px;
      border-bottom: 1px solid var(--main-color);
    }
  }

  &__selected-name {
    flex-grow: 1;
    overflow: hidden;
    padding-right: 10px;
  }

  &__menu {
    width: 100%;
    position: absolute;
    background-color: var(--main-color);
    border-radius: 0px 0px 8px 8px;
    border: 1px solid var(--additional-color);
    border-top: none;
    top: 100%;
    transition: opacity 0.7s, visibility 0.7s;
    opacity: 0;
    visibility: hidden;

    z-index: 2;

    &_visible {
      opacity: 1;
      visibility: visible;
    }
  }

  &__arrow {
    transform: rotate(0);
    transition: transform 0.7s ease;

    &_open {
      transform: rotate(180deg);
    }
  }
}
</style>
