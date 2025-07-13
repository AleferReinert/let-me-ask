import { Link } from 'react-router-dom'
import { dayjs } from '../../lib/dayjs'
import { Badge } from '../Badge/Badge'

export interface RoomItemProps {
	id: string
	name: string
	description?: string
	questionsCount: number
	createdAt: string
}

export function RoomItem({ id, name, questionsCount, createdAt }: RoomItemProps) {
	return (
		<Link
			data-testid='RoomItemComponent'
			to={`/room/${id}`}
			title='Entrar'
			className='p-4 bg-white text-zinc-800 flex flex-col gap-2 rounded-lg transition group hover:bg-theme-primary-500'
		>
			<h3 className='font-medium text-lg group-hover:text-white'>{name}</h3>
			<div className='flex items-center flex-1'>
				<Badge questionsCount={questionsCount} />
				<p className='ml-auto text-sm transition group-hover:text-white'>{dayjs(createdAt).fromNow()}</p>
			</div>
		</Link>
	)
}
