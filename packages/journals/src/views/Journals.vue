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
            <AddJournalButton/>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const AddJournalButton = defineAsyncComponent(() => import("journals/components/AddJournalButton"))

export default {
    components: {
        AddJournalButton
    }
}
</script>

<style scoped>
table {
    width: 100%;
}
</style>