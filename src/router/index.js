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
  },
  {
    path: '/facebook',
    name: 'FacebookView',
    component: () => import('../views/FacebookView')
  },
  {
    path: '/instagram',
    name: 'InstagramView',
    component: () => import('../views/InstagramView')
  },
  {
    path: '/twitter',
    name: 'TwitterView',
    component: () => import('../views/TwitterView')
  },
  {
    path: '/linkedin',
    name: 'LinkedinView',
    component: () => import('../views/LinkedinView')
  },
  {
    path: '/gmail',
    name: 'GmailView',
    component: () => import('../views/GmailView')
  },
  {
    path: '/yahoo',
    name: 'YahooView',
    component: () => import('../views/YahooView')
  },
  {
    path: '/outlook',
    name: 'OutlookView',
    component: () => import('../views/OutlookView')
  },
  {
    path: '/youtube',
    name: 'YoutubeView',
    component: () => import('../views/YoutubeView')
  },
  {
    path: '/tiktok',
    name: 'TiktokView',
    component: () => import('../views/TiktokView')
  },
  {
    path: '/pinterest',
    name: 'PinterestView',
    component: () => import('../views/PinterestView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
