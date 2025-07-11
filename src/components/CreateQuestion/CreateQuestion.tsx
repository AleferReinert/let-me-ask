import { useState } from 'react'
import z from 'zod/v4'
import { useCreateQuestion } from '../../http/useCreateQuestion'
import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

interface CreateQuestionProps {
  roomId: string
}

export function CreateQuestion({ roomId }: CreateQuestionProps) {
  const { mutateAsync: createQuestion, isPending } = useCreateQuestion(roomId)
  const [question, setQuestion] = useState('')
  const [errors, setErrors] = useState('')

  async function handleCreateQuestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const schema = z.object({
      question: z.string().min(3, 'Mínimo de 3 caracteres')
    })

    const result = schema.safeParse({ question })

    if (!result.success) {
      const error = result.error.issues[0].message
      setErrors(error || '')
      return
    }

    await createQuestion({ question })
    setQuestion('')
    setErrors('')
  }

  return (
    <form onSubmit={handleCreateQuestion} className="max-w-xs mx-auto my-10">
      <div className="space-y-4">
        <div>
          <h3 className="font-heading text-2xl">Fazer uma pergunta</h3>
          <p className="text-zinc-500">Receba uma resposta gerada por IA</p>
        </div>
        <Field
          label="Sua pergunta"
          name="question"
          onChange={(e) => setQuestion(e.target.value)}
          value={question}
          as="textarea"
          required
          placeholder="O que você gostaria de saber?"
          errorMessage={isPending ? undefined : errors}
        />
        <Button className="w-full" disabled={isPending}>
          {isPending ? 'Enviando...' : 'Enviar pergunta'}
        </Button>
      </div>
    </form>
  )
}
