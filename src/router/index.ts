import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'index',
        redirect: '/draggable',
        component: () => import('/@/views/index.vue'),
        children: [
            {
                path: 'draggable',
                name: 'Draggable',
                component: () => import('/@/views/draggable/index.vue')
            },
            {
                path: 'echarts',
                name: 'Echarts',
                component: () => import('/@/views/echarts/index.vue')
            }
        ]
    }
]

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes
})

export default router