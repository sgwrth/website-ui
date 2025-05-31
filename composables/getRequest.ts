const runtimeConfig = useRuntimeConfig()
const store = useUserStore()

export const getRequest = (path) => {
	return async (path) => {
		const headers = new Headers()
		const response = await $fetch(`${runtimeConfig.public.backendUrl}/${path}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${store.token}`
			}
		})
		return response
	}
}
