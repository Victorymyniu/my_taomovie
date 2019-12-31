import Vue from 'vue'
import Vuex from 'vuex'
import city from "./modules/city"
import loading from "./modules/loading"
import coming from "./modules/coming"
import cinema from "./modules/cinema"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    city,
    loading,
    coming,
    cinema
  }
});