const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const router = useRouter()

export default function useDeletePost() {
    return async (id: number) => {
        let isUnauthorized = false
        const response = await fetch(`${runtimeConfig.public.backendUrl}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${store.token}`
            }
        })
        const statusCode = response.status
        if (statusCode >= 400 && statusCode < 500) {
            isUnauthorized = true
            return isUnauthorized
        }
        if (statusCode >= 200 && statusCode < 300) {
            router.push('/posts')
            return isUnauthorized
        }
    }
}
