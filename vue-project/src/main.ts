import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import HomePage from "@/pages/HomePage.vue"
import AboutPage from "@/pages/AboutPage.vue"
import NewPage from "@/pages/NewpPage.vue"

import NewsDetail1 from "@/pages/NewsDetail1.vue"
import NewsDetail2 from "@/pages/NewsDetail2.vue"

//1.配置路由规则
const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutPage },
    {
        path: "/new", component: NewPage, name: 'new',
        children: [
            {
                path: "1",
                component: NewsDetail1,

            },
            {
                name: "news2",
                path: "2/:id/:title/:content", //new/2/1/标题/内容
                component: NewsDetail2,
            }
        ]
    }
]


//2.创建路由器

const router = createRouter({
    history: createWebHistory(),//路由工作模式
    routes
})


//3.加载路由器
const app = createApp(App)
app.use(router)

import { createPinia } from 'pinia'
const pinia = createPinia()
app.use(pinia)

import ELementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const ElementPlus = ELementPlus
app.use(ElementPlus)

app.mount('#app')
