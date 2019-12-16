import { UPDATECITY } from './mutation-type'
const state = {
  name: '北京',
  show: false
}

const getters = {
  count: state => {
    return state.count;
  }
}

const mutations = {
  [UPDATECITY] (state, { city }) {
  	// if (city.name) {
  	// 	state.name = city.name
  	// 	state.data = city.data 
    //   state.rN = city.rN
  	// }
  	state.show = false
  },
  showCityList (state) {
  	state.show = true
  },
  closeCityList (state) {
  	state.show = false
  },
  selectedCity (state, name) {
  	state.name = name
  }
}

const actions = {
  incrementCountAsync({ commit }) {
    setTimeout(() => {
      commit('incrementCount');
    }, 2000);
  },
  decrementCountAsync({ commit }, payload) {
    setTimeout(() => {
      commit('decrementCount', payload);
    }, 1000);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

