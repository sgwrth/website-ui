const runtimeConfig = useRuntimeConfig()
const store = useUserStore()

export default function useGetRequest() {
    return async <T>(path: string): Promise<T> => {
        const response: T
            = await $fetch<T>(`${runtimeConfig.public.apiUrl}/${path}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${store.token}`
                }
            })
        return response
    }
}
