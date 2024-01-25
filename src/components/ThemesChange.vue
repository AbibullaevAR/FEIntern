<script setup lang="ts">
import { ref, unref } from 'vue';

type Themes = 'dark_themes' | 'light_themes';

const currentThemes = ref<Themes>('light_themes');

function changeThemes() {
  document.body.classList.remove(unref(currentThemes));
  currentThemes.value = currentThemes.value === 'light_themes' ? 'dark_themes' : 'light_themes';
  document.body.classList.add(unref(currentThemes));
}

</script>

<template>
  <button type="button" class="themes-change" @click="changeThemes">
    <img v-if="currentThemes === 'dark_themes'" src="@/assets/ThemesChangeLight.svg" alt="">
    <img v-else src="@/assets/ThemesChangeDark.svg" alt="">
  </button>
</template>

<style scoped lang="scss">

button {
    display: inline-block;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: inherit;
    color: inherit;
    font-size: inherit;
    cursor: pointer;
    text-align: center;
}
</style>
