import { createRouter, createWebHistory } from 'vue-router'

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
    history: createWebHistory(),
    routes
})