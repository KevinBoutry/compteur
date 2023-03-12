import { createStore } from 'vuex'

export default createStore({
  state: {
    TotalFromVueX: 5
  },
  getters: {
    DoubleDuTotal(state){
      return state.TotalFromVueX * 2;
    }
  },
  mutations: {
    setTotalFromVueX(state, new_value){
      state.TotalFromVueX = new_value;
    }
  },
  actions: {
  },
  modules: {
  }
})
