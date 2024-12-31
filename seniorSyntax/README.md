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