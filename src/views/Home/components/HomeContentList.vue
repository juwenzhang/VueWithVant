<template>
  <div class="contentList">
    <div class="title">
      热门精选
    </div>
<!--    <button @click="getMoreData">获取更多数据</button>-->
<!--  注意自己的分页数据翻页问题的一些细节
      可能是重新渲染数据，这个时候在 pinia 管理工具中直接 = 即可
      但是如果是添加继续加载数据，在 pinia 中直接 push 即可
  -->
  </div>
</template>

<script name="HomeContentList" setup>
  import { watch } from "vue"
  import useHomeStore from "../../../stores/modules/useHomeStore.js";

  const homeStore = useHomeStore()

  const reachBottom = defineProps({
    reachBottom: {
      type: Boolean,
      default: false
    }
  })

  watch(reachBottom, (newValue) => {
    if(newValue) {
      console.log("达到底部")
      homeStore.fetchHomeListData().then(() => {
        reachBottom.value = false
      })
    }
  })
</script>

<style scoped lang="less">
  .contentList {
    border-bottom: 1px solid #f6f4f4;
    .title {
      font-size: 20px;
      font-weight: 700;
      padding: 10px 10px 0 10px;
      box-sizing: border-box;
    }
  }
</style>