<script setup lang="ts">
import ThemesChange from './ThemesChange.vue';
</script>

<template>
  <header>
    <img src="@/assets/logo.svg" alt="">
    <ThemesChange></ThemesChange>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
