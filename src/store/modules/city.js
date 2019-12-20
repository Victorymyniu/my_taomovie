import { UPDATECITY } from './mutation-type'
import Vue from 'vue'
import axios from 'axios'
const state = {
  name: '北京',
  show: false,
  rN: 'bj',
  data: []
}

const getters = {
  hotLists: state => state.data,
	cityName: state => state.name
}

const mutations = {
  [UPDATECITY] (state, { city }) {
  	if (city.name) {
  		state.name = city.name
  		state.data = city.data 
      state.rN = city.rN
    }
    // console.log(state.data)
  	state.show = false
  },
  showCityList (state) {
  	state.show = true
  }
}

const actions = {
  updateCityAsync ({ commit, state }, {city}) {
    if (!city.name) {
      city.name = state.name
      city.rN = state.rN
    }
    return axios.get(`/movie/hot/?city=${city.rN}`).then((response) => {
      let data = response.data
      let lists = data.data.data.returnValue
      //模拟索引数据的id号
      lists.forEach((item, index) => {
        item.mID = index  
      })
      city.data  = lists
  		commit(UPDATECITY, { city })
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

