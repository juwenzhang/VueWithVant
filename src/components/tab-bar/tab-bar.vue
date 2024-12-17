<template>
  <div class="tabBar">
    <div :class="{'tabBar-item': true, active: currentIndex === index}"
         v-for="(item, index) in tabBarData.data"
         @click="toViewPage(item.path, index)"
         :key="index">
      <img :src="getAssetImgURL(item.imgUrl)" alt="">
      <span class="text">{{ item.title }}</span>
    </div>
  </div>
</template>

<script setup name="tab-bar">
  import { useRouter } from "vue-router"
  import {ref} from "vue"
  import tabBarData from "../../assets/data/tabBarData/tabBarData.js"

  // 定义函数实现路由跳转函数，并且修改激活按钮选中
  const currentIndex = ref(0)
  const router = useRouter()  // 获取路由器对象
  const toViewPage = (routePath, index) => {
    router.push(routePath)
    currentIndex.value = index
  }

  // 解决本地图片链接引入出现的问题，就是我们的动态加载图片的方法
  const getAssetImgURL = (imageUrl) => {
    return new URL(imageUrl, import.meta.url).href
  }
</script>

<style scoped lang="less">
  .tabBar {
    position: fixed;
    height: 2.8rem;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    border-top: 1px solid #aaa;
    background-color: #aaaaaaaa;

    .tabBar-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;

      img {
        width: 1.5rem
      }
      .text {
        margin-top: 0.3125rem;
        font-size: 12px;
      }
    }

    .active {
      background-color: var(--primary-color);
      text-shadow: 0.1rem 0.1rem white;
      img {
        transform: scale(1.5, 1.5);
      }
      .text {
        transform: translateY(0.1rem);
        font-weight: bold;

      }
    }
  }
</style>