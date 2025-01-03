<script>
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