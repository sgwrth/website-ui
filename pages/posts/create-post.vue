<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const postData = ref({
	title: '',
	text: '',
})

async function submitPost() {
	const response = await $fetch(`${runtimeConfig.public.backendUrl}/posts`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${store.token}`,
		},
		body: {
			title: postData.value.title,
			text: postData.value.text,
		}
	})
}
</script>

<template>
	<div class="main">
		<h1>Write a post</h1>
		<div class="label"><label for="title">Title</label></div>
		<div class="input"><input v-model="postData.title" id="title" type="text" placeholder="Title" /></div>
		<div class="label"><label for="text">Text</label></div>
		<div class="textarea">
			<textarea v-model="postData.text" id="text" placeholder="Go ahead, Shakespeare" />
		</div>
		<button v-on:click="submitPost">send</button>
	</div>
</template>
