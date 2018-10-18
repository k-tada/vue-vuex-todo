import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import todos from './todos'
import auth from './auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    todos,
    auth
  },
  plugins: [createLogger()]
})
