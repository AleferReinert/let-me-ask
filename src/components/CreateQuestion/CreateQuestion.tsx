import { useState } from 'react'
import z from 'zod/v4'
import { useCreateQuestion } from '../../http/useCreateQuestion'
import { Alert } from '../Alert/Alert'
import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

interface CreateQuestionProps {
	roomId: string
}

export function CreateQuestion({ roomId }: CreateQuestionProps) {
	const { mutateAsync: createQuestion, isPending } = useCreateQuestion(roomId)
	const [question, setQuestion] = useState('')
	const [errors, setErrors] = useState('')
	const [alertError, setAlertError] = useState('')

	async function handleCreateQuestion(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()

		const schema = z.object({
			question: z.string().min(10, 'Mínimo de 10 caracteres')
		})

		const result = schema.safeParse({ question })

		if (!result.success) {
			const error = result.error.issues[0].message
			setErrors(error || '')
			return
		}

		try {
			await createQuestion({ question })
			setQuestion('')
			setErrors('')
			setAlertError('')
		} catch {
			setAlertError('Erro ao criar a pergunta.')
		}
	}

	return (
		<form onSubmit={handleCreateQuestion} className=' mx-auto my-10'>
			<div className='space-y-4'>
				<Field
					label='O que voce gostaria de saber?'
					name='question'
					onChange={e => setQuestion(e.target.value)}
					value={question}
					as='textarea'
					required
					placeholder='Faça uma pergunta e receba uma resposta gerada por IA...'
					errorMessage={errors}
					disabled={isPending}
				/>
				{alertError && <Alert variant='error'>{alertError}</Alert>}
				<Button className='w-full sm:w-auto ml-auto' disabled={isPending}>
					{isPending ? 'Enviando...' : 'Enviar pergunta'}
				</Button>
			</div>
		</form>
	)
}
