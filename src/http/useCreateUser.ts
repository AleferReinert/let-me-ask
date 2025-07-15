import { useMutation, useQueryClient } from '@tanstack/react-query'

interface CreateUserRequest {
	id: string
	name: string
	givenName: string
	familyName: string
	email: string
	picture: string
}

interface CreateUserResponse {
	id: string
}

export function useCreateUser(id?: string) {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: id ? ['create-user', id] : ['create-user'],
		mutationFn: async (data: CreateUserRequest) => {
			if (!id) {
				return
			}
			const url = `${import.meta.env.VITE_API_URL}/users/${id}`
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})

			if (!response.ok) {
				throw new Error(`Error: failed to create user - ${response.status} ${response.statusText}`)
			}

			const result: CreateUserResponse = await response.json()
			return result
		},
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['get-users'] })
		}
	})
}
