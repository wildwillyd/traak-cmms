import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMap: 1,
    collapsed: false
  },

  mutations: {
    changeMap(state, mapNo) {
      state.currentMap = mapNo;
    },
    /**
     * Controlled in Sidebar.vue
     * Changes the state of the sidebar being collapsed for the application
     */
    changeCollapsed(state, bool) {
      state.collapsed = bool;
      console.log("The current collpased is" + state.collapsed);
    }
  },

  getters: {
    getMapState: state => {
      return state.currentMap;
    },
    /**
     * Call this function if you need to get if the sidebar is collapsed (AKA: on a mobile device)
     */
    getCollapsed(state){
      console.log("getter called");
      return state.collapsed;
    }
  },

  actions: {

    
  },
  modules: {
  }
})
