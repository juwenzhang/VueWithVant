<template>
  <div class="search">
    欢迎来到搜索界面
  </div>
  <button @click.self="toHome">返回首页</button>
</template>

<script setup name="search">
  import {useRouter, useRoute} from "vue-router"
  const router = useRouter()
  const route = useRoute()
  const toHome = () => {
    router.back()
  }
  const { currentCity, start_time, end_time, long_time } = route.query  // 实现获取我们的传递的数据
  // console.log(currentCity, start_time, end_time, long_time)
</script>

<style scoped lang="less">

</style>