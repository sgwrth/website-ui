<script setup lang="ts">
const get = getRequest()
const posts = ref([])
 onMounted(async () => {
 	posts.value = await get('post')
 })
</script>

<template>
	<h1>les posts</h1>
	<div v-for="post in posts" :key="post.id">
		<div>{{ post.title }}</div>
		<div>{{ post.text }}</div>
	</div>
</template>
