import { createRouter, createWebHashHistory } from "vue-router"


const router = createRouter({
    history: createWebHashHistory(),  // hash 模式的路由
    routes: [  // 配置路由映射关系
        {
            path: "/",
            name: "root",
            redirect: "/home"
        },
        {
            path: "/home",
            name: "home",
            component: () => import("../views/Home/Home.vue")
        },
        {
            path: "/favor",
            name: "favor",
            component: () => import("../views/Favor/Favor.vue")
        },
        {
            path: "/order",
            name: "order",
            component: () => import("../views/Order/Order.vue")
        },
        {
            path: "/message",
            name: "message",
            component: () => import("../views/Message/Message.vue")
        }
    ]
})

export default router