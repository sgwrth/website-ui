<script setup lang="ts">
const store = useUserStore()

function logout() {
	store.username = ''
	store.token = ''
	store.email = ''
	store.role = ''
}
</script>

<template>
	<div class="main">
		<div><img class="responsive-img" src="../assets/jpg/homepage3.jpg" /></div>
		<div class="grid">
			<div class="cell"><NuxtLink to="/">Home</NuxtLink></div>
			<div class="cell"><NuxtLink to="/posts">Posts</NuxtLink></div>
			<div class="cell"><NuxtLink to="/links">Links</NuxtLink></div>

            <template v-if="store.username !== ''">
                <div class="cell">
                    <NuxtLink to="/user">You</NuxtLink>
                </div>
            </template>

            <!-- Not logged in. -->
            <template v-else>
                <div class="cell">You</div>
            </template>

			<template v-if="store.username !== ''">
				<div class="cell">
					<NuxtLink to="/login" v-on:click="logout">Logout</NuxtLink>
				</div>
			</template>

			<!-- Not logged in. -->
			<template v-else>
				<div class="cell">
                    <NuxtLink to="/login">Login</NuxtLink>
                </div>
			</template>

		</div>
	</div>
</template>

<style scoped>
.cell {
	text-align: center;
	vertical-align: bottom;
}
.grid {
	position: absolute;
	top: 0.5rem;
	width: 100%;
	margin: 0 auto;
	max-width: 800px;
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-template-rows: 1fr;
}
.responsive-img {
	width: 100%;
	height: auto;
}
</style>
