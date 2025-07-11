import { useState } from 'react'
import z from 'zod/v4'
import { useCreateRoom } from '../../http/useCreateRoom'
import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

export function CreateRoom() {
  const { mutateAsync: createRoom, isPending } = useCreateRoom()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [nameErrors, setNameErrors] = useState('')

  async function handleCreateRoom(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const schema = z.object({
      name: z.string().min(3, 'Mínimo de 3 caracteres'),
      description: z.string().optional()
    })

    const result = schema.safeParse({ name, description })

    if (!result.success) {
      const fieldErrors: Record<string, string> = {}
      for (const issue of result.error.issues) {
        const path = issue.path[0]
        if (typeof path === 'string') {
          fieldErrors[path] = issue.message
        }
      }

      setNameErrors(fieldErrors.name || '')
      return
    }

    await createRoom({ name, description })

    setNameErrors('')
    setName('')
    setDescription('')
  }

  return (
    <form onSubmit={handleCreateRoom}>
      <div className="space-y-4">
        <h3 className="font-heading text-xl text-zinc-800">
          Criar uma nova sala
        </h3>
        <Field
          label="Nome da sala"
          name="room"
          errorMessage={isPending ? undefined : nameErrors}
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <Field
          label="Descrição"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          as="textarea"
        />
        <Button className="w-full" disabled={isPending}>
          {isPending ? 'Criando...' : 'Criar sala'}
        </Button>
      </div>
    </form>
  )
}
