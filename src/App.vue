<template>
  <div class="app">
    <div class="context">
      <router-view></router-view>
    </div>
    <TabBar></TabBar>
  </div>
</template>

<script setup name="app">
  import TabBar from "./components/tab-bar/tab-bar.vue";
</script>

<style scoped>
</style>
