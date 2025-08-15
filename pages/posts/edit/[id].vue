<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const route = useRoute().params
const router = useRouter()
const putData: Ref<Post> = ref({
	title: '',
	text: '',
})

interface Post {
	title: '',
	text: '',
}

async function editPost() {
    try {
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
        router.push(`/posts/show/${route.id}`)
    } catch (err) {
        console.error(err)
    }
}

onMounted(async () => {
	const response: Post[] = await $fetch(`${runtimeConfig.public.backendUrl}/posts/${route.id}`, {
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
	<div class="main">
		<h1>edit your post #{{route.id}}</h1>
		<label for="title">title</label><br />
		<input v-model="putData.title" id="title" type="text" /><br />
		<label for="text">text</label><br />
		<textarea v-model="putData.text" id="text" /><br />
		<button v-on:click="editPost">send</button>
	</div>
</template>

<style scoped>
</style>
