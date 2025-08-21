<script setup lang="ts">
import type { Post } from '../types/Post'

const deletePost = useDeletePost()
const emit = defineEmits(['deleted', 'unauthorized'])
const unauthorized: Ref<boolean> = ref(false)

const months: string[] = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
]

async function deletePostAndEmitReload(postId: number) {
    unauthorized.value = await deletePost(postId)
    if (unauthorized.value) {
        emit('unauthorized')
        return
    }
    emit('deleted')
}

function toNamedDate(dateStr: string): string {
    const date = new Date(dateStr)
    const year = date.getFullYear()
    const month = months[date.getMonth()]
    const day = date.getDate()
    return `${month} ${day}, ${year}`
}

defineProps<{
    post: Post,
}>()
</script>

<template>
    <div class="post-footer font-s">
        <span>
            <NuxtLink :to="`/posts/edit/${post.id}`">Edit</NuxtLink>
            &bullet; <a v-on:click="deletePostAndEmitReload(post.id)">Delete</a>
        </span>
        <span>{{ toNamedDate(post.created) }} &bullet; {{ post.authorEmail}}</span>
    </div>
</template>

<style scoped>
.post-footer {
	display: flex;
	justify-content: space-between;
	background-color: #20151a;
	padding: 0.5rem;
	border-left: solid 0.15rem #000000;
	border-right: solid 0.15rem #000000;
	border-bottom: solid 0.15rem #000000;
    margin-bottom: 1.5rem;
}
</style>
