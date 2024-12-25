<template>
  <div class="home-search-btn">
    <div class="btn" @click.self="btnClick">
      开始搜索
    </div>
  </div>
</template>

<script setup name="HomeSearchBtn">
  import { useRouter } from "vue-router"
  import useCityStore from "../../../stores/modules/useCityStore.js"

  const router = useRouter()  // 获取路由
  const cityStore = useCityStore()

  const btnClick = () => {
    router.push({
      path: "/search",
      query: {
        currentCity: cityStore.currentCity === "" ? "用户未进行选择" : cityStore.currentCity,
        start_time: cityStore.start_time === "" ? "用户未进行选择" : cityStore.start_time,
        end_time: cityStore.end_time === "" ? "用户未进行选择" : cityStore.end_time,
        long_time: cityStore.long_time === 0 ? "用户未进行选择" : cityStore.long_time
      }
    })
  }
</script>

<style scoped lang="less">
  .home-search-btn {
    .btn {
      height: 38px;
      max-height: 50px;
      font-size: 18px;
      line-height: 38px;
      text-align: center;
      border-radius: 20px;
      color: #fff;
      background-image: var(--linear-btn-color-home);
      margin: 5px 10px;
    }
  }
</style>