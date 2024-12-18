<template>
  <div class="city">
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
          <van-tab :title="value?.title"></van-tab>
        </template>
      </van-tabs>
    </template>

  </div>
</template>

<script setup name="city">
  import { useRouter } from "vue-router"
  import { ref } from "vue"
  import useCityStore from "../../stores/modules/useCityStore.js"

  const router = useRouter()
  const searchValue = ref()
  // 返回首页功能
  const cancel = () => {
    router.push("/home")
  }

  const activeName = ref(0)

  // 开始发送网络请求
  const cityStore = useCityStore()
  cityStore.fetchAllCitiesDataAction()
  const { allCities } = cityStore

</script>

<style scoped lang="less">
  .city {
    --van-tabs-line-height: 30px;
  }
</style>