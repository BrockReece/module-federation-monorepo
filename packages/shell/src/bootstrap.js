import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

const create = async () => {
    createApp(App)
        .use(await router())
        .mount('#app')
}

create()
