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
		<div class="menu">
			<NuxtLink to="/posts/create-post">CREATE POST</NuxtLink>
		</div>
		<div v-for="post in posts" :key="post.id">
			<div class="title">
					<span>#{{ post.id }} | {{ post.created }} | {{ post.title }}
						| [<NuxtLink :to="`/posts/edit/${post.id}`">Edit</NuxtLink>]</span>
				<span>by {{ post.author}} [{{ post.authorEmail}}]</span>
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
	border-top: solid 0.15rem #000000;
	border-left: solid 0.15rem #000000;
	border-right: solid 0.15rem #000000;
}

.text {
	background-color: #a0a0a0;
	padding: 0.5rem;
	margin-bottom: 1.5rem;
	border: solid 0.15rem #000000;
}
</style>
