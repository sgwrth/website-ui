<script setup lang="ts">
import type { Post } from '../types/Post'

defineProps<{
    post: Post,
}>()
</script>

<template>
	<span>#{{ post.id }} &bullet; {{ post.title }}</span>
</template>
