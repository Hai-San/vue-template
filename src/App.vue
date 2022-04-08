<template>
    <Nav />
    <router-view />
</template>

<script setup>
import Nav from './components/nav.vue'
</script>

<style>
.app {
	display: flex;
	align-items: center;
	flex-direction: column;

	width: 100%;
	height: 100%;
}
</style>