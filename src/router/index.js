import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'Dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'About',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      },
      {
        path: 'Map',
        name: 'Map',
        component: () => import('../views/Map.vue')
      },
      {
        path: 'Equipment',
        name: 'Equipment',
        component: () => import('../views/Equipment.vue')
      },
      {
        path: 'Inventory',
        name: 'Inventory',
        component: () => import('../views/Inventory.vue')
      },
      {
        path: 'Report',
        name: 'Report',
        component: () => import('../views/Report.vue')
      },
      {
        path: 'Document',
        name: 'Document',
        component: () => import('../views/Document.vue')
      },
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  /*{
    path: '*',
    redirect: '/'
  }*/
]

const router = new VueRouter({
  routes
})

export default router
