import { useQuery } from '@tanstack/react-query'
import type { RoomProps } from '../components/Room/Room'

export function useRooms() {
  return useQuery<RoomProps[]>({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
      return response.json()
    }
  })
}
