import { VscRobot } from 'react-icons/vsc'
import { dayjs } from '../../lib/dayjs'

export interface QuestionAnswerProps {
	id: string
	question: string
	answer: string | null
	createdAt: string
	isGeneratingAnswer?: boolean
}

export function QuestionAnswer({ question, answer, createdAt, isGeneratingAnswer }: QuestionAnswerProps) {
	return (
		<div data-testid='QuestionAnswerComponent' className='p-6 bg-white rounded-lg space-y-3'>
			<h3 className='font-medium'>{question}</h3>

			{(answer || isGeneratingAnswer) && (
				<div className='flex gap-4'>
					<div className='rounded-full p-1.5 bg-theme-primary-500 inline-block text-white size-fit'>
						<VscRobot className='size-5' aria-hidden />
					</div>
					<div className='p-4  text-zinc-700 text-sm bg-zinc-100 rounded-lg relative'>
						<span className='border-8 border-transparent border-r-zinc-100 absolute top-3 -left-4' />
						<p>
							{isGeneratingAnswer ? (
								<span className='flex gap-2 italic'>
									<span className='size-4 animate-spin rounded-full border border-t-transparent border-zinc-700 block' />
									Gerando resposta...
								</span>
							) : (
								answer
							)}
						</p>
					</div>
				</div>
			)}

			<div className='flex justify-end'>
				<p className='text-sm text-zinc-500'>{dayjs(createdAt).fromNow()}</p>
			</div>
		</div>
	)
}
