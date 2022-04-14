<template>
    <h1>About</h1>
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    setup() {
        const store = useStore()
        return {
            count: computed(() => store.state.count),
            evenOrOdd: computed(() => store.getters.evenOrOdd)
        }
    }
}
</script>

<style>
</style>