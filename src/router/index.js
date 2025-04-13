import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConfigKanbanView from '../views/ConfigKanbanView.vue'
import BoardView from '../views/BoardView.vue'

const routes = [
    {
        path: '/', 
        component: HomeView
    },
    {
        path: '/configure', 
        component: ConfigKanbanView
    },
    {
        path: '/board',
        component: BoardView
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router