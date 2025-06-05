<script setup lang="ts">
const store = useUserStore()
const get = getRequest()
const posts = ref([])

function isLoggedIn() {
	return store.username !== ''
}

onMounted(async () => {
 	posts.value = await get('post')
})
</script>

<template>
<div class="main">
	<h1 class="header">les posts</h1>
	<div v-if="isLoggedIn()">
		<div class="menu">
			<NuxtLink to="/create-post">CREATE POST</NuxtLink>
		</div>
		<div v-for="post in posts" :key="post.id">
			<div class="title">
				<span>{{ post.created }} | <strong>{{ post.title }}</strong></span>
				<span>by {{ post.author}} [{{ post.author_email}}]</span>
			</div>
			<div class="text">{{ post.text }}</div>
		</div>
	</div>
	<!-- not logged in -->
	<div v-else>log in to see poasts</div>
</div>
</template>

<style scoped>
.main {
	background-color: #404040;
	margin: 0.0rem;
	padding: 1.0rem;
	font-family: "Arial";
}

.header {
	color: #c0c0c0;
}

.menu {
	margin-bottom: 1.0rem;
}

.title {
	display: flex;
	justify-content: space-between;
	background-color: #707070;
	padding: 0.5rem;
}

.text {
	background-color: #a0a0a0;
	padding: 0.5rem;
	margin-bottom: 1.5rem;
}
</style>
