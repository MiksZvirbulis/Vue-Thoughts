import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import Home from './Home'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: Home }
    ]
  })