import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logined: true,
    editNavItems: [{
      name: '全部课程',
      to: 'sets-view',
      params: {}
    }]
  },
  mutations: {
    changeLoginedState (state, logined) {
      state.logined = logined
    }
  }
})
