<template>
	<img class="logo" alt="Vue logo" src="@/assets/logo.png" />
	<nav class="menu">
		<router-link to="/">Home</router-link>
		<router-link to="/about">About</router-link>
	</nav>
</template>

<script>
export default {
	name: 'Nav'
};
</script>

<style>
.logo {
	max-width: 250px;
}

.menu {
	display: flex;
	justify-content: center;

	padding: 16px 0px;
	gap: 12px;
}
</style>