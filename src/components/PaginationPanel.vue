<script setup lang="ts">
import {
  computed, ref, unref, watch,
} from 'vue';
import { storeToRefs } from 'pinia';
import IconArrowPagination from '@/components/icons/IconArrowPagination.vue';
import IconDoubleArrowPagination from '@/components/icons/IconDoubleArrowPagination.vue';
import { MAX_PAGE_PAGINATION } from '@/enums';
import usePaintingStore from '@/stores/painting';

const paintingStore = usePaintingStore();
const { currentPage: pageNumberFromStore } = storeToRefs(paintingStore);
const chosenPageNumber = ref(pageNumberFromStore.value);

const visablePagesNumbers = computed(() => {
  if (unref(chosenPageNumber) === 1) {
    return [
      { pageNumber: unref(chosenPageNumber), isChosen: true },
      { pageNumber: unref(chosenPageNumber) + 1, isChosen: false },
      { pageNumber: unref(chosenPageNumber) + 2, isChosen: false },
    ];
  }

  if (unref(chosenPageNumber) === MAX_PAGE_PAGINATION) {
    return [
      { pageNumber: unref(chosenPageNumber) - 2, isChosen: false },
      { pageNumber: unref(chosenPageNumber) - 1, isChosen: false },
      { pageNumber: unref(chosenPageNumber), isChosen: true },
    ];
  }

  return [
    { pageNumber: unref(chosenPageNumber) - 1, isChosen: false },
    { pageNumber: unref(chosenPageNumber), isChosen: true },
    { pageNumber: unref(chosenPageNumber) + 1, isChosen: false }];
});

function setChosenPageNumber(settedNumber: number) {
  const isSettedNumberLessThenOne = settedNumber < 1;
  const isSettedNumberMoreThenMaxPage = settedNumber > MAX_PAGE_PAGINATION;

  if (isSettedNumberLessThenOne) {
    chosenPageNumber.value = 1;
    return;
  }

  if (isSettedNumberMoreThenMaxPage) {
    chosenPageNumber.value = MAX_PAGE_PAGINATION;
    return;
  }

  chosenPageNumber.value = settedNumber;
}

watch(pageNumberFromStore, () => {
  chosenPageNumber.value = pageNumberFromStore.value;
});

watch(chosenPageNumber, () => {
  paintingStore.actionSetCurrentPage(unref(chosenPageNumber));
});
</script>

<template>
  <div class="pagination-panel">
    <div
      @click="setChosenPageNumber(chosenPageNumber - 2)"
      @keypress.enter="setChosenPageNumber(chosenPageNumber - 2)"
      tabindex="0"
      role="button"
      :class="{ 'pagination-panel__cell_disabled': chosenPageNumber === 1 }"
      class="pagination-panel__cell">
      <IconDoubleArrowPagination></IconDoubleArrowPagination>
    </div>
    <div
      @click="setChosenPageNumber(chosenPageNumber - 1)"
      @keypress.enter="setChosenPageNumber(chosenPageNumber - 1)"
      tabindex="0"
      role="button"
      :class="{ 'pagination-panel__cell_disabled': chosenPageNumber === 1 }"
      class="pagination-panel__cell">
      <IconArrowPagination></IconArrowPagination>
    </div>
    <div
      v-for="{ pageNumber, isChosen } of visablePagesNumbers"
      :key="pageNumber"
      @click="setChosenPageNumber(pageNumber)"
      @keypress.enter="setChosenPageNumber(pageNumber)"
      tabindex="0"
      role="button"
      :class="{ 'pagination-panel__cell_chosen': isChosen }"
      class="pagination-panel__cell">
      {{ pageNumber }}
    </div>
    <div
      @click="setChosenPageNumber(chosenPageNumber + 1)"
      @keypress.enter="setChosenPageNumber(chosenPageNumber + 1)"
      tabindex="0"
      role="button"
      :class="{ 'pagination-panel__cell_disabled': chosenPageNumber === MAX_PAGE_PAGINATION }"
      class="pagination-panel__cell">
      <IconArrowPagination></IconArrowPagination>
    </div>
    <div
      @click="setChosenPageNumber(chosenPageNumber + 2)"
      @keypress.enter="setChosenPageNumber(chosenPageNumber + 2)"
      tabindex="0"
      role="button"
      :class="{ 'pagination-panel__cell_disabled': chosenPageNumber === MAX_PAGE_PAGINATION }"
      class="pagination-panel__cell">
      <IconDoubleArrowPagination></IconDoubleArrowPagination>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/font-variables';
.pagination-panel {
  display: flex;
  padding-top: 37px;
  padding-bottom: 60px;

  :first-child {
    border-radius: 8px 0 0 8px;
  }
  :nth-child(-n + 2) svg {
    transform: rotate(180deg);
  }

  :last-child {
    border-radius: 0 8px 8px 0;
  }

  &__cell {
    @include middle-text;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 41px;
    height: 41px;
    border: 1px solid var(--additional-color);
    cursor: pointer;

    &:hover {
      background-color: rgba(var(--additional-color-rgb), 0.3);
    }

    &_disabled {
      cursor: auto;
      opacity: 0.3;

      &:hover {
        background-color: var(--main-color);
      }
    }

    &_chosen {
      cursor: auto;
      color: var(--main-color);
      background-color: var(--additional-color);

      &:hover {
        background-color: var(--additional-color);
      }
    }
  }
}
</style>
