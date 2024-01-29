<script setup lang="ts">
import { ref, watchEffect, unref } from 'vue';
import type { PropType, Ref } from 'vue';
import BaseDropdown from '@/components/ui/BaseDropdown.vue';
import IconSmallCross from '@/components/icons/IconSmallCross.vue';

export type TMenuItem = {
  id: number,
  name: String,
};

defineProps({
  menuItems: {
    type: Object as PropType<TMenuItem[]>,
    required: true,
  },
  selectedNameByDefault: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{(e: 'update:chosenItem', value: TMenuItem | null): void }>();

const chosenItem = ref() as Ref<TMenuItem | null>;

function restChosenItem() {
  chosenItem.value = null;
}

watchEffect(() => {
  emit('update:chosenItem', unref(chosenItem));
});

</script>

<template>
  <div class="list-dropdown">
    <BaseDropdown>
      <template v-slot:trigger>
        <div class="list-dropdown__trigger">
          <div class="list-dropdown__selected-name">
            {{ chosenItem ? chosenItem.name : selectedNameByDefault }}
          </div>
          <IconSmallCross v-show="chosenItem" @click.stop="restChosenItem"></IconSmallCross>
        </div>
      </template>
      <template v-slot:menu>
        <div class="list-dropdown__menu">
          <div
            class="list-dropdown__menu-item"
            v-for="menuItem of menuItems"
            :key="menuItem.id"
            @click="chosenItem = menuItem"
            @keypress.enter="chosenItem = menuItem">
            {{ menuItem.name }}
          </div>
        </div>
      </template>
    </BaseDropdown>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/font-variables';

.list-dropdown {
  &__trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__selected-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  &__menu {
    max-height: 443px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid rgba(var(--additional-color-rgb), 0.3);
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 9px;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      background: rgba(123, 123, 123, 1);
      border-radius: 10px;
    }
  }

  &__menu-item {
    @include middle-text;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 10px 10px 10px 20px;
  }

  &__menu-item:hover {
    background-color: var(--additional-color);
    color: var(--main-color);
  }
}
</style>
