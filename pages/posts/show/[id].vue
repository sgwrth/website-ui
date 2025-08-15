<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const route = useRoute().params
const requestHasFailed: Ref<boolean> = ref(false);
const post: Ref<Post> = ref({
	title: '',
	text: '',
	author: '',
	authorEmail: '',
	created: '',
	updated: '',
})

interface Post {
	title: '',
	text: '',
	author: '',
	authorEmail: '',
	created: '',
	updated: '',
}

onMounted(async () => {
	try {
		const response: Post[] = await $fetch(`${runtimeConfig.public.backendUrl}/posts/${route.id}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${store.token}` },
        })
		post.value.title = response[0].title
		post.value.text = response[0].text
		post.value.author = response[0].author
		post.value.authorEmail = response[0].authorEmail
		post.value.created = response[0].created
		post.value.updated = response[0].updated
	} catch (error) {
		console.error(error);
		requestHasFailed.value = true;
	}

});
</script>

<template>
	<div v-if="requestHasFailed" class="main">
		<ErrorPage />
	</div>
	<div v-else class="main">
		<h1 class="header">selected post</h1>
		<div class="title font-s">
			<span>
                #{{ route.id }} | {{ post.created }} | {{ post.title }}
                | <NuxtLink :to="`/posts/edit/${route.id}`">Edit</NuxtLink>
                | <a v-on:click="deletePost(post.id)">Delete</a>
            </span>
			<span>by {{ post.author}} [{{ post.authorEmail}}]</span>
		</div>
		<div class="text">{{ post.text }}</div>
	</div>
</template>

<style scoped>
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
