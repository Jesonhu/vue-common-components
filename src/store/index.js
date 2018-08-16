import Vue from 'vue'
import Vuex from 'vuex'
import sidemenu from './modules/sidemenu'

Vue.use(Vuex)

export default new Vuex.Store({
  // single config
  // state: {

  // },
  // mutations: {

  // },
  // actions: {

  // }
  modules: {
    sidemenu
  }
})
