<template>
  <div class="page-loading"
       :class="{ showLoading: isShowComponent }">
    <div class="content-control">
      <slot name="icon">
        <i>

        </i>
      </slot>
      <slot name="content">
        加载中...
      </slot>
    </div>
  </div>
</template>

<script setup name="PageLoading">
  const isShowComponent = defineProps({
    isShowComponent: {
      type: Boolean,
      default: false
    }
  })
</script>

<style scoped lang="less">
  .page-loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    .content-control {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .showLoading {
    display: none;
  }
</style>