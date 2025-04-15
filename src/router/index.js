import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BoardView from '../views/BoardView.vue'

const routes = [
    {
        path: '/', 
        component: HomeView
    },
    {
        path: '/board',
        component: BoardView
    }
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router