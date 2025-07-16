import { dayjs } from '../../lib/dayjs'
import { Badge } from '../Badge/Badge'
import { Button } from '../Button/Button'

export interface RoomItemProps {
	id: string
	name: string
	description?: string
	questionsCount: number
	createdAt: string
}

export function RoomItem({ id, name, description, questionsCount, createdAt }: RoomItemProps) {
	return (
		<div data-testid='RoomItemComponent' title='Entrar' className='p-4 bg-white'>
			<div className='flex flex-col gap-2 mb-2'>
				<h3 className='font-heading text-zinc-800 flex gap-4 text-lg group-hover:text-white'>
					{name}
					<Badge questionsCount={questionsCount} />
				</h3>
			</div>
			<div className='flex justify-between items-center gap-4'>
				<div>
					<p className='text-sm text-zinc-500 group-hover:text-white'>{description}</p>
					<p className='ml-auto text-zinc-500 w-full text-sm transition group-hover:text-white'>
						{dayjs(createdAt).fromNow()}
					</p>
				</div>
				<Button as='link' to={`/room/${id}`}>
					Entrar
				</Button>
			</div>
		</div>
	)
}
