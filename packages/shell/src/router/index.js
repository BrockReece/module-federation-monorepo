import { createRouter, createWebHistory } from 'vue-router'

export default async function buildRouter() {
  const { routes: fooRoutes } = await import('foo/router')
  const { routes: journalsRoutes } = await import('journals/router').catch(() => ({
    routes: []
  })) 

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('shell/views/Home')
    },
    ...fooRoutes,
    ...journalsRoutes
  ]

  return createRouter({
    history: createWebHistory('/'),
    routes
  })
}
