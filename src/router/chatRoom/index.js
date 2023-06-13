import Vue from 'vue'
import VueRouter from 'vue-router'

import ChatRoomPage from '@/views/chatRoom/ChatRoomPage'

Vue.use(VueRouter)

const chatRoomRoutes = [
    {
        path: '/chat-room',
        name: 'ChatRoomPage',
        component: ChatRoomPage
    },
]

export default chatRoomRoutes