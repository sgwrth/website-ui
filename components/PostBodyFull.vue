<script setup lang="ts">
import type { Post } from '../types/Post'

defineProps<{
    post: Post,
}>()
</script>

<template>
    <div class="post-body">
        {{ post.text }}
    </div>
</template>

<style scoped>
.post-body {
	background-color: #30252a;
	padding: 0.5rem;
	margin-bottom: 0.0rem;
	border: solid 0.15rem #000000;
}
</style>
