<script setup lang="ts">
import type { Post } from '../types/Post'

defineProps<{
    post: Post,
}>()
</script>

<template>
    <div class="post-header font-s">
        <span>#{{ post.id }} &bullet; {{ post.title }}</span>
    </div>
</template>

<style scoped>
.post-header {
	display: flex;
	justify-content: space-between;
	background-color: #20151a;
	padding: 0.5rem;
    border-top: solid 0.15rem #000;
}
</style>
