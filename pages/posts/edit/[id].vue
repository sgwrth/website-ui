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
        <h1>Edit post #{{route.id}}</h1>

        <div class="label">
            <label for="title">Title</label><br />
        </div>
        <div>
            <input
                class="post-title"
                v-model="putData.title"
                id="title"
                type="text"
            />
        </div>

        <div class="label">
            <label for="text">Text</label>
        </div>
        <div>
            <textarea
                class="post-body"
                v-model="putData.text"
                id="text" />
        </div>

        <button v-on:click="editPost">Update</button>
	</div>
</template>


<style scoped>
.post-title {
    width: 75%;
    margin-bottom: 1.5rem;
}
.post-body {
    width: 75%;
    resize: none;
    margin-bottom: 1.5rem;
}
</style>
