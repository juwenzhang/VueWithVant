<template>
  <div class="scrollToTop" @click="toTop">
    <div class="content">
      返回顶部
    </div>
  </div>
</template>

<script setup name="scrollToTop">
  const { homeRef } = defineProps({
    homeRef: {
      type: Object
    }
  })

  const toTop = () => {
    homeRef.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
</script>

<style scoped lang="less">
  .scrollToTop {
    position: absolute;
    bottom: 80px;
    right: 10px;

    .content {
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border-radius: 25px;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      font-size: 12px;
    }
  }
</style>