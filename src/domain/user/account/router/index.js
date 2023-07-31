import Vue from 'vue'
import VueRouter from 'vue-router'

import SignInPage from '@/domain/user/account/views/SignInPage'
import SignUpPage from '@/domain/user/account/views/SignUpPage'
import MyProfilePage from '@/domain/user/account/views/MyProfilePage'

Vue.use(VueRouter)

const AccountRoutes = [
    {
        path: '/sign-in-page',
        name: 'signInPage',
        component: SignInPage
    },
    {
        path: '/sign-up-page',
        name: 'signUpPage',
        component: SignUpPage
    },
    {
        path: '/account/get-profile/:id',
        name: 'MyProfilePage',
        components: { default: MyProfilePage },
        props: { default: true },
    },
]

export default AccountRoutes