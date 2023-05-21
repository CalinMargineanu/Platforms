import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EntertainmentView from "@/views/EntertainmentView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/social_media',
    name: 'SocialMediaView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SocialMediaView.vue')
  },
  {
    path: '/e-mail',
    name: 'EmailView',
    component: () => import('../views/EmailView')
  },
  {
    path: '/entertainment',
    name: 'EntertainmentView',
    component: EntertainmentView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
