import { useQuery } from '@tanstack/react-query'
import type { RoomItemProps } from '../components/RoomItem/RoomItem'

export function useRoom(roomId?: string) {
	const { data } = useQuery<RoomItemProps[]>({
		queryKey: ['get-room'],
		queryFn: async () => {
			const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms/${roomId}`)
			return response.json()
		},
		enabled: !!roomId
	})

	return data ? data[0] : undefined
}
