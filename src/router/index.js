// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BoardList from '@/views/BoardList.vue'
import BoardSave from '@/views/BoardSave.vue'
import BoardDetail from '@/views/BoardDetail.vue'
import BoardUpdate from '@/views/BoardUpdate.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: BoardList
    },
    {
        path: '/save',
        component: BoardSave
    },
    {
        path: '/board/:id',
        component: BoardDetail,
        props: true
    },
    {
        path: '/update/:id',
        component: BoardUpdate,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router