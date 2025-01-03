<script setup>
  import {ref} from "vue"
  const isShow = ref(true)
  const eleClick = () => {
    isShow.value = !isShow.value
  }
</script>

<template>
  <div class="animation01">
    <transition>
      <div v-show="isShow">
        hello world
      </div>
    </transition>
    <button @click="eleClick">切换显示</button>
  </div>
</template>

<style scoped lang="less">
  // 这些内置的属性含有我们的离开以及进入的实现

  // 开始进入的时候
  .v-enter-from, .v-leave-to {
    opacity: 0;
  }

  // 进入后的效果
  .v-enter-to, .v-leave-from {
    opacity: 1;
  }

  // 效果实现
  .v-enter-active, .v-leave-active {
    transition: opacity 0.1s ease-in;
  }
</style>