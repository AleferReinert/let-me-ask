import type { RoomItemProps } from '../RoomItem/RoomItem'

interface BadgeProps extends Pick<RoomItemProps, 'questionsCount'> {}

export function Badge({ questionsCount }: BadgeProps) {
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
		<span className='text-xs whitespace-nowrap font-sans text-white bg-theme-secondary font-medium inline-flex h-fit rounded-[50px] py-1.5 px-3'>
			{getQuestionsLabel()}
		</span>
	)
}
