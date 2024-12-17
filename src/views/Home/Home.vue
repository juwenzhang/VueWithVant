<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <home-banner></home-banner>
    <home-location></home-location>
  </div>
</template>

<script setup name="Home">
  import HomeNavBar from "./components/HomeNavBar.vue"
  import HomeBanner from "./components/HomeBanner.vue"
  import HomeLocation from "./components/HomeLocation.vue"
</script>

<style scoped lang="less">

</style>