import { VscRecord } from 'react-icons/vsc'
import { Navigate, useParams } from 'react-router-dom'
import { Badge } from '../components/Badge/Badge'
import { Button } from '../components/Button/Button'
import { CreateQuestion } from '../components/CreateQuestion/CreateQuestion'
import { GoBackLink } from '../components/GoBackLink/GoBackLink'
import { Layout } from '../components/Layout/Layout'
import { PageHeader } from '../components/PageHeader/PageHeader'
import { QuestionList } from '../components/QuestionList/QuestionList'
import { useRoom } from '../http/useRoom'

export function RoomPage() {
	const { roomId } = useParams()
	const room = useRoom(roomId)

	if (!(roomId && room)) {
		return <Navigate replace to='/' />
	}

	return (
		<Layout>
			<GoBackLink />
			<div className='flex flex-col md:flex-row gap-4 justify-between [&>div]:mb-0 lg:mb-8'>
				<PageHeader
					title={
						<>
							Sala {room.name} <Badge questionsCount={room.questionsCount} />
						</>
					}
					description={room.description}
				/>
				<Button
					as='link'
					size='small'
					to={`/room/${roomId}/audio`}
					className='w-full sm:w-auto focus:outline-none ml-auto'
				>
					<VscRecord className='size-4 transition' aria-hidden />
					Gravar áudio
				</Button>
			</div>
			<CreateQuestion roomId={roomId} />
			<QuestionList roomId={roomId} />
		</Layout>
	)
}
