const runtimeConfig = useRuntimeConfig()
const store = useUserStore()

export default function usePostConnectFour() {
    return async (payload: string) => {
        // const response = await $fetch(`${runtimeConfig.public.apiUrl}/connectfour`, {
        const response = await $fetch('http://172.19.39.225:5000/', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${store.token}`,
                'Content-Type': 'application/json',
            },
            body: payload
        })
        return response
    }
}
