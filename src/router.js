import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/pages/home.vue'
import About from '@/pages/about.vue'

const routes = [
    {
        path: '/',
        component: Home,
        name: 'pageHome'
    },
    {
        path: '/about',
        component: About,
        name: 'pageBlog'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router