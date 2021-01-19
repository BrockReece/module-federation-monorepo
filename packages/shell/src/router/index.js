import { createRouter, createWebHistory } from 'vue-router'

export default async function buildRouter() {
  const { routes: fooRoutes } = await import('foo/router')

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('shell/views/Home')
    },
    { 
      path: '/journals',
      name: 'Journals',
      component: () => import('journals/views/Journals')
    },
    ...fooRoutes,
  ]

  return createRouter({
    history: createWebHistory('/'),
    routes
  })
}
