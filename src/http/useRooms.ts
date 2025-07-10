import { useQuery } from '@tanstack/react-query'

type GetRoomAPIResponse = Array<{
  id: string
  name: string
  questionsCount: number
  createdAt: string
}>

export function useRooms() {
  return useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
      const result: GetRoomAPIResponse = await response.json()
      return result
    }
  })
}
