import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('shell/views/Home')
  },
  {
    path: '/app',
    name: 'App',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('foo/views/Page')
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
  // base: 'http:localhos1t:8080/'
})

export default router
