import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

import HomePage from "@/pages/HomePage.vue"
import AboutPage from "@/pages/AboutPage.vue"
import NewPage from "@/pages/NewpPage.vue"

//1.配置路由规则
const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutPage },
    { path: "/new", component: NewPage, name: 'new' }
]


//2.创建路由器

const router = createRouter({
    history: createWebHashHistory(),//路由工作模式
    routes
})


//3.加载路由器
const app = createApp(App)
app.use(router)

import { createPinia } from 'pinia'


const pinia = createPinia()

app.use(pinia)

app.mount('#app')
