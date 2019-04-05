import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import NotFound from '../views/404'
import Home from '../views/Home'
import Add from '../views/Add'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/add', component: Add },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },  
  ]
})