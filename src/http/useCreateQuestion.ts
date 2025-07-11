import { useMutation, useQueryClient } from '@tanstack/react-query'

interface CreateQuestionRequest {
  question: string
}

interface CreateQuestionResponse {
  questionId: string
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
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-questions', roomId] })
    }
  })
}
