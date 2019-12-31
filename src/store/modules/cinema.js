
const state = {
  area: []
}

const mutations = {
  updateAreaData (state, { area }) {
    state.area = area
  }
}

const actions = {
  // toggleSideBar({ commit }) {
  //   commit('TOGGLE_SIDEBAR')
  // },
  // closeSideBar({ commit }, { withoutAnimation }) {
  //   commit('CLOSE_SIDEBAR', withoutAnimation)
  // },
  // toggleDevice({ commit }, device) {
  //   commit('TOGGLE_DEVICE', device)
  // },
  // setSize({ commit }, size) {
  //   commit('SET_SIZE', size)
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
