<script setup lang="ts">
import type { Post } from '../types/Post'

defineProps<{
    post: Post,
}>()
</script>

<template>
    <div class="post-body">
        {{ post.text }}
        <div class="font-s mt-m align-r">
            <NuxtLink :to="`/posts/show/${post.id}`">Read full post</NuxtLink>
        </div>
    </div>
</template>

<style scoped>
.align-r {
    text-align: right;
}
.mt-m {
	margin-top: 1.0rem;
}
.post-body {
	background-color: #30252a;
	padding: 0.5rem;
	margin-bottom: 0.0rem;
	border: solid 0.15rem #000000;
    white-space: pre-wrap;
}
</style>
