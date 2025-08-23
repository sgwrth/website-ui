<script setup lang="ts">
import type { Post } from '../../../types/Post'
import type { PostCreateOrUpdateDto } from '../../../types/PostCreateOrUpdateDto'

const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const route = useRoute().params
const router = useRouter()
const unauthorized: Ref<boolean> = ref(false)
const putData: Ref<PostCreateOrUpdateDto> = ref({
	title: '',
	text: '',
})

function closePopup() {
    unauthorized.value = false;
}

async function editPost() {
    try {
        const response = await fetch(`${runtimeConfig.public.apiUrl}/posts/${route.id}`, {
            method: 'PUT',
            headers: {
                'Authorization': `Bearer ${store.token}`,
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                title: putData.value.title,
                text: putData.value.text,
            })
        })
        const statusCode = response.status
        if (statusCode >= 400 && statusCode < 500) {
            unauthorized.value = true
        } else {
            router.push(`/posts/show/${route.id}`)
        }
    } catch (err) {
        console.error(err)
    }
}

onMounted(async () => {
	const response: Post[] = await $fetch(`${runtimeConfig.public.apiUrl}/posts/${route.id}`, {
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
        <div class="header">Edit post #{{route.id}}</div>

        <div v-if="unauthorized">
            <PopupUnauthorized @close="closePopup"/>
        </div>

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
                rows="5"
                class="post-body"
                v-model="putData.text"
                id="text"
            />
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
