import { useQuery } from '@tanstack/react-query'
import { Room } from '../Room/Room'

type GetRoomAPIResponse = Array<{
  id: string
  name: string
  questionsCount: number
  createdAt: string
}>

export function RoomList() {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/rooms`)
      const result: GetRoomAPIResponse = await response.json()
      return result
    }
  })

  return (
    <ul className="space-y-2">
      {isLoading &&
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <li
            key={item}
            className="p-4 bg-white text-zinc-800 flex flex-col sm:flex-row gap-2 sm:items-center sm:gap-4 rounded-lg"
          >
            <div className="w-40 h-7 bg-zinc-200 animate-pulse rounded-md" />
            <div className="flex flex-1 items-center">
              <div className="w-[88px] h-7 bg-zinc-200 animate-pulse rounded-[50px]" />
              <div className="w-[72px] h-5 bg-zinc-200 animate-pulse rounded-sm ml-auto" />
            </div>
          </li>
        ))}

      {data?.map((room) => (
        <li key={room.id}>
          <Room
            id={room.id}
            name={room.name}
            questionsCount={room.questionsCount}
            createdAt={room.createdAt}
          />
        </li>
      ))}
    </ul>
  )
}
