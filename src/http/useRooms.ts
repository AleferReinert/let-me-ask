import { useQuery } from '@tanstack/react-query'
import type { RoomItemProps } from '../components/RoomItem/RoomItem'

export function useRooms() {
	return useQuery<RoomItemProps[]>({
		queryKey: ['get-rooms'],
		queryFn: async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
			return response.json()
		}
	})
}
