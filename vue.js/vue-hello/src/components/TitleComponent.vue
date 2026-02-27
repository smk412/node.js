<template>
  <p>
    <b>{{ title }}</b
    ><span v-text="content"></span>
  </p>
</template>

<script setup>
defineProps({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});
</script>
