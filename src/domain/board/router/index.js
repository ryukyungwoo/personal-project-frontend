import Vue from 'vue'
import VueRouter from 'vue-router'

import BoardListPage from '../views/BoardListPage'
import BoardRegisterPage from '../views/BoardRegisterPage'
import BoardReadPage from '../views/BoardReadPage'
import BoardModifyPage from '../views/BoardModifyPage'

Vue.use(VueRouter)

const BoardRoutes = [
    {
        path: '/board-list-page',
        name: 'BoardListPage',
        component: BoardListPage
    },
    {
        path: '/board-register-page',
        name: 'BoardRegisterPage',
        component: BoardRegisterPage
    },
    {
        path: '/board-read-page/:id',
        name: 'BoardReadPage',
        components: { default: BoardReadPage },
        props: { default: true },
    },
    {
        path: '/board-modify-page/:id',
        name: 'BoardModifyPage',
        components: { default: BoardModifyPage },
        props: { default: true },
    },
]

export default BoardRoutes