<template>
    <Btn @click="addJournal">Add Journal</Btn>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { useJournals } from 'journals/compositions/journals'
const Btn = defineAsyncComponent(() => import("styleguide/Btn"))

export default {
    components: {
        Btn
    },
    
    setup() {
        const { addJournal } = useJournals()
        return {
            addJournal
        }
    }
}
</script>