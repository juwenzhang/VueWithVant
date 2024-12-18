<template>
  <div class="location">
    <div class="city" @click="cityClick">北京(现居重庆)</div>
    <div class="position" @click="positionClick">
      <div class="text">我的位置</div>
      <img src="../../../assets/img/img.png" alt="~">
    </div>
  </div>
</template>

<script setup name="HomeLocation">
  import { useRouter } from "vue-router"
  // 获取具体的城市信息
  const router = useRouter()
  const cityClick = () => {
    router.push("/city")
  }

  const positionClick = () => {
    // 开始实现获取我们的动态的位置，最终获取得到的是我们的经纬度
    // 然后把经纬度实现传递给后端，然后后端返回位置信息
    navigator.geolocation.getCurrentPosition(position => {
      console.log("获取位置成功", position)
    }, err => {
      console.log("获取位置失败", err)
    }, {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    })
  }
</script>

<style scoped lang="less">
  .location {
    display: flex;
    justify-items: center;
    align-items: center;
    height: 2rem;
    border-bottom: 1px solid #dedddd;
    padding: 0 1rem;
    font-weight: bold;

    .city {
      flex: 1
    }

    .position {
      width: 5.5rem;
      display: flex;
      justify-content: space-evenly;

      .text, .img{
        flex: 1
      }
      img {
        width: 15%
      }
    }
  }
</style>