import Vue from 'vue'
import VueRouter from 'vue-router'

import BoardListPage from '../views/BoardListPage'
import BoardRegisterPage from '../views/BoardRegisterPage'
import BoardReadPage from '../views/BoardReadPage'

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
        path: '/board-read-page/:boardId',
        name: 'BoardReadPage',
        components: { default: BoardReadPage },
        props: { default: true },
    },
]

export default BoardRoutes