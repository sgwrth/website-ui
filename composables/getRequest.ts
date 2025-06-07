const runtimeConfig = useRuntimeConfig()
const store = useUserStore()

export const getRequest = () => {
	return async (path: string) => {
		const response = await $fetch(`${runtimeConfig.public.backendUrl}/${path}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${store.token}`
			}
		})
		return response
	}
}
