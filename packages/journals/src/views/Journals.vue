<template>
    <div>
        <h2>Journals</h2>
        <table >
            <th>Name</th>
            <th>Category</th>
            <th>Minutes</th>
            
            <tr>
                <td>Journal 123</td>
                <td>Test</td>
                <td>100</td>
            </tr>
            <tr>
                <td>Journal 321</td>
                <td>Another</td>
                <td>200</td>
            </tr>
        </table>
        <div>
            <Btn>logout</Btn>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useCurrentUser } from 'shell/compositions/user'

const Btn = defineAsyncComponent(() => import("journals/components/AddJournalButton"))
export default {
    components: {
        Btn
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

<style scoped>
table {
    width: 100%;
}
</style>