<template>
  <div class="home-date">
    <div class="start" @click="dateClick">
      <span class="action">入住时间</span>
      <span class="date">{{ start_time }}</span>
    </div>
    <div class="stay">{{ show_info }}</div>
    <div class="end" @click="dateClick">
      <span class="action">离开时间</span>
      <span class="date">{{ end_time }}</span>
    </div>
  </div>

  <div class="calender">
    <van-calendar
        v-model:show="calenderIsShow"
        type="range"
        color="#ff9854"
        @confirm="onConfirm" />
  </div>
</template>

<script setup name="HomeDate">
  import { ref, computed } from "vue"
  import { formatData, getDiffDays } from "../../../utils/formate_data.js"
  import useCityStore from "../../../stores/modules/useCityStore.js"


  const calenderIsShow = ref(false)
  const cityStore = useCityStore()


  let start_time = cityStore.start_time === "" ? formatData(new Date()) : cityStore.start_time
  let end_time = cityStore.end_time === "" ? formatData(new Date()) : cityStore.end_time


  const long_time = ref()
  long_time.value = cityStore.long_time
  const show_info = computed(() => {
    return cityStore.long_time === 0 ? "暂定" : `持续${long_time.value}天`
  })


  const dateClick = () => {
    calenderIsShow.value = true
  }


  const onConfirm = (calender_arr) => {
    start_time = formatData(calender_arr[0])
    end_time = formatData(calender_arr[1])
    long_time.value = getDiffDays(calender_arr[0], calender_arr[1])
    cityStore.long_time = long_time.value
    calenderIsShow.value = false

    cityStore.start_time = start_time
    cityStore.end_time = end_time
  }
</script>

<style scoped lang="less">
  // 开始样式的设计
  .home-date {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 0 5px;
    text-align: center;
    background: #f1f0f0;

    .start, .end {
      display: flex;
      flex-direction: column;
      span {
        padding: 3px 0;
      }

      span.action {
        font-size: 12px;
        color: #7e7b7b;
      }

      span.date {
        font-weight: 600;
      }
    }

    .stay {
      margin-top: 10px;
      font-size: 12px;
      color: #7e7b7b;
    }
  }
</style>