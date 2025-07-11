import { Link } from 'react-router-dom'
import { dayjs } from '../../lib/dayjs'

export interface RoomItemProps {
  id: string
  name: string
  questionsCount: number
  createdAt: string
}

export function RoomItem({ id, name, questionsCount, createdAt }: RoomItemProps) {
  function getQuestionsLabel() {
    if (questionsCount === 0) {
      return 'Sem perguntas'
    }
    if (questionsCount === 1) {
      return '1 pergunta'
    }
    return `${questionsCount} perguntas`
  }

  return (
    <Link
      data-testid="RoomItemComponent"
      to={`/room/${id}`}
      title="Entrar"
      className="p-4 bg-white text-zinc-800 flex flex-col gap-2 rounded-lg transition group hover:bg-theme-primary"
    >
      <h3 className="font-medium text-lg group-hover:text-white">{name}</h3>
      <div className="flex items-center flex-1">
        <p className="text-xs text-white bg-theme-secondary font-medium rounded-[50px] py-1.5 px-3">
          {getQuestionsLabel()}
        </p>
        <p className="ml-auto text-sm transition group-hover:text-white">{dayjs(createdAt).fromNow()}</p>
      </div>
    </Link>
  )
}
