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

export function useCreateUser() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationKey: ['create-user'],
		mutationFn: async (data: CreateUserRequest) => {
			const url = `${import.meta.env.VITE_API_URL}/users`
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Cross-Origin-Embedder-Policy': 'unsafe-none'
				},
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
