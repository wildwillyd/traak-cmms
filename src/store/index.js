import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    collapsed: false
  },
  mutations: {
    changeCollapsed(state){
      state.collapsed = !state.collapsed;
      console.log("mutator called");
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCollapsed(state){
      console.log("getter called");
      return state.collapsed;

    }
  }
})
