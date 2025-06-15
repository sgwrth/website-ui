<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
	error: Object as () => NuxtError
})
const whoseToBlame: Ref<string> = ref('')

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
	<div class="main error-page">
		<h1>That didn't work</h1>
		<h2 class="mb-m">Error {{ error?.statusCode }}</h2>
		<a @click="handleError">Go to home page</a>
	</div>
</template>

<style scoped>
.error-page {
	margin-top: 2.0rem;
}
</style>
