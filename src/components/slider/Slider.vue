<template>
  <div class="slider">
    <!--图片部分-->
    <div class="img" ref="imgRef">
      <div v-for="(imgUrl, index) in imgList"
           :key="index">
        <img :src="imgUrl" alt="图片加载失败">
      </div>
    </div>
    <!--指示器部分-->
    <div class="iterator">
      <span v-for="(item, index) in imgList"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="iterClick(index)">
      </span>
    </div>
  </div>
</template>

<script setup name="Slider">
import { ref, onMounted, onUnmounted } from "vue"
  // 开始书写我们的轮播图组件
  const { imgList } = defineProps({
    imgList: {
      type: Array,
      default: () => []
    }
  })

  // 设置激活下标是 currentIndex
  const currentIndex = ref(0)
  const imgRef = ref()

  function iterClick(index) {
    currentIndex.value = index
    imgRef.value.style.transform = `translateX(${-index}00%)`
  }

  function autoPlay() {
    currentIndex.value = (currentIndex.value + 1) % imgList.length;
    imgRef.value.style.transform = `translateX(${-currentIndex.value * 100}%)`;
  }
  // 启动自动播放
  let intervalId;
  onMounted(() => {
    intervalId = setInterval(autoPlay, 3000)
  });

  // 停止自动播放
  onUnmounted(() => {
    clearInterval(intervalId)
  })
</script>

<style scoped lang="less">
  // 开始书写 CSS 样式部分
  .slider {
    position: relative;
    width: 300px;
    margin: 0 auto;
    overflow: hidden;

    .img {
      display: flex;
      width: 100%;
      transition: 1s;
      div {
        flex-shrink: 0;
        img {
          width: 300px;
        }
      }
    }

    .iterator {
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: center;

      span {
        margin: 0 3px;
        width: 5px; // 指示器大小
        height: 5px;
        border: 1px solid #858383;
        padding: 1px;
        box-sizing: border-box;
        border-radius: 2.5px;
        cursor: pointer;
      }

      .active {
        background-color: white;
      }
    }
  }
</style>