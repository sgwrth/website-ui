<script setup lang="ts">
import type { Post } from '../types/Post'
const deletePost = useDeletePost()
const emit = defineEmits(['deleted'])

function deletePostAndEmitReload(postId: number) {
    deletePost(postId)
    emit('deleted')
}

defineProps<{
    post: Post,
}>()
</script>

<template>
	<span>
        #{{ post.id }} | {{ post.title }}
        | <NuxtLink :to="`/posts/edit/${post.id}`">Edit</NuxtLink>
        | <a v-on:click="deletePostAndEmitReload(post.id)">Delete</a>
    </span>
    <span>{{ post.created }} by {{ post.authorEmail}}</span>
</template>
