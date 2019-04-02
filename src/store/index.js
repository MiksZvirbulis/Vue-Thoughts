import Vue from 'vue'
import Vuex from 'vuex'
import thoughts from './modules/thoughts'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        thoughts
    }
})
