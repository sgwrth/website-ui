<script setup lang="ts">
const store = useUserStore()
const get = getRequest()
const posts = ref([])

function isLoggedIn() {
	return store.username !== ''
}

async function refreshListOfPosts() {
	posts.value = await get('posts')
}

onMounted(async () => {
	refreshListOfPosts()
})
</script>

<template>
	<div class="main">
		<h1 class="header">The Posts</h1>

		<div v-if="isLoggedIn()">
			<div class="menu">
                <NuxtLink to="/posts/create-post">Create Post</NuxtLink>
            </div>
			<div v-for="post in posts" :key="post.id">
                <PostHeader :post="post" />
                <PostBodyPreview :post="post" />
                <PostFooter :post="post" @deleted="refreshListOfPosts" />
			</div>
		</div>

        <!-- Not logged in. -->
		<div v-else>
			<div class="paragraph">
                <NuxtLink to="/login">Log in</NuxtLink> to see posts.
            </div>
			<div>No account? Try guest/guest.</div>
		</div>

	</div>
</template>

<style scoped>
.menu {
	margin-bottom: 1.0rem;
}
</style>
