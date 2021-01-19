import { createRouter, createWebHistory } from 'vue-router'
import ComponentError from '../components/ComponentError'

export default async function buildRouter() {
  const { routes: fooRoutes } = await import('foo/router').catch(() => ({
    routes: []
  }))

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: () => import('shell/views/Home')
    },
    { 
      path: '/journals',
      name: 'Journals',
      component: () => import('journals/views/Journals').catch(() => ComponentError)
    },
    ...fooRoutes,
    { 
      path: '/:pathMatch(.*)*', 
      component: ComponentError 
    }
  ]

  return createRouter({
    history: createWebHistory('/'),
    routes
  })
}
