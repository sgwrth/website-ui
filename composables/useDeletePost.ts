const runtimeConfig = useRuntimeConfig()
const store = useUserStore()
const router = useRouter()

export default function useDeletePost() {
    return async (id: number) => {
        const response = await $fetch(`${runtimeConfig.public.backendUrl}/posts/${id}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${store.token}`
            }
        })
        router.push('/posts')
    }
}
