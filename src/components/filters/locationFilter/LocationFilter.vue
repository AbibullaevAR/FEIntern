<script setup lang="ts">
import { ref, unref, watchEffect } from 'vue';
import type { Ref } from 'vue';
import { storeToRefs } from 'pinia';
import ListDropdown from '@/components/ui/ListDropdown.vue';
import type { TMenuItem } from '@/components/ui/ListDropdown.vue';
import useLocationStore from '@/stores/location';
import type { TLocation } from '@/models/location';
import LocationFilter from './LocationFilter';

const { locations } = storeToRefs(useLocationStore());
const menuItems = ref([]) as Ref<TMenuItem[]>;
const locationFilter = ref(new LocationFilter());
const chosenMenuItem = ref<TMenuItem | null>(null);

function castFromTLocationToTMenuItem(location: TLocation): TMenuItem {
  return {
    id: location.id,
    name: location.location,
  };
}

function castFromTMenuItemToTLocation(menuItem: TMenuItem): TLocation {
  return {
    id: menuItem.id,
    location: menuItem.name.toString(),
  };
}

watchEffect(() => {
  menuItems.value = locations.value.map(castFromTLocationToTMenuItem);
});

watchEffect(() => {
  locationFilter.value.loction = unref(chosenMenuItem)
    ? castFromTMenuItemToTLocation(unref(chosenMenuItem) as TMenuItem)
    : null;
});

</script>

<template>
  <div class="location-filter">
    <ListDropdown v-model:chosen-item="chosenMenuItem" :menu-items="menuItems" :selected-name-by-default="'Location'"></ListDropdown>
  </div>
</template>
