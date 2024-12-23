<template>
  <div class="city-group">
    <!-- 开始使用我们的组件库来完成我们的业务逻辑 -->
    <van-index-bar> <!--:index-list="indexList" 开发的时候根据实际情况来拼接我们的索引展示，后端返回分组数据-->
      <van-index-anchor index="热门城市"></van-index-anchor>
      <div class="city">
        <template v-for="(city, index) in cities" :key="index">
          <div class="title" @click="cityClick(city)">
            {{ city }}
          </div>
        </template>
      </div>

<!--      <template v-for="(item, index) in allCities[activeName]" :key="index">-->
<!--        <van-index-anchor :index="item?.group"></van-index-anchor>-->
<!--        <template v-for="(city, index) in item?.cities" :key="index">-->
<!--          <van-cell :title="city?.name" @click="cityClick(city)"/>-->
<!--        </template>-->
<!--      </template>-->
    </van-index-bar>

<!--    <div v-for="(item, index) in allCities[activeName]" :key="index">-->
<!--      <div class="group-item">-->
<!--        <div class="title">{{ item?.group }}</div>-->
<!--        <div class="list">-->
<!--          <template v-for="(item, index) in item?.cities"-->
<!--                    :key="index">-->
<!--            <div class="city">{{ item?.name }}</div>-->
<!--          </template>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script setup name="CityGroup">
  import { useRouter } from "vue-router"
  import useCityStore from "../../../stores/modules/useCityStore.js"
  import { computed } from "vue"

  // 开始实现接收我们的参数
  const props = defineProps({
    allCities: {
      type: Object || Number,
      default: () => ({  })
    },

    activeName: {
      type: String || Number,
      default: "国内·港澳台"
    }
  })

  // 计算属性部分
  const cities = ["重庆", "北京", "天津", "上海", "四川"]
  const indexList = computed(() => {
    // const list = props.allCities[props.activeName]?.cities.map(item => item.group)
    // if (list) {
    //   return list.unshift("#")
    // }
    return [].unshift("#")
  })

  // 开始实现我们的回显效果
  const router = useRouter()
  const cityStore = useCityStore()
  const cityClick = (cityName) => {
    // 为了其他的地方可以使用得到我们的数据变化，我们就需要做的是
    // 进行数据传递： 事件总线实现数据共享，或者说 store 实现数据共享
    cityStore.currentCity = cityName
    router.back()
  }
</script>

<style scoped lang="less">
  // 开始我们的 flex 布局
  .city {
    display: flex;
    justify-content: flex-start; /* 修改为flex-start*/
    align-content: center;
    flex-wrap: wrap;
    padding: 10px 25px 10px 10px;

    .title {
      width: 70px;
      height: 28px;
      background-color: #fcc66655;
      border-radius: 14px;
      font-size: 12px;
      display: flex;
      align-items: center; /* 垂直居中内容 */
      justify-content: center; /* 水平居中内容 */
      margin: 5px 15px 5px 0; /* 调整间距 */
    }
  }
</style>