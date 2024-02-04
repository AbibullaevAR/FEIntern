<script setup lang="ts">
import PaginationPanel from '@/components/PaginationPanel.vue';
import HeaderMainPage from '@/components/HeaderMainPage.vue';
import PaintingCard from '@/components/PaintingCard.vue';
import usePaintingStore from '@/stores/painting';
import FilterAuthorComponent from '@/components/filters/authorFilter';
import LocationFilterComponent from '@/components/filters/locationFilter';
import CreatedFilterComponent from '@/components/filters/createdFilter';
import NameFilterComponent from '@/components/filters/nameFilter';

const paintingStore = usePaintingStore();

</script>

<template>
  <div class="main-page">
    <HeaderMainPage class="main-page__header"></HeaderMainPage>
    <div class="main-page__filters">
      <NameFilterComponent class="main-page__filter"></NameFilterComponent>
      <FilterAuthorComponent class="main-page__filter"></FilterAuthorComponent>
      <LocationFilterComponent class="main-page__filter"></LocationFilterComponent>
      <CreatedFilterComponent class="main-page__filter"></CreatedFilterComponent>
    </div>
    <div class="main-page__paintings-wrapper">
      <div class="main-page__paintings">
        <PaintingCard
          v-for="painting in paintingStore.paintings"
          :painting="painting"
          :key="painting.id"></PaintingCard>
      </div>
    </div>
    <PaginationPanel class="main-page__pagination-panel"></PaginationPanel>
  </div>
</template>

<style scoped lang="scss">
.main-page {
  padding-top: 35px;
  display: flex;
  flex-direction: column;
  height: 100vh;

  &__filters {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    row-gap: 15px;
    padding: 25px 0 45px 0;
  }
  &__paintings-wrapper {
    flex-grow: 1;
  }
  &__paintings {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 20px;
  }

  @media screen and (min-width: 768px) {
  &__filters {
    flex-direction: row;
    column-gap: 20px;
  }
  &__filter {
    width: calc(25% - 15px);
    flex-grow: 0;
    flex-shrink: 1;
  }
}
}
</style>
