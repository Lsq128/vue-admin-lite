<script setup lang="ts">
const msg = "vue-admin-lite";
</script>

<template>
  <h1 class="app-title">{{ msg }}</h1>
  <n-space>
    <n-button>Default</n-button>
    <n-button type="tertiary">Tertiary</n-button>
    <n-button type="primary">Primary</n-button>
    <n-button type="info">Info</n-button>
    <n-button type="success">Success</n-button>
    <n-button type="warning">Warning</n-button>
    <n-button type="error">Error</n-button>
  </n-space>
</template>

<style lang="scss" scoped>
.app-title {
  color: $test-color;
}
</style>
