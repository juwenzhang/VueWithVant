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
