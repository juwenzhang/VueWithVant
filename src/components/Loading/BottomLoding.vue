<template>
  <div class="bottom-loading"
       :class="{ showLoading: isShowComponent }">
    <div class="content-control">
      <slot name="icon">
        <i>

        </i>
      </slot>
      <slot name="content">
        数据加载中...
      </slot>
    </div>
  </div>
</template>

<script setup name="BottomLoading">
  const isShowComponent = defineProps({
    isShowComponent: {
      type: Boolean,
      default: true
    }
  })
</script>

<style scoped lang="less">
  .bottom-loading{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
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