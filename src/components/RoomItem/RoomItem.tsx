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

export function RoomItem({ id, name, description, questionsCount, createdAt }: RoomItemProps) {
	return (
		<Link
			data-testid='RoomItemComponent'
			to={`/room/${id}`}
			title='Entrar'
			className='p-4 bg-white flex flex-col gap-2 rounded-lg transition group hover:bg-theme-primary-500'
		>
			<h3 className='font-medium text-zinc-800 flex gap-4 text-lg group-hover:text-white'>
				{name}
				<Badge questionsCount={questionsCount} />
			</h3>
			<p className='text-sm text-zinc-500 group-hover:text-white'>{description}</p>
			<div className='flex items-center flex-1'>
				<p className='ml-auto text-zinc-500 text-sm transition group-hover:text-white'>{dayjs(createdAt).fromNow()}</p>
			</div>
		</Link>
	)
}
