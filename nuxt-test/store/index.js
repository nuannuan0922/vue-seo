import Vue from 'vue'
import Vuex from 'vuex'
import city from './city'

Vue.use(Vuex)

new Vuex.Store({
  modules: {
    city
  }
})