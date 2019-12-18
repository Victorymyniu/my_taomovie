// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import Mint from 'mint-ui'
import animated from 'animate.css' // npm install animate.css --save安装，再引入
import 'mint-ui/lib/style.css'
import './assets/css/common.css'
import LazyLoad from './assets/js/lazyload'

Vue.use(LazyLoad)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(animated)
Vue.use(Mint)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
