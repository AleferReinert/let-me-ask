import { useState } from 'react'
import z from 'zod/v4'
import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

export function CreateQuestion() {
  const [question, setQuestion] = useState('')

  function handleCreateQuestion(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const schema = z.object({
      question: z.string().min(3, 'Mínimo de 3 caracteres')
    })

    const result = schema.safeParse({ question })

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of result.error.issues) {
        const path = issue.path[0]
        if (typeof path === 'string') {
          fieldErrors[path] = issue.message
        }
      }
      return
    }

    setQuestion('')
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
        />
        <Button className="w-full">Enviar pergunta</Button>
      </div>
    </form>
  )
}
