<script setup lang="ts">
const store = useUserStore()
const get = getRequest()
const posts = ref([])

onMounted(async () => {
 	posts.value = await get('post')
})
</script>

<template>
	<h1>les posts</h1>
	<div v-if="store.name !== ''" v-for="post in posts" :key="post.id">
		<div>{{ post.title }}</div>
		<div>{{ post.text }}</div>
	</div>
	<div v-else>log in to see poats</div>
</template>
