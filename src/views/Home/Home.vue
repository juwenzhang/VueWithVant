<template>
  <div class="home" ref="homeRef">
    <home-nav-bar></home-nav-bar>
    <home-banner></home-banner>
    <home-location></home-location>
    <slider :imgList="imgList"></slider>
    <home-date></home-date>
    <home-search-btn></home-search-btn>
    <home-category></home-category>
    <home-content-list :reachBottom="reachBottom"></home-content-list>
    <home-search-form v-show="isShowSearchForm"></home-search-form>
    <scroll-to-top :homeRef="homeRef" v-show="isShowBackTop"></scroll-to-top>

    <div class="Home-item">
      <template v-for="(item, index) in 100">
        <div>{{ item }}</div>
      </template>
    </div>
  </div>
<!--  <loading>-->
<!--    <div>-->
<!--      哈哈哈-->
<!--    </div>-->
<!--  </loading>-->
</template>

<!-- 开始实现自定义指令 -->
<script>
  // option api 的书写
  export default {
    directives: {
      focus: {
        // 生命周期函数
        mounted(el) {  // 表示的是我们的自定义指令运用的元素被挂载后的生命周期函数
          el?.focus()
        }
      }
    },
    setup(props, { emit }) {
      // 在组合式 api 中的自定义指令的话需要进行的是直接命名我们的指令即可
      // 指令命名格式 vFocus v后面的字母必须大写
      const vFocus = {
        mounted(el) {
          el?.focus()
        }
      }
      return {
        vFocus
      }
    }
  }
</script>

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
  import scrollToTop from "../../components/scroll/scrollToTop.vue"
  // import loading from "../../components/Loading/loading.vue"
  import { computed, ref } from "vue"
  import { useElementScroll } from "../../hooks/index.js"

  const imgList = [
    new URL("../../assets/img/slider01.jpg", import.meta.url).href,
    new URL("../../assets/img/slider01.jpg", import.meta.url).href,
    new URL("../../assets/img/slider01.jpg", import.meta.url).href
  ]

  const homeRef = ref()

  const { scrollTop, reachBottom } = useElementScroll(homeRef)

  // const isShowSearchForm = ref(false)
  // watch(scrollTop, (newTopValue) => {
  //   console.log(newTopValue)
  //   isShowSearchForm.value = newTopValue > 100
  // })


  const isShowSearchForm = computed(() => {
    return scrollTop.value > 150
  })

  // onActivated(() => {
  //   homeRef.value.scrollTo({
  //     top: scrollTop.value,
  //     behavior: "smooth"
  //   })
  // })

  const isShowBackTop = computed(() => {
    return  scrollTop.value > 300
  })

</script>

<style scoped lang="less">
  .home {
    height: 100vh;
    overflow-y: auto;
  }
</style>