import { useMutation, useQueryClient } from '@tanstack/react-query'

interface CreateRoomRequest {
  name: string
  description: string
}

interface CreateRoomResponse {
  roomId: string
}

export function useCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: CreateRoomRequest) => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        throw new Error(`Error: failed to create room - ${response.status} ${response.statusText}`)
      }

      const result: CreateRoomResponse = await response.json()
      return result
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
    }
  })
}
