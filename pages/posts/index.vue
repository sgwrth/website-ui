<script setup lang="ts">
const store = useUserStore()
const get = getRequest()
const posts = ref([])

function isLoggedIn() {
	return store.username !== ''
}

onMounted(async () => {
 	posts.value = await get('posts')
})
</script>

<template>
	<div class="main">
		<h1 class="header">les posts</h1>
		<div v-if="isLoggedIn()">
			<div class="menu"><NuxtLink to="/posts/create-post">Create Post</NuxtLink></div>
			<div v-for="post in posts" :key="post.id">
				<div class="title font-s">
					<span>#{{ post.id }} | {{ post.created }} | {{ post.title }}
						| [<NuxtLink :to="`/posts/edit/${post.id}`">Edit</NuxtLink>]</span>
					<span>by {{ post.author}} [{{ post.authorEmail}}]</span>
				</div>
				<div class="text">{{ post.text }}</div>
			</div>
		</div>
		<!-- not logged in -->
		<div v-else>Log in to see poasts</div>
	</div>
</template>

<style scoped>
.menu {
	margin-bottom: 1.0rem;
}
.title {
	display: flex;
	justify-content: space-between;
	background-color: #20151a;
	padding: 0.5rem;
	border-top: solid 0.15rem #000000;
	border-left: solid 0.15rem #000000;
	border-right: solid 0.15rem #000000;
}
.text {
	background-color: #30252a;
	padding: 0.5rem;
	margin-bottom: 1.5rem;
	border: solid 0.15rem #000000;
}
</style>
