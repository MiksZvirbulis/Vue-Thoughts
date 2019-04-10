import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

// Routes
import NotFound from '../views/404'
import Home from '../views/Home'
import Add from '../views/Add'
import Signup from '../views/Signup'
import Login from '../views/Login'
import Logout from '../views/Logout'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/add', component: Add, meta: { requiredLogin: true } },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout, meta: { requiredLogin: true } },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },  
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredLogin) && (store.state.auth.loggedIn === false)) {
    next("/login")
  } else {
    next()
  }
})

export default router