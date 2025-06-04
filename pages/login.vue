<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const inputData = ref({
	email: '',
	password: '',
})
const loginFailed = ref<boolean>(false)
const loginErrorData = ref({
	status: 0,
	message: '',
})

async function login() {
	try {
		const response = await $fetch(`${runtimeConfig.public.backendUrl}/login`, {
			method: 'POST',
			body: {
				email: inputData.value.email,
				password: inputData.value.password,
			},
		})
		store.email = response.email
		store.token = response.token
		store.username = response.username
	} catch (error) {
		loginFailed.value = true
		const errorStatus = error?.response?.status ?? 500
		const errorMsg = error?.response?._data?.message ?? 'something went wrong'
		loginErrorData.value = {
			status: errorStatus,
			message: errorMsg,
		}
	}
	resetCredentials()
}

function resetCredentials() {
	inputData.value.email = ''
	inputData.value.password = ''
}
</script>

<template>
	<!-- not logged in -->
	<div v-if="store.username === ''">
		<h1>log in</h1>
		<label for="email">email</label><br />
		<input v-model="inputData.email" id="email" type="text"><br />
		<label for="password">password</label><br />
		<input v-model="inputData.password" id="password" type="password"><br />
		<button v-on:click="login">log in</button>
		<!-- login failed -->
		<div v-if="loginFailed">
			<div>error code:{{ loginErrorData.status }}</div>
			<div>{{ loginErrorData.message}}</div>
		</div>
	</div>
	<!-- login successful -->
	<div v-else>
		<h1>logged in!</h1>
		<div>welcome, {{ store.username }}!</div>
	</div>
</template>
