<template lang="">
    <v-app-bar color="primary" app dark height="64">
        <!-- <v-app-bar-nav-icon @click="navigation_drawer = !navigation_drawer"/> -->
        <v-btn @click="goHome">
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span>STOCK & CHAT</span>
            </v-toolbar-title>
        </v-btn>

        <v-spacer></v-spacer>


        <v-btn v-if="!isLogin" text @click="toLoginAndSignUpPage">
            <span>SignIn / SignUp</span>
            <v-icon right>mdi-login</v-icon>
        </v-btn>
        <v-btn v-if="isLogin" text @click="signOut">
            <span>로그아웃</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>

    </v-app-bar>
</template>

<script>
import { push } from 'sockjs-client/lib/transport-list'
import router from '@/router'
import 'vuetify/dist/vuetify.min.css'
export default {
    data () {
        return {
            navigation_drawer: false,
            isLogin: false,
            // items: [
            //     { title: '클릭해봐!' },
            //     { title: '클릭하지마!' },
            //     { title: '이렇게 나오지' },
            //     { title: '요로코롬' },
            // ]
        }
    },
    methods: {
        // clickToggle () {
        //     alert('토글')
        // },
        // signUp () {
        //     alert('회원 가입')
        // },
        toLoginAndSignUpPage () {
            // this.isLogin = true
            // alert('로그인')
            this.$router.push("sign-in-page").catch(()=>{});
        },
        signOut () {
            // this.isLogin = false
            alert('로그아웃')
        },
        goHome () {
            // alert('고 홈')
            this.$router.push("/").catch(()=>{});
        }
    }
}
</script>
<style lang="">
    
</style>