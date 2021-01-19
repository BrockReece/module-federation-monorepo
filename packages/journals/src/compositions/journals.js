import { ref, shallowReadonly } from 'vue'

const journals = ref([
    { name: 'Journal 123', category: 'Test', mins: '300' },
    { name: 'Journal 321', category: 'Another', mins: '100' }
])

export function useJournals() {
    return {
        journals: shallowReadonly(journals),
        addJournal() {
            journals.value.push({ name: 'New journal', category: 'Category', mins: '200' })
        }
    }
}