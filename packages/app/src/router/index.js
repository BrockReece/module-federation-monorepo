// import Page from '../views/Page'

export const routes = [
    {
        path: '/app',
        name: 'App',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/Page')
      }
]
