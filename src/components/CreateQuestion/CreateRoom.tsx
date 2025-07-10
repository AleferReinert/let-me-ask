import { useState } from 'react'
import z from 'zod/v4'
import { useCreateRoom } from '../../http/useCreateRoom'
import { Button } from '../Button/Button'
import { Field } from '../Field/Field'

export function CreateRoom() {
  const { mutateAsync: createRoom } = useCreateRoom()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [nameErrors, setNameErrors] = useState('')

  async function handleCreateRoom(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await createRoom({ name, description })

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

    setNameErrors('')
    setName('')
    setDescription('')
  }

  return (
    <form onSubmit={handleCreateRoom} className="max-w-xs mx-auto my-10">
      <div className="space-y-4">
        <h3 className="font-heading text-2xl text-center">
          Criar uma nova sala
        </h3>
        <Field
          label="Nome da sala"
          name="room"
          errorMessage={nameErrors}
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
        <Button className="w-full">Criar sala</Button>
      </div>
    </form>
  )
}
