const runtimeConfig = useRuntimeConfig()
const store = useUserStore()

export default function usePostConnectFour() {
    return async (payload: string) => {
        const response = await $fetch(`${runtimeConfig.public.apiUrl}/connectfour`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${store.token}`
            },
            body: payload
        })
        return response
    }
}
