import { defineAsyncComponent, createApp } from 'vue'
import router from './router'
const App = defineAsyncComponent(() => import('shell/App'))

const create = async () => {
    createApp(App)
        .use(await router())
        .mount('#app')
}

create()
