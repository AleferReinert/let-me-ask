import { useQuery } from '@tanstack/react-query'

interface UserProps {
	id: string
	name: string
	givenName: string
	familyName: string
	email: string
	picture: string
}

export function useUser(id?: string) {
	const { data, isLoading } = useQuery<UserProps[]>({
		queryKey: ['get-user', id],
		queryFn: async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`)
			console.log('response: ', response)
			if (!response.ok) {
				throw new Error('Error fetching user')
			}
			return response.json()
		},
		enabled: Boolean(id)
	})

	return { data: data ? data[0] : undefined, isLoading }
}
