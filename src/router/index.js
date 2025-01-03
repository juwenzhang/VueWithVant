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
        },
        {
            path: "/city",
            name: "city",
            component: () => import("../views/City/City.vue"),
            meta: {
                hiddenTabBer: true
            }
        },
        {
            path: "/search",
            name: "search",
            component: () => import("../views/search/Search.vue"),
            meta: {
                hiddenTabBer: true
            }
        }
    ]
})

export default router