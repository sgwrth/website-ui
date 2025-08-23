<script setup lang="ts">
import type { Post } from '../types/Post'

defineProps<{
    post: Post,
}>()

function cropTextIfOverlong(text: string): string {
    if (postIsOverlong(text)) {
        const textLength = text.length
        return `${text.slice(0, textLength - 3)}...`
    }
    return text
}

function postIsOverlong(text: string): boolean {
    return text.length > 200
}
</script>

<template>
    <div class="post-body">
        {{ cropTextIfOverlong(post.text) }}
        <div v-if="postIsOverlong(post.text)" class="font-s mt-m align-r">
            <NuxtLink :to="`/posts/show/${post.id}`">Read full post</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.align-r {
    text-align: right;
}
.post-body {
	background-color: #30252a;
	padding: 0.5rem;
	margin-bottom: 0.0rem;
    border-top: solid 0.15rem #000;
    white-space: pre-wrap;
}
</style>
