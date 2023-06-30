import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import states from './states'
import actions from './actions'

Vue.use(Vuex)

const BoardModule = {
    namespaced: true,
    states,
    actions,
    mutations,
}

export default BoardModule