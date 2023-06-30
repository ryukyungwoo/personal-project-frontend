import Vue from 'vue'
import VueRouter from 'vue-router'

import BoardListPage from '../views/BoardListPage'

Vue.use(VueRouter)

const BoardRoutes = [
    {
        path: '/board-list-page',
        name: 'boardListPage',
        component: BoardListPage
    },
    
]

export default BoardRoutes