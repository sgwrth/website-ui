<script setup lang="ts">
import type { Post } from '../../../types/Post'
const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const route = useRoute().params
const router = useRouter()
const requestHasFailed: Ref<boolean> = ref(false);

const post: Ref<Post> = ref({
    id: -1,
	title: '',
	text: '',
	author: '',
	authorEmail: '',
	created: '',
	updated: '',
})

onMounted(async () => {
	try {
		const response: Post[] = await $fetch(`${runtimeConfig.public.backendUrl}/posts/${route.id}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${store.token}` },
        })
        post.value.id = response[0].id
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
	<div v-if="requestHasFailed" class="main"><ErrorPage /></div>
	<div v-else class="main">
        <h1 class="header">Post #{{ post.id }}</h1>
        <PostHeader :post="post" />
        <PostBodyFull :post="post" />
        <PostFooter :post="post" @deleted="" /> <!-- No need to process the emit. -->
	</div>
</template>

<style scoped>
</style>
