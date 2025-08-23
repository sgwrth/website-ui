import type { Post } from '../types/Post'

const get = useGetRequest()

export default function useRefreshListOfPosts() {
    return () => {
        return get<Post[]>('posts')
    }
}
