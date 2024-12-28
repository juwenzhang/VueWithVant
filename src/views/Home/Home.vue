<template>
  <div class="home">
    <home-nav-bar></home-nav-bar>
    <home-banner></home-banner>
    <home-location></home-location>
    <slider :imgList="imgList"></slider>
    <home-date></home-date>
    <home-search-btn></home-search-btn>
    <home-category></home-category>
    <home-content-list></home-content-list>
    <home-search-form v-show="isShowSearchForm"></home-search-form>
  </div>
  <template v-for="(item, index) in 100">
    <div>{{ item }}</div>
  </template>
</template>

<script setup name="Home">
  import HomeNavBar from "./components/HomeNavBar.vue"
  import HomeBanner from "./components/HomeBanner.vue"
  import HomeLocation from "./components/HomeLocation.vue"
  import Slider from "../../components/slider/Slider.vue"
  import HomeSearchBtn from "./components/HomeSearchBtn.vue"
  import HomeCategory from "./components/HomeCategory.vue"
  import HomeContentList from "./components/HomeContentList.vue"
  import HomeSearchForm from "./components/HomeSearchForm.vue"
  import HomeDate from "./components/HomeDate.vue"
  import { computed } from "vue"
  import {useScroll} from "../../hooks/index.js"

  const imgList = [
    new URL("../../assets/img/slider01.jpg", import.meta.url).href,
    new URL("../../assets/img/slider01.jpg", import.meta.url).href
  ]

  const { scrollTop } = useScroll()

  // const isShowSearchForm = ref(false)
  // watch(scrollTop, (newTopValue) => {
  //   console.log(newTopValue)
  //   isShowSearchForm.value = newTopValue > 100
  // })


  const isShowSearchForm = computed(() => {
    return scrollTop.value > 100
  })

</script>

<style scoped lang="less">

</style>