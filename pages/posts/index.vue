<script setup lang="ts">
import type { Post } from '../../types/Post'

const get = useGetRequest()
const del = useDeletePost()
const isLoggedIn = useIsLoggedIn()
const refreshPosts = useRefreshListOfPosts()

const posts = ref([])
const unauthorized: Ref<boolean> = ref(false)
const showConfirmationPopup: Ref<boolean> = ref(false)
const activePostId: Ref<number> = ref(-1)

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
	posts.value = await refreshPosts()
})
</script>

<template>
	<div class="main">
		<div class="header">Blog</div>

        <div v-if="showConfirmationPopup">
            <PopupConfirmDelete
                @abortDelete="showConfirmationPopup = false"
                @confirmDelete="deletePost"
            />
        </div>

        <div v-if="unauthorized">
            <PopupUnauthorized @close="() => unauthorized = false" />
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
