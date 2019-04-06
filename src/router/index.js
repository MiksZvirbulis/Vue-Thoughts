import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import NotFound from '../views/404'
import Home from '../views/Home'
import Add from '../views/Add'
import Signup from '../views/Signup'
import Login from '../views/Login'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/add', component: Add },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },  
  ]
})