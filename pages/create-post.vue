<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const postData = ref({
	title: '',
	text: '',
})

async function submitPost() {
	const response = await $fetch(`${runtimeConfig.public.backendUrl}/post`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${store.token}`,
		},
		body: {
			title: postData.value.title,
			text: postData.value.text,
			appUser: store.username,
			
		}
	})
}
</script>

<template>
<div>
	<h1>write a post</h1>
</div>
<div>
	<label for="title">title</label><br />
	<input v-model="postData.title" id="title" type="text" placeholder="title" /><br />
	<label for="text">text</label><br />
	<textarea v-model="postData.text" id="text" placeholder="go ahead, Shakespeare" /><br />
	<button v-on:click="submitPost">send</button>
</div>
</template>
