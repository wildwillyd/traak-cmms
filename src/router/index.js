import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/Map',
    name: 'Map',
    component: () => import('../views/Map.vue')
  },
  {
    path: '/Equiptment',
    name: 'Equiptment',
    component: () => import('../views/Equiptment.vue')
  },
  {
    path: '/Inventory',
    name: 'Inventory',
    component: () => import('../views/Inventory.vue')
  },
  {
    path: '/Report',
    name: 'Report',
    component: () => import('../views/Report.vue')
  },
  {
    path: '/Document',
    name: 'Document',
    component: () => import('../views/Document.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
