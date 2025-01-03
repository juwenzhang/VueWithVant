# vue 高阶语法

## vue 自定义指令
* 在我们的学习 vue 之前，接触到了很多的关于内置的一些指令，比如说含有:
  * v-show | v-if | v-for | v-bind | v-on 等等类似的指令
  * 但是实际上的话我们的 vue 中我们是可以实现的是自定义一些指令的
  * 通过我们的自定义指令实现我们的操作原生的 DOM ，实现底层开发
* 自定义指令的类型含有
  * **自定义局部指令**
    * 就是在我们的组件中通过 directives 选项来实现的，
    * 这个时候我们的自定义指令只能在该组件中进行局部使用
  * **自定义全局指令**
    * 就是在我们的 app 中通过 directive 方法来定义的指令
    * 这个时候我们的该指令可以实现的是我们的在任意的组件中可以被使用
* 开始实现自定义我们的 **v-focus** 自动获取焦点指令

```javascript
<!-- 开始实现局部的自定义指令 -->
// option api 的书写
export default {
    directives: {
      focus: {
        // 生命周期函数
        mounted(el) {  // 表示的是我们的自定义指令运用的元素被挂载后的生命周期函数
          el?.focus()
        }
      }
    },
  
    setup(props, { emit }) {
      // 在组合式 api 中的自定义指令的话需要进行的是直接命名我们的指令即可
      // 指令命名格式 vFocus v后面的字母必须大写
      const vFocus = {
        mounted(el) {
          el?.focus()
        }
      }
      return {
        vFocus
      }
    }
}
```
```javascript
// 开始实现全局的自定义我们的指令，还是在我们的 app.vue 中进行的操作
// 内部传入的是我们的对象，所以说在开发中我们是可以实现的是在目录结构中单独的分出来一个目录 directive 存放一些指令的
app.directive("focus", {
  mounted(el) {
    el?.focus()
  }
})
```

```javascript
export default function directiveFocus(app) {
    app.directive("focus", {
        mounted(el) {
            el?.focus()
        }
    })
}
```

### 自定义指令的生命周期函数
* **created** 自定义指令绑定使用的元素被创建后执行的代码逻辑
* **beforeMount** 就是表示的是即将进行挂载我们的元素后的操作
* **mounted** 绑定的元素被挂载后的触发的代码逻辑
* **beforeUpdate** 
* **updated**
* **beforeUnMounted**
* **unmounted**

### 指令的参数和修饰符
* **v-model:title.lazy="message"**
  * title 就是参数
  * .lazy 就是修饰符
  * message 就是表示的是值
  * 这些也是可以直接进行自定义的呐
* 我们的自定义指令的时候，使用的生命周期函数
  * 含有两个参数的 
    * 第一个参数就是表示的是**绑定自定义指令的元素**
    * 第二个参数就是**自定义指令后面参数或者修饰符**
```javascript
import dayjs from "dayjs";

export default function directiveFormatTime(app) {
    app.directive("format-time", {
        mounted(el, binding) {
            let timeContent = el.textContent
            timeContent = Number(timeContent)
            if (timeContent.length === 10) timeContent = timeContent * 1000

            // 开始实现获取我们的 value
            let value = binding.value
            if (!value) {
                value = 'YYYY-MM-DD'
            }

            // 开始实现回显
            el.textContent = dayjs(timeContent).format(value)
        }
    })
}
```

### 两个内置组件的使用
* **telephone**
  * 保证的是不同的组件出现在我们的不同的div 中的组件使用
* **suspense**
  * 内置组件，提供了两个插槽
    * default
    * fallback
  * 使用的地方是我们的异步组件中的
  * **defineAsyncComponent** 实现我们的导入异步组件

### vue 安装插件的本质
* 首先注意的是我们的设置全局的设置的时候我们都是在 main.js/ts 中进行配置的
* 使用的语法就是我们的 app.use() 来实现的引入我们的全局配置
* 但是我们的 app.use() 的本质是什么呐？？？
  * use() 函数中我们可以传递的含有两个部分
  * 一个是我们的**对象**，一个是我们的**函数**的注册
  * 如果是我们的对象的话，内部实际上含有我们的 install 属性的

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import "./normalize..css"
import "./assets/css/index.css"
import router from "./router/index.js"
import pinia from "./stores/index.js"
import useDirective from "./directives/index.js";

const app = createApp(App)  // 创建根组件

app.use(router)  // 使用路由
// app.use(pinia)  // 使用状态管理库

app.use({
    install: (app) => {
        app.use(pinia)
    }
})

useDirective(app)

app.mount('#app')
```

### 认识 h 函数
* h 函数就是实现的是我们的在一些特殊的场景中我们的我们需要使用我们的另外一种函数形式
  * 就不是使用我们的 vue 提供的模板书写方式了
* 这个时候我们就需要实现的是使用我们的 h 函数就是我们的渲染函数
  * 这个时候还会涉及到我们的虚拟节点 vnode
  * 这种语法的书写就需要我们的 JS 的底层掌握了
  * 无线接近于我们的 react 的书写了
  * 在这个过程中我们会使用到的函数就是我们的 createVNode 函数来实现的了
  * 这个函数就是我们的 h 函数 **h === createVNode**
* 为什么使用我们的这样书写方式呐？？
  * 是因为这样后我们的 vue 代码的书写可以实现的是不按照模板进行书写了
  * 我们可以实现的是使用纯 JS 实现书写更加自由更加灵活的代码了
* h 函数需要含有三个参数
  * **标签名 tagName** string | object | function
  * **属性名 className**  object
  * **内容名 content** Array
* 最终的就是 vue 模板代码的底层原生的书写了，很好用，很自由的书写方式

#### vue2 选项式的书写方法
* 就是通过的是我们的 render 选项实现的我们的书写
```vue
<script>
import {h} from "vue"  
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
    // 这里的 class 等价于 className
    return h("div", { class: "my-class" }, [
       h("h2", { class: "title" }, "我是render 函数"),
       h("p", { class: "text" }, "我是段落"),

       // 动态绑定数据
       h("p", { class: "text" }, this.counter),
       // 动态绑定事件
       h("button", { onClick: this.increment }, "+1"),
       h("button", { onClick: this.decrement }, "-1")
    ])
  }
}
</script>

<style scoped lang="less"></style>
```

#### vue3 中进行使用
```vue
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
  <render />
</template>
```

#### 书写 jsx 或者 tsx
* 这种方式就是实现的是我们的替代 h 函数的书写方式的
  * 十分的灵活好用，十分自由的书写
* jsx 的babel 配置来实现支持我们的 jsx 语法
  * babel 实现的是我们的转化我们的 JS 代码，实现最终的浏览器可以运行
  * webpack 的配置
    * `npm install @vue/babel-plugin-jsx -D`
    * `babel.config.js`
  * vite 的配置
    * `npm install @vitejs/plugin-vue-jsx -D`
    * `vite.config.js` 中进行配置即可
  * jsx 的使用的话在我们的 react 使用的比较多

```vue
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
```