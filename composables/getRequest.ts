const runtimeConfig = useRuntimeConfig()
const store = useUserStore()

export const getRequest = () => {
	return async function <T>(path: string) {
		const response: T = await $fetch<T>(`${runtimeConfig.public.backendUrl}/${path}`, {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${store.token}`
			}
		})
		return response
	}
}
