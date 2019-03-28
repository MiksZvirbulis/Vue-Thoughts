import Vue from 'vue'
import VueRouter from 'vue-router'

// Routes
import notFound from './404'
import home from './home'
import addThought from './addThought'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      { path: '/', component: home },
      { path: '/add', component: addThought },
      { path: '/404', component: notFound },
      { path: '*', redirect: '/404' },  
    ]
  })