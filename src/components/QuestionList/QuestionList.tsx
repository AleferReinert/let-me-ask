import { useRoomQuestions } from '../../http/useRoomQuestions'
import { Alert } from '../Alert/Alert'
import { QuestionAnswer } from '../QuestionAnswer/QuestionAnswer'

interface QuestionListProps {
	roomId: string
}

export function QuestionList({ roomId }: QuestionListProps) {
	const { data, isLoading } = useRoomQuestions(roomId)

	if (isLoading) {
		return <p>Carregando...</p>
	}

	if (!data || data?.length === 0) {
		return <Alert variant='info'>Ainda não há perguntas nesta sala.</Alert>
	}

	return (
		<ul className='space-y-2'>
			{data?.map(question => (
				<li key={question.id}>
					<QuestionAnswer {...question} />
				</li>
			))}
		</ul>
	)
}
