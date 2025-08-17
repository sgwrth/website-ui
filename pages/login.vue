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

interface LoginReponse {
	message: string
	email: string
	token: string
	username: string
	role: string
}

async function login() {
	try {
		const response: LoginReponse = await $fetch(`${runtimeConfig.public.backendUrl}/login`, {
			method: 'POST',
			body: {
				email: inputData.value.email,
				password: inputData.value.password,
			},
		})
		store.email = response.email
		store.token = response.token
		store.username = response.username
		store.role = response.role
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
	<div class="main">

        <!-- Not logged in.-->
		<div v-if="store.username === ''">
			<div class="header">Login</div>
			<div class="label"><label for="email">E-mail</label></div>
			<div class="input">
                <input v-model="inputData.email" id="email" type="text">
            </div>
			<div class="label">
                <label for="password">Password</label><br />
            </div>
			<div class="input">
                <input
                    v-model="inputData.password"
                    id="password"
                    type="password"
                />
            </div>
			<button v-on:click="login">LFG!</button>

			<!-- Login failed. -->
			<div v-if="loginFailed">
				<div>error code:{{ loginErrorData.status }}</div>
				<div>{{ loginErrorData.message}}</div>
			</div>
		</div>

		<!-- Login successful. -->
		<div v-else>
			<div class="header">Great login success!</div>
			<div>Welcome, {{ store.username }}!</div>
		</div>
	</div>
</template>

<style scoped>
</style>
