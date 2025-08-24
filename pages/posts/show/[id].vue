<script setup lang="ts">
import type { Post } from '../../../types/Post'

const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const del = useDeletePost()

const route = useRoute().params
const router = useRouter()

const requestHasFailed: Ref<boolean> = ref(false)
const showConfirmationPopup: Ref<boolean> = ref(false)
const activePostId: Ref<number> = ref(-1)
const unauthorized: Ref<boolean> = ref(false)
const post: Ref<Post> = ref({
    id: -1,
	title: '',
	text: '',
	author: '',
	authorEmail: '',
	created: '',
	updated: '',
})

function askForConfirmation(postId: number) {
    activePostId.value = postId
    showConfirmationPopup.value = true
}

async function deletePost() {
    showConfirmationPopup.value = false
    unauthorized.value = await del(activePostId.value)
    if (!unauthorized.value) {
        posts.value = await get<Post[]>('posts')
    }
}


onMounted(async () => {
	try {
		const response: Post
                = await $fetch(`${runtimeConfig.public.apiUrl}/posts/${route.id}`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${store.token}` },
        })
        post.value.id = response.id
		post.value.title = response.title
		post.value.text = response.text
		post.value.author = response.author
		post.value.authorEmail = response.authorEmail
		post.value.created = response.created
		post.value.updated = response.updated
	} catch (error) {
		console.error(error);
		requestHasFailed.value = true;
	}
});
</script>

<template>
	<div class="main">
        <div v-if="requestHasFailed" class="main">
            <ErrorPage />
        </div>

        <div v-else>
            <div v-if="showConfirmationPopup">
                <PopupConfirmDelete
                    @abortDelete="showConfirmationPopup = false"
                    @confirmDelete="deletePost"
                />
            </div>

            <div class="header">Post #{{ post.id }}</div>
            <PostHeader :post="post" />
            <PostBodyFull :post="post" />
            <PostFooter
                :post="post"
                @confirmDelete="(postId) => askForConfirmation(postId)"
            />
        </div>
    </div>
</template>

<style scoped>
</style>
