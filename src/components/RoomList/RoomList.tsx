import { useRooms } from '../../http/useRooms'
import { Alert } from '../Alert/Alert'
import { RoomItem } from '../RoomItem/RoomItem'

export function RoomList() {
	const { data, isLoading } = useRooms()
	console.log(data)
	return (
		<ul className='space-y-2 lg:max-h-[323px] overflow-y-auto'>
			{isLoading &&
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(item => (
					<li
						key={item}
						className='p-4 bg-white text-zinc-800 flex flex-col sm:flex-row gap-2 sm:items-center sm:gap-4 rounded-lg'
					>
						<div className='w-40 h-7 bg-zinc-200 animate-pulse rounded-md' />
						<div className='flex flex-1 items-center'>
							<div className='w-[88px] h-7 bg-zinc-200 animate-pulse rounded-[50px]' />
							<div className='w-[72px] h-5 bg-zinc-200 animate-pulse rounded-sm ml-auto' />
						</div>
					</li>
				))}

			{data?.length ? (
				data.map(room => (
					<li key={room.id}>
						<RoomItem id={room.id} name={room.name} questionsCount={room.questionsCount} createdAt={room.createdAt} />
					</li>
				))
			) : (
				<Alert variant='info'>Nenhuma sala encontrada.</Alert>
			)}
		</ul>
	)
}
