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
	const { data } = useQuery<UserProps[]>({
		queryKey: ['get-user', id],
		queryFn: async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${id}`)
			return response.json()
			console.log('response: ', response)
		},
		enabled: Boolean(id)
	})

	return data ? data[0] : undefined
}
