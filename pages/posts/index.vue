<script setup lang="ts">
import type { Post } from '../../types/Post'

const store = useUserStore()
const get = getRequest()
const posts = ref([])
const unauthorized: Ref<boolean> = ref(false)
const showConfirmationPopup: Ref<boolean> = ref(false)
const delPost = useDeletePost()
const activePostId: Ref<number> = ref(-1)

function isLoggedIn() {
	return store.username !== ''
}

async function refreshListOfPosts() {
    posts.value = await get<Post[]>('posts')
}

function setUnauthorized() {
    unauthorized.value = true
}

function closePopup() {
    unauthorized.value = false;
}

function askForConfirmation(postId: number) {
    activePostId.value = postId
    showConfirmationPopup.value = true
}

function cancelDelete() {
    showConfirmationPopup.value = false
}

async function deletePost() {
    showConfirmationPopup.value = false
    unauthorized.value = await delPost(activePostId.value)
    if (!unauthorized.value) {
        posts.value = await get<Post[]>('posts')
    }
}

onMounted(async () => {
	refreshListOfPosts()
})
</script>

<template>
	<div class="main">
		<div class="header">The Posts</div>

        <div v-if="showConfirmationPopup">
            <PopupConfirmDelete
                @abortDelete="cancelDelete"
                @confirmDelete="deletePost"
            />
        </div>

        <div v-if="unauthorized">
            <PopupUnauthorized @close="closePopup" />
        </div>

		<div v-if="isLoggedIn()">
			<div class="menu">
                <NuxtLink to="/posts/create-post">Create Post</NuxtLink>
            </div>
			<div v-for="post in posts" :key="post.id">
                <PostHeader :post="post" />
                <PostBodyPreview :post="post" />
                <PostFooter
                    :post="post"
                    @confirmDelete="(postId) => askForConfirmation(postId)"
                />
			</div>
		</div>

        <!-- Not logged in. -->
		<div v-else>
			<div class="paragraph">
                <NuxtLink to="/login">Log in</NuxtLink> with 'guest/guest'
                to see posts.
            </div>
		</div>

	</div>
</template>

<style scoped>
.menu {
	margin-bottom: 1.0rem;
}
</style>
