import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import { mapActions } from 'vuex'

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
    { path: '/', component: Home, meta: { requiredLogin: true } },
    { path: '/add', component: Add, meta: { requiredLogin: true } },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
    { path: '/logout', component: Logout, meta: { requiredLogin: true } },
    { path: '/404', component: NotFound },
    { path: '*', redirect: '/404' },
  ]
})

router.beforeEach(async function(to, from, next) {
  const checkLoggedIn = await store.dispatch('loggedIn')
  if (to.matched.some(record => record.meta.requiredLogin) && checkLoggedIn === false) {
    next('/login')
  } else {
    next()
  }
})

export default router