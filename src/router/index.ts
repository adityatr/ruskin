import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import New from '../views/New.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    component: Home,
    name: 'Home',
    path: '/',
  },
  {
    component: New,
    name: 'New',
    path: '/New',
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  mode: 'history',
  routes,
})

export default router
