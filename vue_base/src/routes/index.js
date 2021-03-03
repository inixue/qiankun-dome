import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [
  {
    path: '/foo',
    name: 'Foo',
    component: () => import(/* webpackChunkName: "Foo" */ '@/pages/Foo.vue'),
  },
  {
    path: '/bar',
    name: 'Bar',
    component: () => import(/* webpackChunkName: "Bar" */ '@/pages/Bar.vue'),
  },
]

Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes // (缩写) 相当于 routes: routes
})