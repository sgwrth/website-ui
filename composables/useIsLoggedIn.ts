const store = useUserStore()

export default function useIsLoggedIn() {
    return () => {
        return store.username !== ''
    }
}
