import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { QuestionAnswerProps } from '../components/QuestionAnswer/QuestionAnswer'

interface CreateQuestionRequest {
	question: string
}

interface CreateQuestionResponse {
	questionId: string
	answer: string | null
}

export function useCreateQuestion(roomId: string) {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: async (data: CreateQuestionRequest) => {
			const url = `${import.meta.env.VITE_API_URL}/rooms/${roomId}/questions`
			const response = await fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data)
			})

			if (!response.ok) {
				throw new Error(`Error: failed to create question - ${response.status} ${response.statusText}`)
			}

			const result: CreateQuestionResponse = await response.json()
			return result
		},
		onMutate({ question }) {
			const questions = queryClient.getQueryData<QuestionAnswerProps[]>(['get-questions', roomId])
			const questionsArray = questions ?? []
			const newQuestion = {
				id: crypto.randomUUID(),
				question,
				answer: null,
				createdAt: new Date().toISOString(),
				isGeneratingAnswer: true
			}

			queryClient.setQueryData<QuestionAnswerProps[]>(['get-questions', roomId], [newQuestion, ...questionsArray])

			return { newQuestion, questions }
		},
		onError(_error, _variables, context) {
			if (context?.questions) {
				queryClient.setQueryData<QuestionAnswerProps[]>(['get-questions', roomId], context.questions)
			}
		},
		onSuccess: (data, _variables, context) => {
			queryClient.setQueryData<QuestionAnswerProps[]>(['get-questions', roomId], questions => {
				if (!questions) {
					return questions
				}

				if (!context.newQuestion) {
					return questions
				}

				return questions.map(question => {
					if (question.id === context.newQuestion.id) {
						return {
							...context.newQuestion,
							id: data.questionId,
							answer: data.answer,
							isGeneratingAnswer: false
						}
					}

					return question
				})
			})
		}
	})
}
