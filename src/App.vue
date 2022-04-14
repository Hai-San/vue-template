<template>
    <div
        class="pageBody"
        :class="pageClass"
    >
        <Nav />
        <router-view />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import Nav from './components/nav.vue'

const route = useRoute()
let pageClass = ref('')

watch(
    () => route.name,
    currentRoute => {
		  pageClass.value = route.name
    }
)
</script>

<style lang="scss">
@import './styles/global/global.scss';

@import './styles/global/reset.scss';

:root {
	--color-primary-pure: #7427F1;
	--color-primary-dark: #1F0773;
	--color-primary-medium: #4213AD;
	--color-primary-light: #EAD3FE;
}

body {
	--color-primary-pure: #00E4F5;
	--color-primary-dark: #00B9C5;
	--color-primary-medium: #97C8CC;
	--color-primary-light: #BCFBFF;
}

.pageBody {
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 100%;
	height: 100%;
}
</style>