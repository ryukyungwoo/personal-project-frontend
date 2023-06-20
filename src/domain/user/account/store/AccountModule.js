import Vue from 'vue'
import Vuex from 'vuex'

import actions from "@/domain/user/account/store/actions"

Vue.use(Vuex)

const AccountModule = {
    namespaced: true,
    actions,
}

export default AccountModule