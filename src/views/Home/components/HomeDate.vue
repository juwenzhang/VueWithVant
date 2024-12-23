<template>
  <div class="home-date">
    <div class="start" @click="dateClick">
      <span class="action">入住时间</span>
      <span class="date">{{ start_time }}</span>
    </div>
    <div class="stay">{{ show_desc }}</div>
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

  const calenderIsShow = ref(false)

  // 开始实现设置我们的日期
  const start_time = ref(formatData(new Date()))
  const end_time = ref(formatData(new Date().getTime()))
  const long_time = ref(0)

  const show_desc = computed(() => {
    return long_time.value === 0 ? "暂住待定": `共${long_time.value}天`
  })

  const dateClick = () => {
    calenderIsShow.value = true
  }

  const onConfirm = (calender_arr) => {
    start_time.value = formatData(calender_arr[0])
    end_time.value = formatData(calender_arr[1])
    long_time.value = getDiffDays(calender_arr[0], calender_arr[1])
    calenderIsShow.value = false
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