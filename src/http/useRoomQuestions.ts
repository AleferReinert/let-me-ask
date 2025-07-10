import { useQuery } from '@tanstack/react-query'
import type { QuestionAnswerProps } from '../components/QuestionAnswer/QuestionAnswer'

export function useRoomQuestions(roomId: string) {
  return useQuery<QuestionAnswerProps[]>({
    queryKey: ['get-questions', roomId],
    queryFn: async () => {
      const url = `${import.meta.env.VITE_API_URL}/rooms/${roomId}/questions`
      const response = await fetch(url)
      return response.json()
    }
  })
}
