<template>
  <v-app-bar color="grey lighten-4">
    <v-btn @click="goHome" color="grey">
      <v-toolbar-title class="text-uppercase">
        <span>stock & chat</span>
      </v-toolbar-title>
    </v-btn>
    <v-spacer></v-spacer>

    <v-btn v-if="!isLogin" text @click="toLoginAndSignUpPage">
      <span>SignIn / SignUp</span>
      <v-icon right>mdi-login</v-icon>
    </v-btn>
    <v-btn v-else text @click.stop="showMenu = !showMenu">
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
    <v-menu open-on-hover v-model="showMenu" :close-on-content-click="false" :offset-y="true">
      <v-list>
        <v-list-item @click="goToMyPage">
          <v-icon left>mdi-cog</v-icon>
          <span>My Page</span>
        </v-list-item>
        <v-list-item @click="signOut">
          <v-icon left>mdi-exit-to-app</v-icon>
          <span>로그아웃</span>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
import 'vuetify/dist/vuetify.min.css';
import { mapActions } from 'vuex';

const accountModule = 'accountModule';

export default {
  data() {
    return {
      isLogin: false,
      showMenu: false,
    };
  },
  methods: {
    ...mapActions(accountModule, ['requestLogOutAccountToSpring', 'requestMyPageToSpring']),
    isLoggedIn() {
      if (localStorage.getItem('isLogin') === 'true') {
        this.isLogin = true;
      } else {
        this.isLogin = false;
      }
    },
    toLoginAndSignUpPage() {
      this.$router.push('/sign-in-page').catch(() => {});
    },
    async signOut() {
      await this.requestLogOutAccountToSpring();
      localStorage.removeItem('isLogin');
      location.reload();
    },
    goHome() {
      this.$router.push('/').catch(() => {});
    },
    async goToMyPage() {
      const accont = await this.requestMyPageToSpring();
      this.$router.push(`/account/my-page/${accont.id}`)
      this.showMenu = false;
    },
  },
  computed: {},
  mounted() {
    this.isLoggedIn();
  },
};
</script>
<style></style>
