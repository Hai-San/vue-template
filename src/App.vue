<template>
    <Nav />
    <router-view />
</template>

<script setup>
import Nav from './components/nav.vue'
</script>

<style lang="scss">
@import './styles/global/global.scss';

@import './styles/global/reset.scss';
</style>