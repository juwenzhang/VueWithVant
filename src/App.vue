<template>
  <div class="app">
    <div class="context">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <TabBar v-show="!route.meta?.hiddenTabBer"></TabBar>
  </div>
</template>

<script setup name="app">
  import TabBar from "./components/tab-bar/tab-bar.vue"
  import {useRoute} from "vue-router"

  const route = useRoute()
</script>

<style scoped>
</style>
