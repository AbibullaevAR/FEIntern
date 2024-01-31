<script setup lang="ts">
defineProps({
  value: {
    type: String,
    required: false,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});

const emit = defineEmits<{(e: 'update:value', value: String): void }>();
</script>

<template>
  <label><input type="text" @input="emit('update:value', value)" :value="value" :placeholder="placeholder"></label>
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixins';
@import '@/assets/styles/font-variables';

input {

  @include transition-background-color;
  width: 100%;
  background-color: var(--main-color);
  border: 1px solid var(--additional-color);
  color: var(--additional-color);
  border-radius: 7px;
  padding: 13px;
}

input::placeholder {
  @include small-text;
}

textarea:focus,
input:focus {
  outline: none;
}</style>
