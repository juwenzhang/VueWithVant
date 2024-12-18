<template>
  <div class="navigation">
    <div v-for="(item, index) in items"
         :key="index"
         class="navigation-item"
         :class="{ active: index === activeIndex }"
         @click="activeIndex = index"
         ref="navigationItemRef">
      {{ item?.title }}
    </div>
    <div class="navigation-underline"
         :class="{ active: activeIndex !== -1 }"
         :style="underlineStyle"
         ref="navigationUnderlineRef">
      {{ items[activeIndex].context }}
    </div>
  </div>
</template>

<script setup name="TabPage">
  import { ref, watch, onMounted, defineProps } from "vue"
  const items = defineProps({
    items: Array
  })
  const activeIndex = ref(0)
  // 定义基本的样式
  const underlineStyle = ref({
    transform: "translateX(0)",
  })

  // 获得获取标签的DOM
  const navigationItemRef = ref()
  const navigationUnderlineRef = ref()

  const updateUnderline = () => {
    // 先实现获取每个响应式数据
    const item = navigationItemRef.value[activeIndex.value]
    const underline = navigationUnderlineRef.value

    // 开始设置我们的后面的偏移量
    // 获取标题的宽度，减去下划线的宽度除以2，可以使下划线在标题下居中显示
    let newLeft = Number(item.offsetWidth - underline.offsetWidth) / 2

    if (item && underline) {
      const { offsetLeft } = item
      console.log(offsetLeft)
      underlineStyle.value = {
        transform: `translateX(${offsetLeft}px)`
      }
    }
  }

  watch(activeIndex, () => {
    updateUnderline()
  })

  onMounted(() => {
    updateUnderline()
  })
</script>


<style scoped lang="less">
  .navigation {
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    position: relative;
    padding: 0 1rem;
    height: 3rem;
    font-size: 16px;

    .navigation-item {
      flex: 1;
      cursor: pointer;
    }

    .navigation-item.active {
      font-weight: 700;
      color: #f00
    }

    .navigation-underline {
      width: 3rem;
      height: 0.2rem;
      background-color: #c0e2f6;
      border-radius: 0.1rem;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: all 0.3s ease-in;
    }
    .navigation-underline.active {
      transform: translateY(3px);
    }
  }
</style>