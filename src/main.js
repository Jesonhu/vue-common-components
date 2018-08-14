import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import 'normalize.css';
import './plugins/element.js'
import './assets/scss/element/set.scss'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
