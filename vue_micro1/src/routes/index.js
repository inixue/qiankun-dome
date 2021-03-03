import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default [
  {
    path: '/zifoo',
    name: 'ZiFoo',
    component: () => import(/* webpackChunkName: "ZiFoo" */ '@/pages/ZiFoo.vue'),
  },
  {
    path: '/zibar',
    name: 'ZiBar',
    component: () => import(/* webpackChunkName: "ZiBar" */ '@/pages/ZiBar.vue'),
  },
]
