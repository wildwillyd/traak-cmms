import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMap: 1
  },
  mutations: {
    changeMap(state, mapNo) {
      state.currentMap = mapNo;
    }
  },
  getters: {
    getMapState: state => {
      return state.currentMap;
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
