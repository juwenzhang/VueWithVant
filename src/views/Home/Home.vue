<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <home-banner></home-banner>
    <home-location></home-location>
    <slider :imgList="imgList"></slider>
    <home-date></home-date>
  </div>
</template>

<script setup name="Home">
  import HomeNavBar from "./components/HomeNavBar.vue"
  import HomeBanner from "./components/HomeBanner.vue"
  import HomeLocation from "./components/HomeLocation.vue"
  import Slider from "../../components/slider/Slider.vue"
  import HomeDate from "./components/HomeDate.vue"

  const imgList = [
    new URL("../../assets/img/slider01.jpg", import.meta.url).href,
    new URL("../../assets/img/slider01.jpg", import.meta.url).href
  ]
</script>

<style scoped lang="less">

</style>