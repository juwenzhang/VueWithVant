<script setup>
  import {ref, h} from "vue"
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }

  // 开始书写我们的 render 函数
  const render = () => {
    h("div", { class: "my-class" }, [
      h("h2", { class: "title" }, "我是render 函数"),
      h("p", { class: "text" }, "我是段落"),

      // 动态绑定数据
      h("p", { class: "text" }, counter.value),
      // 动态绑定事件
      h("button", { onClick: increment }, "+1"),
      h("button", { onClick: decrement }, "-1")
    ])
  }
</script>

<template>
  <!-- 然后使用我们编写 render 函数 -->
  <render></render>
</template>