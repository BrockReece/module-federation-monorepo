<template>
    <div>
        This is from the App package
        <div>
            <Btn v-if="user" @click="logout">logout</Btn>
        </div>
        <Countries />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useCurrentUser } from 'shell/compositions/user'

const Btn = defineAsyncComponent(() => import("styleguide/Btn"))
const Countries = defineAsyncComponent(() => import("shell/components/Countries"));

export default {
    components: {
        Btn,
        Countries
    },

    setup() {
        const { user, logout } = useCurrentUser()
        return {
            logout,
            user
        }
    }

}
</script>