<script setup lang="ts">
const store = useUserStore()
function logout() {
	store.username = ''
	store.token = ''
	store.email = ''
}
</script>

<template>
	<h1>andreassiegwarth.de</h1>
	<div class="grid">
		<div class="cell"><NuxtLink to="/">home</NuxtLink></div>
		<div class="cell"><NuxtLink to="/posts">posts</NuxtLink></div>

		<!-- logged in -->
		<template v-if="store.username !== ''">
			<div class="cell">hi there, {{ store.username }}</div>
			<div class="cell"><NuxtLink to="/login" v-on:click="logout">logout</NuxtLink></div>
		</template>

		<!-- not logged in -->
		<template v-else>
			<div class="cell">howdy, stranger</div>
			<div class="cell"><NuxtLink to="/login">log in</NuxtLink></div>
		</template>
	</div>
</template>

<style>
.grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 1fr;
}
.cell {
	text-align: center;
	border: solid 1px white;
}
</style>
