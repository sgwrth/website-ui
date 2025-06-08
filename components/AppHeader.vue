<script setup lang="ts">
const store = useUserStore()

function logout() {
	store.username = ''
	store.token = ''
	store.email = ''
}
</script>

<template>
	<div class="main">
		<div class="grid">
			<div class="cell"><NuxtLink to="/">Home</NuxtLink></div>
			<div class="cell"><NuxtLink to="/posts">Posts</NuxtLink></div>

			<!-- logged in -->
			<template v-if="store.username !== ''">
				<div class="cell">Hi there, {{ store.username }}</div>
				<div class="cell"><NuxtLink to="/login" v-on:click="logout">Logout</NuxtLink></div>
			</template>

			<!-- not logged in -->
			<template v-else>
				<div class="cell">Howdy, stranger</div>
				<div class="cell"><NuxtLink to="/login">Log in</NuxtLink></div>
			</template>
		</div>
	</div>
</template>

<style scoped>
.cell {
	text-align: center;
}
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
}
</style>
