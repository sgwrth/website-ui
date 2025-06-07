<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const route = useRoute().params
const putData = ref({
	title: '',
	text: '',
})

async function editPost() {
	const response = await $fetch(`${runtimeConfig.public.backendUrl}/posts/${route.id}`, {
		method: 'PUT',
		headers: {
			Authorization: `Bearer ${store.token}`,
		},
		body: {
			title: putData.value.title,
			text: putData.value.text,
		}
	})
}

onMounted(async () => {
	const response = await $fetch(`${runtimeConfig.public.backendUrl}/posts/${route.id}`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${store.token}`,
		},
	})
	putData.value.title = response[0].title
	putData.value.text = response[0].text
});
</script>

<template>
<div>
		<h1>edit your post #{{route.id}}</h1>
</div>
<div>
	<label for="title">title</label><br />
	<input v-model="putData.title" id="title" type="text" placeholder="title" /><br />
	<label for="text">text</label><br />
	<textarea v-model="putData.text" id="text" placeholder="go ahead, Shakespeare" /><br />
	<button v-on:click="editPost">send</button>
</div>
</template>

<style scoped>
</style>
