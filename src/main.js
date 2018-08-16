import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import './plugins/element.js'
import './assets/scss/element/set.scss'

import './plugins/cube-ui'

import 'normalize.css'
import '@/assets/css/common.css'

import './plugins/fastClick.js'

import './plugins/vue-awesome-swiper.js'


// Rem 设置 start =====
import cTools from '@/utils/cTools'
cTools.Win.setRem(window, document, 750);
// Rem 设置 end =====

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
