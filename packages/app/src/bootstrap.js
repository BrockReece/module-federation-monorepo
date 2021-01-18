import { createApp, defineAsyncComponent } from 'vue'

const App = defineAsyncComponent(() => import('shell/App'))

const create = async () => {
    const router = await import('shell/Router')
    createApp(App)
        .use(await router.default())
        .mount('#app')
}
create()