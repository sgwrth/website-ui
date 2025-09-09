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
		<div class="header-bg">
            <!-- <img class="responsive-img" src="../assets/jpg/homepage3.jpg" /> -->
        </div>
		<div class="grid">

            <!-- Top row: -->

			<div class="cell"><NuxtLink to="/">Home</NuxtLink></div>
			<div class="cell"><NuxtLink to="/posts">Posts</NuxtLink></div>

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

            <!-- Bottom row: -->

            <div class="cell">
                <NuxtLink to="/connect-four">Connect 4</NuxtLink>
            </div>
            <div class="cell"></div>
            <div class="cell"></div>
			<div class="cell">
                <NuxtLink to="/links">Links</NuxtLink>
            </div>

		</div>
	</div>
</template>

<style scoped>
.cell {
	text-align: center;
	vertical-align: bottom;
    padding: 0.25rem 0.0rem;
}
.grid {
	width: 100%;
	margin: 0.0rem auto 1.0rem auto;
	max-width: 800px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 2fr;
}
.header-bg {
    background-color: #000;
}
.responsive-img {
	width: 100%;
	height: auto;
}
</style>
