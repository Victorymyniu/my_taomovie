import Vue from 'vue'
import Vuex from 'vuex'
import city from "./modules/city"
import loading from "./modules/loading"

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    loading
  }
});