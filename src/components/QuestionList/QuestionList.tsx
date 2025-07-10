import { useRoomQuestions } from '../../http/useRoomQuestions'
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
    return <p className="text-zinc-500">Ainda não há perguntas nesta sala.</p>
  }

  return (
    <ul className="space-y-2">
      {data?.map((question) => (
        <li key={question.id}>
          <QuestionAnswer {...question} />
        </li>
      ))}
    </ul>
  )
}
