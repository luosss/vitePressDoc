<template>
  <div @click="handler">Button 按钮</div>
</template>

<script setup lang="ts">
const handler = () => {
  console.log(`click me`);
};
</script>

<style scoped></style>
