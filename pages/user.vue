<script setup lang="ts">
const store = useUserStore()
const getUser = getRequest()
const runtimeConfig = useRuntimeConfig()
const user: Ref<User> = ref({
	username: '',
	email: '',
	role: '',
	created: '',
	updated: '',
});
interface User {
	username: ''
	email: ''
	role: ''
	created: ''
	updated: ''
}

onMounted(async () => {
	const response: User[] = await getUser('me')
	user.value.username = response[0].username
	user.value.email = response[0].email
	user.value.role = response[0].role
	user.value.created = response[0].created
	user.value.updated = response[0].updated
})
</script>

<template>
	<div class="main">
		<h1>User</h1>
		<div>Username: {{ user.username }}</div>
		<div>E-Mail: {{ user.email }}</div>
		<div>Role: {{ user.role }}</div>
		<div>Created: {{ user.created }}</div>
		<div>Last updated: {{ user.updated }}</div>
	</div>
</template>

<style scoped>
.mb-m {
	margin-bottom: 1.0rem;
}
</style>
