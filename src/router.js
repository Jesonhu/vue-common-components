import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/list',
      component: Home
    },
    {
      path: '/example',
      name: 'example',
      component: () => import('@/views/example/index.vue'),
      children: [
        {
          path: 'slidemenu',
          name: 'slidemenu',
          component: () => import('@/views/example/slidemenu/index.vue')
        },
        {
          path: 'header',
          name: 'header',
          component: () => import('@/views/example/header/index.vue')
        },
        {
          path: 'gridmenu',
          name: 'gridmenu',
          component: () => import('@/views/example/gridMenu/index.vue')
        },
        {
          path: 'swiper',
          name: 'swiper',
          component: () => import('@/views/example/vueAwesomeSwiper/index.vue')
        }
      ]
    },
    {
      path: '/list',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/example_list/index.vue')
    }
  ]
})
