<script setup lang="ts">
import type { PostCreateOrUpdateDto } from '../../types/PostCreateOrUpdateDto'

const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const router = useRouter()
const postData: Ref<PostCreateOrUpdateDto> = ref({
	title: '',
	text: '',
})
const unauthorized: Ref<boolean> = ref(false)

function closePopup() {
    unauthorized.value = false;
}

async function submitPost() {
    try {
        const requestBody = JSON.stringify({
            title: postData.value.title,
            text: postData.value.text,
        })
        const response = await fetch(`${runtimeConfig.public.backendUrl}/posts`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${store.token}`,
                'Content-type': 'application/json',
            },
            body: requestBody,
        })
        const statusCode = response.status
        if (statusCode >= 400 && statusCode < 500) {
            unauthorized.value = true
        } else {
            router.push('/posts')
        }
    } catch (err) {
        console.error(err)
    }
}
</script>

<template>
	<div class="main">
		<div class="header">Write a post</div>

        <div v-if="unauthorized">
            <PopupUnauthorized @close="closePopup"/>
        </div>

		<div class="label">
            <label for="title">Title</label>
        </div>
		<div>
            <input
                class="post-title"
                v-model="postData.title"
                id="title"
                type="text"
                placeholder="Make it snappy"
            />
        </div>

		<div class="label">
            <label for="text">Text</label>
        </div>
		<div>
			<textarea
                rows="5"
                class="post-body"
                v-model="postData.text"
                id="text"
                placeholder="Elaborate"
            />
		</div>

		<button v-on:click="submitPost">Tell the world</button>
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
