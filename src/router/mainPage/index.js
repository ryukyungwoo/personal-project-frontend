import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/views/mainPage/MainPage'

Vue.use(VueRouter)

const mainPageRoutes = [
    {
        path: '/',
        name: 'MainPage',
        component: MainPage
    },
]

export default mainPageRoutes