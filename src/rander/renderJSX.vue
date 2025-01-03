<!--option api 中的使用方式-->
<script lang="jsx">
  export default {
    data() {
      return {
        counter: 0
      }
    },
    methods: {
      increment() {
        this.counter = this.counter + 1
      },
      decrement() {
        this.counter = this.counter - 1
      }
    },
    render() {
      // 我们需要注意的是我们的 jsx 的书写只能含有一个根标签，不可有多的
      return (
          <div>
            hello jsx and tsx
            <div class="app">
              我是div 元素
            </div>
            <h2>显示的数字为(单大括号，注意,通过这样来实现的我们的动态数据引入):
              { this.counter }
            </h2>
            <button onClick={this.increment}>+1</button>
            <button onClick={this.decrement}>-1</button>
          </div>
      )
    }
  }
</script>


<!--composition api 中的使用-->
<script setup lang="jsx">
  import {ref} from "vue"
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }

  const render = () => (
      <div>
        hello jsx and tsx
        <div class="app">
          我是div 元素
        </div>
        <h2>显示的数字为(单大括号，注意,通过这样来实现的我们的动态数据引入):
          {counter}
        </h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
  )
</script>

<template>
  <render/>
</template>