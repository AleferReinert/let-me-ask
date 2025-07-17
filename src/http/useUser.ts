import { useQuery } from '@tanstack/react-query'

interface UserProps {
	id: string
	name: string
	givenName: string
	familyName: string
	email: string
	picture: string
}

export function useUser() {
	const userId = localStorage.getItem('userId')
	const { data, isLoading } = useQuery<UserProps[]>({
		queryKey: ['get-user', userId],
		queryFn: async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${userId}`)
			console.log('response: ', response)
			if (!response.ok) {
				throw new Error('Error fetching user')
			}
			return response.json()
		},
		enabled: Boolean(userId)
	})

	return { data: data ? data[0] : undefined, isLoading }
}
