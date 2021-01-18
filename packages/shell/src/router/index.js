import { createRouter, createWebHistory } from 'vue-router'

export default async function buildRouter() {
  const { routes: fooRoutes } = await import('foo/router')

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('shell/views/Home')
    },
    ...fooRoutes
  ]

  return createRouter({
    history: createWebHistory('/'),
    routes
  })
}
