import { useQuery } from '@tanstack/react-query'
import type { RoomItemProps } from '../components/RoomItem/RoomItem'

export function useRoom(roomId?: string) {
	const { data, isLoading } = useQuery<RoomItemProps[]>({
		queryKey: ['get-room', roomId],
		queryFn: async () => {
			if (!roomId) {
				throw new Error('Room ID is missing')
			}
			const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}`)
			if (!response.ok) {
				throw new Error('Error fetching room')
			}
			return response.json()
		},
		enabled: !!roomId
	})

	return { data: data ? data[0] : undefined, isLoading }
}
