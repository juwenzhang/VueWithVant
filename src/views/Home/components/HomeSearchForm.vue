<template>
  <div class="searchForm">
    <div class="search">
      <div class="search-time">
        <div class="start-time">
          <span class="name">住</span>
          <span class="data">{{ showStartTime }}</span>
        </div>
        <div class="end-time">
          <span class="name">离</span>
          <span class="data">{{ showEndTime }}</span>
        </div>
      </div>
      <div class="search-content">
        <div class="search-keyword">关键字/位置/名宿</div>
      </div>
      <div class="search-icon">
        <slot>
          <i class="icon">
            icon
          </i>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup name="HomeSearchForm">
  import { computed } from "vue"
  import useCityStore from "../../../stores/modules/useCityStore.js"
  const cityStore = useCityStore()

  const showStartTime = computed(() => {
    return cityStore.start_time !== "" ? cityStore.start_time : "时间未选择"
  })

  const showEndTime = computed(() => {
    return cityStore.end_time !== "" ? cityStore.end_time : "时间未选择"
  })
</script>

<style scoped lang="less">
  .searchForm {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40px;
    padding: 16px 16px 10px;
    background: #efeee8;
    z-index: 9999;

    .search {
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 30px;
      line-height: 30px;
    }
  }
</style>