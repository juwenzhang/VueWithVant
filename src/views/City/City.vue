<template>
  <div class="city">
    <div class="top">
      <van-search
          v-model="searchValue"
          placeholder="请选择你所在的城市~~~"
          input-align="center"
          shape="round"
          show-action
          @cancel="cancel"
          background="#c0e2f6"
      />

      <template v-if="typeof allCities !== 'object'">
        <van-tabs v-model:active="activeName"
                  color="#ff9854"
                  line-height="2px" sticky
                  title-active-color="red">
          <van-tab title="国内·港澳台" name="a"></van-tab>
          <van-tab title="海外" name="b"></van-tab>
        </van-tabs>
      </template>
      <template v-else>
        <van-tabs v-model:active="activeName"
                  color="#ff9854"
                  line-height="2px" sticky
                  title-active-color="red">
          <template v-for="(value, key, index) in allCities"
                    :key="`${key}${index}`">
            <van-tab :title="value?.title" :name="key"></van-tab>
          </template>
        </van-tabs>
      </template>
    </div>

    <div class="context">
      <!-- 开始使用组件，并且传递数据过去 -->
      <city-group :allCities="allCities"
                  :activeName="activeName">
      </city-group>
    </div>
  </div>
</template>

<script setup name="city">
  import { useRouter } from "vue-router"
  import {storeToRefs} from "pinia"
  import { ref } from "vue"
  import useCityStore from "../../stores/modules/useCityStore.js"
  import CityGroup from "./components/CityGroup.vue"

  const router = useRouter()
  const searchValue = ref("")
  // 返回首页功能
  const cancel = () => {
    router.push("/home")
  }

  const activeName = ref("")

  // 开始发送网络请求
  const cityStore = useCityStore()
  cityStore.fetchAllCitiesDataAction()
  const { allCities } = storeToRefs(cityStore)
  // console.log(allCities)

  // 定义变量进行标记我们的选择
  // const currentCityGroup = computed(() => allCities.value[activeName.value])
</script>

<style scoped lang="less">
  .city {
    --van-tabs-line-height: 30px;
    //.top {
    //  position: fixed;
    //  top: 0;
    //  left: 0;
    //  right: 0;
    //}
    //
    //.context {
    //
    //}
    // 开始局部滚动
    。top {
      position: relative;
      z-index: 999
    }
    .context {
      height: calc(100vh - 98px);
      overflow-y: auto
    }
  }
</style>