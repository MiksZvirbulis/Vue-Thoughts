import Vue from 'vue'
import Vuex from 'vuex'
import thoughts from './modules/thoughts'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        thoughts,
        auth
    }
})
