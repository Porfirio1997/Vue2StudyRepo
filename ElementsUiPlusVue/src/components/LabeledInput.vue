<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <span>
    <span for="slot">{{ msg }}</span>
    <br />
    <slot id="slot"></slot>
  </span>
</template>

<style scoped></style>
