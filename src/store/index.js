import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentMap: 1,
    collapsed: false,
    equipmentLoading: '',
    equipmentName: "name one"
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
    },
    equipmentLoadingState(state){
      state.equipmentLoading = 'loading';
    },
    changeSelectedEquipment(state, payload){
      state.equipmentName = payload.name;
      state.equipmentLoading = '';
    }
  },

  actions: {
    selectEquipment(context, payload){
      context.commit("equipmentLoadingState");
      //Simulate API call
      setTimeout(() => {
        context.commit("changeSelectedEquipment", payload);
      }, 1000);
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
      //console.log("getter called");
      return state.collapsed;
    },

    getEquipmentName(state){
      return state.equipmentName;
    }
  },

  modules: {
  }
})
