import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/', 
        component: HomeView
    },
    // {
    //     path: '/board',
    //     component: BoardView
    // }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router