<template>
    <main class="pageHome">
        <h1 class="pageHome_title">
            Home
        </h1>
        Clicked: {{ count }} times, count is {{ evenOrOdd }}.
        <button @click="increment">
            +
        </button>
        <button @click="decrement">
            -
        </button>
        <button @click="incrementIfOdd">
            Increment if odd
        </button>
        <button @click="incrementAsync">
            Increment async
        </button>
    </main>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
    name: 'PageHome',
    setup() {
        const store = useStore()

        return {
            count: computed(() => store.state.count),
            evenOrOdd: computed(() => store.getters.evenOrOdd),
            increment: () => store.dispatch('increment'),
            decrement: () => store.dispatch('decrement'),
            incrementIfOdd: () => store.dispatch('incrementIfOdd'),
            incrementAsync: () => store.dispatch('incrementAsync')
        }
    }
}


</script>

<style lang="scss">
.pageHome {
	background-color: var(--color-primary-dark);
}
</style>
