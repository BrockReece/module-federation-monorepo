<template>
    <div>
        <h2>Journals</h2>
        <table >
            <th>Name</th>
            <th>Category</th>
            <th>Minutes</th>
            
            <tr v-for="(journal, i) in journals" :key="i">
                <td>{{ journal.name }}</td>
                <td>{{ journal.category }}</td>
                <td>{{ journal.mins }}</td>
            </tr>
        </table>
        <div>
            <AddJournalButton/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useJournals } from 'journals/compositions/journals'
const AddJournalButton = defineAsyncComponent(() => import("journals/components/AddJournalButton"))

export default {
    components: {
        AddJournalButton
    },

    setup() {
        const { journals } = useJournals()
        return {
            journals
        }
    }
}
</script>

<style scoped>
table {
    width: 100%;
}
</style>