import Vue from 'vue'
import VueRouter from 'vue-router'

import ChartPage from '@/views/chart/ChartPage'

Vue.use(VueRouter)

const chartPageRoutes = [
    {
        path: '/chart-page',
        name: 'ChartPage',
        component: ChartPage
    },
]

export default chartPageRoutes