import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import chartPageRoutes from './chart'
import mainPageRoutes from './mainPage'
import chatRoomRoutes from './chatRoom'

Vue.use(VueRouter)

const routes = [
  ...chartPageRoutes,
  ...mainPageRoutes,
  ...chatRoomRoutes,
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
