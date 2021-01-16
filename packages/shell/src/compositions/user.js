import { ref, shallowReadonly } from 'vue'

const user = ref(null)

export function useCurrentUser() {
    return {
        user: shallowReadonly(user),
        login(newUser) {
            user.value = newUser
        },
        logout() {
            user.value = null
        }
    }
}