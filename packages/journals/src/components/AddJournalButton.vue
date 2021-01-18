<template>
    <Btn @click="alert">Add Journal</Btn>
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Btn = defineAsyncComponent(() => import("styleguide/Btn"))

export default {
    components: {
        Btn
    },
    
    setup() {
        return {
            alert() {
                alert('handle journal creation')
            }
        }
    }
}
</script>