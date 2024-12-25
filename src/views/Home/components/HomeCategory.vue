<template>
  <div class="category">
    <template v-for="(item, index) in categories" :key="index">
      <div class="item">
        <img :src="item?.pictureUrl" alt="">
        <div>{{ item?.title }}</div>
      </div>
    </template>
  </div>
</template>

<script name="HomeCategory" setup>
  import { storeToRefs } from "pinia"
  import useHomeStore from "../../../stores/modules/useHomeStore.js"

  const homeStore = useHomeStore()
  // 开始实现结构
  const { categories } = storeToRefs(homeStore)
</script>

<style scoped lang="less">

  .category {
    display: flex;
    flex-shrink: 0;
    overflow-x: auto;
    height: auto;

    &::-webkit-scrollbar {  // less 语法中的 & 获取的是自己当前元素
      display: none;
    }

    .item {
      width: 70px;
      height: 32px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 32px;
        height: 32px;
      }
    }
  }

</style>